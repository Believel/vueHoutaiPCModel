<template>
    <div class="fileContainer" v-loading="loading">
        <div class="infoin">
            <el-form class="ruleForm" :label-position="'right'" :model="ruleForm" status-icon label-width="130px" ref="ruleForm"> 
                <el-form-item class="itemform" style="width:100%" prop="imageUrl" label="图片上传器">
                    <div class="uploadimg uploadimg1">
                        <el-upload action="https://jsonplaceholder.typicode.com/posts/"
                            list-type="picture-card"
                            :limit="limit"
                            :on-exceed="exceedImg" 
                            :before-upload="beforeAvatarUpload"
                            :http-request="httpRequestUpload"
                            :on-preview="handlePictureCardPreview" 
                            :file-list="fileList"
                            :on-remove="handleRemove
                        ">
                            <i class="el-icon-plus"></i>
                            <div slot="tip" class="el-upload__tip">最多可上传5张图片，单张图片大小小于4MB</div>
                        </el-upload>
                        <el-dialog :visible.sync="dialogVisible">
                            <img width="100%" :src="dialogImageUrl" alt="">
                        </el-dialog>
                    </div>
                </el-form-item>
                <el-form-item class="itemform" style="width: 60%" prop="imageUrl" label="附件上传">
                    <div class="uploadimg uploadimg1">
                        <el-upload
                            class="upload-demo"
                            drag
                            action="https://jsonplaceholder.typicode.com/posts/"
                            multiple
                            :on-preview="handlePreview"
                            :on-remove="handleDocumentRemove"
                            :before-remove="beforeRemove"
                            :limit="limitnum"
                            :on-exceed="handleExceed"
                            :file-list="uploadList"
                            :beforeUpload="beforeDocumentUpload"
                            :http-request="httpRequestUpload">
                                <i class="el-icon-upload"></i>
                                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                                <div class="el-upload__tip" slot="tip">只能上传excel/word文件，且不超过4M</div>
                        </el-upload>
                    </div>
                </el-form-item>
            </el-form>
            <section class="stepbtn">
                <div class="app_btn_in" @click="submitForm('ruleForm')">提交</div>
            </section>
        </div>
    </div>
</template>
<script>
    import compress from 'src/util/tools/imgCompress.js';
    export default {
        data() {
            return {
                loading: false,
                ruleForm: {
                    imageUrl: '',
                    UploadList: [],
                    PovertyAlleviationImgs: []
                },
                limit: 5,     // 图片上传器最大允许上传个数
                fileList: [], // 图片上传器文件列表, 用于删除判断
                limitnum: 3, // 最大允许上传个数
                uploadList: [], // 附件上传列表，用于删除判断
                dialogVisible: false,
                dialogImageUrl: ''

            }
        },
        methods: {
            /* 图片上传相关start */
            exceedImg() {
                this.$message.error("最多只能上传5张图片");
            },
            // 删除文件
            handleRemove(file, fileList) {
                let imgs = this.ruleForm.PovertyAlleviationImgs;
                for (let i = 0; i < imgs.length; i++) {
                    if (imgs[i].uid == file.uid) {
                        imgs.splice(i, 1);
                    }
                }
            },
            
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            //步骤1上传图片限制
            beforeAvatarUpload(file) {
                console.log(file)

                const isJPG = (file.type == 'image/jpeg' || file.type == 'image/png' || file.type == 'image/jpg');
                const isLt2M = file.size / 1024 / 1024 < 4;
                if (!isJPG) {
                    this.$message.error('上传图片只能是 JPG/PNG/JPEG 格式!');
                    return false;
                }
                if (!isLt2M) {
                    this.$message.error('上传图片大小不能超过 4MB!');
                    return false;
                }
                return new Promise((resolve, reject) => {
                    compress(file, (base64, blob, imgFile) => {
                        this.ruleForm.PovertyAlleviationImgs.push({
                            base64: base64,
                            uid: imgFile.uid
                        });
                        // TODO upLoadImg
                        resolve();
                    })
                })
            },
            //把本地图片数据的base64提取出来上传
            getImgs(imgs) {
                let newImgs = [];
                imgs.forEach(item => {
                    newImgs.push(item.base64);
                })
                return newImgs;
            },
            // 覆盖默认的上传行为
            httpRequestUpload() { },
            /*图片上传相关end */

            /*附件上传相关方法start(word或者excel或pdf文件上传) */
            // 上传文件之前的钩子，参数为上传的文件，若返回false或者Promise且reject则停止上传
            beforeDocumentUpload(file) {
                console.log(file);
                const isJPG = (
                file.type == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || file.type == 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'  || file.name.indexOf(".xls") > 0 || file.name.indexOf(".doc") > 0);
                const isLt2M = file.size / 1024 / 1024 < 4;
                if (!isJPG) {
                    this.$message.error('只能上传word、excel文件!');
                    return false;
                }
                if (!isLt2M) {
                    this.$message.error('上传文件大小不能超过 4MB!');
                    return false;
                }
                // return new Promise(async (resolve, reject) => {
                //     try {
                //         this.loading = true;
                //         let formData = new FormData();
                //         formData.append("file", file);
                //         let result = await UploadNoticeFiles(formData);
                //         console.log(result);
                //         if(result.body.StatusCode != 0){
                //             this.$message.error('上传失败');
                //             this.loading = false;
                //             reject();
                //             return;
                //         }
                //         this.$message('上传成功');
                //         this.ruleForm.UploadList.push({
                //             uid: file.uid,
                //             name: file.name,
                //             FileName: file.name,
                //             FileUrl: result.body.Data.FileUrl
                //         });
                //         this.loading = false;
                //         resolve();
                //     } catch (error) {
                //         this.loading = false;
                //         reject();
                //     } finally {
                //         this.loading = false;
                //     }
                // })
                console.log(file);
            },
            // 删除文件之前的钩子，参数为上传的文件和文件列表，若返回false或者Promise且reject则停止上传
            handleDocumentRemove(fiel, fileList) {
                let list = this.ruleForm.UploadList;
                for (let i = 0; i < list.length; i++) {
                    if (list[i].uid == file.uid) {
                        list.splice(i, 1);
                    }
                }
            },
            // 文件超出个数限制时的钩子
            handleExceed(files, fileList) {
                this.$message.error("最多只能上传3个文件");
            },
            // 点击文件列表中已上传的文件时的钩子
            handlePreview(file) {

            },
            beforeRemove(file, fileList) {
                return true;
            },
            // 覆盖默认的上传行为
            httpRequestUpload(){},
           
           /*附件上传相关方法end */

            // 表单提交
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        // 将图片中的base64取出来存放在数组中，发送给后台
                        let imgs = this.getImgs(this.ruleForm.PovertyAlleviationImgs);
                        // 调用后台接口
                        // todo
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    .infoin {
        padding: 30px;
        .stepbtn {
            padding: 10px 0 30px 24px;
            text-align: center;
        }
        .app_btn_in {
            margin: 0 auto;
            width: 100px;
            height: 30px;
            line-height: 30px;
            background-color: #409EFF;
            color: #ffffff;
            border-radius: 4px;
        }
    }

</style>
