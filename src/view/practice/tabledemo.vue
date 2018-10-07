<template>
    <div>
        <el-table
            :data="tableData4"
            style="width: 100%"
            max-height="250">
            <el-table-column
            fixed
            prop="date"
            label="日期"
            width="150">
            </el-table-column>
            <el-table-column
            prop="name"
            label="姓名"
            width="120">
            </el-table-column>
             <el-table-column>
            label="操作22"
            width="120">
            <template slot-scope="scope">
                <el-button
                @click.native.prevent="deleteRow1(scope.row, 'ruleForm')"
                type="text"
                size="small">
                移除1111
                </el-button>
            </template>
            </el-table-column>
            <el-table-column
            prop="province"
            label="省份"
            width="120">
            </el-table-column>
            <el-table-column
            prop="city"
            label="市区"
            width="120">
            </el-table-column>
            <el-table-column
            prop="address"
            label="地址"
            width="300">
            </el-table-column>
            <el-table-column
            prop="zip"
            label="邮编"
            width="120">
            </el-table-column>
            <el-table-column
            fixed="right"
            label="操作"
            width="120">
            <template slot-scope="scope">
                <el-button
                @click.native.prevent="deleteRow(scope.row, 'ruleForm2')"
                type="text"
                size="small">
                移除
                </el-button>
            </template>
            </el-table-column>
        </el-table>
         <el-dialog
                title="证件信息"
                :visible.sync="cardIDProvisible"
                width="529px"
                :before-close="handleClosePoorPeopleImgs('ruleForm2')"
                :modal="true"
                :modal-append-to-body="false"
                :append-to-body="false"
                id="deleteProvisible">
            <el-form ref="ruleForm2" :inline="true"  :model="ruleForm2" :rules="PoorPeopleImgsRules"  class="ruleForm2" :label-position="'right'" label-width="160px">
                <el-form-item class="itemform" prop="Name" label="姓名">
                    <el-input class="inputsize" :maxlength="30" placeholder="请输入姓名" type="text" v-model="ruleForm2.Name">
                    </el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="PoorPeopleImgsDiss('ruleForm2')" class="deletediss">取消</el-button>
                <el-button type="primary" @click="PoorPeopleImgsSubmit('ruleForm2')" class="suredelete">提交</el-button>
            </span>
            
        </el-dialog>
        <el-dialog
                title="证件信息"
                :visible.sync="cardIDProvisible1"
                width="529px"
                :before-close="handleClosePoorPeopleImgs('ruleForm')"
                :modal="true"
                :modal-append-to-body="false"
                :append-to-body="false"
                id="deleteProvisible">
            <el-form ref="ruleForm" :inline="true"  :model="ruleForm" :rules="PoorPeopleImgsRules"  class="ruleForm2" :label-position="'right'" label-width="160px">
                <el-form-item class="itemform" prop="Name" label="姓名">
                    <el-input class="inputsize" :maxlength="30" placeholder="请输入姓名" type="text" v-model="ruleForm.Name">
                    </el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="PoorPeopleImgsDiss('ruleForm')" class="deletediss">取消</el-button>
                <el-button type="primary" @click="PoorPeopleImgsSubmit('ruleForm')" class="suredelete">提交</el-button>
            </span>
            
        </el-dialog>
    </div>
</template>

<script>
    export default {    
        data() {
            return {
                cardIDProvisible: false,
                cardIDProvisible1: false,
                ruleForm2: {
                    Name: ''
                },
                PoorPeopleImgsRules: {
                    Name: [{required: true, message: '不能为空', trigger:'change'}]
                },
                ruleForm: {
                    Name: ''
                },
                tableData4: [{
                date: '2016-05-03',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
                }, {
                date: '2016-05-02',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
                }, {
                date: '2016-05-04',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
                }, {
                date: '2016-05-01',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
                }, {
                date: '2016-05-08',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
                }, {
                date: '2016-05-06',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
                }, {
                date: '2016-05-07',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
                }]
            }
        },
        methods: {
            handleClosePoorPeopleImgs(formName) {

            },
            PoorPeopleImgsDiss(formName) {

            },
            PoorPeopleImgsSubmit(formName) {

            },
            deleteRow(item, formName) {
                this.cardIDProvisible = true;
                this.$nextTick(()=>{
                    this.$refs[formName].model.Name = item.name;
                    this.$refs[formName].validate();
                })
            },
            deleteRow1(item, formName) {
                this.cardIDProvisible1 = true;
                this.$nextTick(()=>{
                    this.$refs[formName].model.Name = item.name;
                    this.$refs[formName].validate();
                })
            }
        }
    }
</script>