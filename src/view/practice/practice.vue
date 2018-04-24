<template>
    <div class="practice">
        <el-button @click="visible=true">Button</el-button>
        <el-dialog :visible.sync="visible" title="Hello World">
            <p>Try Element</p>
        </el-dialog>
        <Title mytitle="栅格组件"></Title>
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark"></div>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="8">
                <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple-light"></div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple"></div>
            </el-col>
        </el-row>
        <Title mytitle="按钮"></Title>
        <el-row>
            <!-- type plain round circle -->
            <el-button plain>默认按钮</el-button>
            <el-button type="primary">默认按钮</el-button>
            <el-button type="success">默认按钮</el-button>
            <el-button type="info">默认按钮</el-button>
            <el-button type="warning">默认按钮</el-button>
            <el-button type="danger">默认按钮</el-button>
        </el-row>
        <el-row>
            <el-button plain>默认按钮</el-button>
            <el-button type="primary" plain>默认按钮</el-button>
        </el-row>
        <el-row>
            <el-button round disabled>默认按钮</el-button>
            <el-button type="primary" round>默认按钮</el-button>
        </el-row>
        <el-row>
            <el-button icon="el-icon-search">默认按钮</el-button>
            <el-button type="primary" icon="el-icon-edit" circle></el-button>
        </el-row>
        <el-row>
            <el-button type="text">文字信息</el-button>
            <el-button type="text" disabled>文字信息</el-button>
            <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
        </el-row>
        <el-row>
            <el-button-group>
                <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
                <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
            </el-button-group>
            <el-button type="primary" :loading="true" size="medium">
                lodding
            </el-button>
        </el-row>
        <Title mytitle="单选按钮"></Title>
        <el-row>
            <el-radio v-model="sex" label="man">男</el-radio>
            <el-radio v-model="sex" label="women">女</el-radio>
        </el-row>
        <el-row>
            <el-radio-group v-model="radio2" @change="radiochange">
                <el-radio :label="1">备选项</el-radio>
                <el-radio :label="2">备选项</el-radio>
                <el-radio :label="3">备选项</el-radio>
            </el-radio-group>
        </el-row>
        <Title mytitle="复选按钮"></Title>
        <el-row>
            <el-checkbox v-model="checked" disabled>备选项</el-checkbox>
        </el-row>
        <el-row>
            <el-checkbox-group v-model="checkList">
                <el-checkbox label="复选框 A"></el-checkbox>
                <el-checkbox label="复选框 B"></el-checkbox>
                <el-checkbox label="复选框 C"></el-checkbox>
                <el-checkbox label="禁用" disabled></el-checkbox>
                <el-checkbox label="选中且禁用" disabled></el-checkbox>
            </el-checkbox-group>
        </el-row>
        <el-row>
            <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleChangeAll">全选</el-checkbox>
            <div style="margin: 10px 0;"></div>
            <el-checkbox-group v-model="checkedCities" @change="handleChangeCheckedCities">
                <el-checkbox v-for="(item, index) in cities" :label="item" :key="index">
                    {{item}}
                </el-checkbox>
            </el-checkbox-group>
        </el-row>
        <Title mytitle="输入框"></Title>
        <el-row>
            <el-col :span="8">
                <el-input v-model="input" placehoder="请输入" clearable></el-input>
            </el-col>
        </el-row>

        <Title mytitle="计数器"></Title>
        <el-input-number v-model="num" @change="handleChangeNum" controls-position="left" :min="1" :max="10" :step="2" label="文字描述"></el-input-number>
        
        <Title mytitle="选择器"></Title>
        <el-row>
            <el-select  v-model="value" placehoder="单选可清空" clearable >
                <el-option v-for="item in options" :label="item.label" :value="item.value" :key="item.value" :disabled="item.disabled">
                </el-option>
            </el-select>
        </el-row>
        <el-row>
            <el-select v-model="value1" multiple collapse-tags placeholder="多选">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> 
                </el-option>
            </el-select>
        </el-row>
        <el-row>
            <el-select v-model="value2" placeholder="分组选择">
                <el-option-group v-for="group in options3" :key="group.label" :label="group.label" :value="group.label">
                    <el-option v-for="item in group.options" :key="item.label" :label="item.label" :value="item.value">
                    </el-option>
                </el-option-group>
            </el-select>
        </el-row>

        <Title mytitle="开关"></Title>
        <el-row>
            <el-col :span="3">
                <el-switch v-model="switch1" active-color="#13ce66" inactive-color="#ff4949" @change="handlechangeHandle"></el-switch>
            </el-col>
           <el-col :span="8">
                <el-switch disabled v-model="switch2" active-text="按月付费" inactive-text="按年付费"></el-switch>
           </el-col>
        </el-row>
        <Title mytitle="滑块"></Title>
        <el-row>
            <el-col :span="3">默认</el-col>
            <el-col :span="21">
                <el-slider v-model="slider1"></el-slider>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="3">自定义初始值</el-col>
            <el-col :span="21" >
                <el-slider v-model="slider2"></el-slider>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="3">隐藏Tooltip</el-col>
            <el-col :span="21" >
                <el-slider v-model="slider3" :show-tooltip="false" :step="10"></el-slider>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="3">格式化</el-col>
            <el-col :span="21" >
                <el-slider v-model="slider4" :format-tooltip="formatTooltip"></el-slider>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="3">禁用</el-col>
            <el-col :span="21">
                <el-slider v-model="slider5" disabled></el-slider>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="3">带有输入框</el-col>
            <el-col :span="21">
                <el-slider v-model="slider5" show-input></el-slider>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="3">范围选择</el-col>
            <el-col :span="21">
                <el-slider v-model="slider6" range :max="10" show-stops></el-slider>
            </el-col>
        </el-row>
         <el-row>
            <el-col :span="3">竖向模式</el-col>
            <el-col :span="21">
                <el-slider v-model="slider7" vertical height="200px"></el-slider>
            </el-col>
        </el-row>
        <Title mytitle="时间选择器"></Title>
        <el-row>
            <el-col :span="3">
                固定时间点
            </el-col>
            <el-col :span="10">
                <el-time-select v-model="time1" :picker-options="{start: '07:00', end: '18:30', step: '00:15'}" placeholder="选择时间">
                </el-time-select>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="3">
                任意时间点
            </el-col>
            <el-col :span="10">
                <el-time-picker v-model="time2" arrow-control :picker-options="{selectableRange: '18:30:00 - 20:30:00'}" placeholder="任意时间点">
                </el-time-picker>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="3">
                固定时间范围
            </el-col>
            <el-col :span="8">
                <el-time-select placeholder="起始时间" v-model="startTime" :picker-options="{start: '08:30',step: '00: 15', end: '18:30'}">
                </el-time-select>
            </el-col>
            <el-col :span="8">
                <el-time-select placeholder="结束时间" v-model="endTime" :picker-options="{start: '08:30',step: '00: 15', end: '18:30', minTime: startTime}">
                </el-time-select>
            </el-col>
        </el-row>
        <Title mytitle="日期选择器"></Title>
        <el-row>
            <el-col :span="3">
                默认
            </el-col>
            <el-col :span="5">
                <el-date-picker v-model="date1" type="date" placeholder="请选择日期">
                </el-date-picker>
            </el-col>
        </el-row>
        <Title mytitle="时间日期选择器"></Title>
        <el-row>

        </el-row>
        <Title mytitle="折叠面板"></Title>
        <el-row>
            <el-collapse v-model="activeNames" @change="handleCollapse" accordion>
                <el-collapse-item title="一致性" name="0">
                    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                </el-collapse-item>
                <el-collapse-item title="反馈" name="1">
                    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                </el-collapse-item>
            </el-collapse>
        </el-row>
        <el-row>
            自定义面板标题
        </el-row>
        <el-row>
            <el-collapse accordion v-model="activeNames1">
                <el-collapse-item v-for="(menulist, index) in menulists" :key="index" :name="`${index}`">
                    <template slot="title">
                        {{menulist.name}}
                    </template>
                    <ul>
                        <li v-for="(item, index) in menulist.menuli" :key="index">{{item.name}}</li>
                    </ul>
                </el-collapse-item>
            </el-collapse>
        </el-row>

        
















        
        <Title mytitle="对话框"></Title>
        <el-button type="primary" @click="dialogVisible = true">点击打开dialog</el-button>
        <Title mytitle="警告"></Title>
        <el-row>
            <el-alert title="成功的提示" type="success" center show-icon :closable="false"></el-alert>
        </el-row>
        <el-row>
             <el-alert title="消息提示信息" type="info" show-icon description="文字说明文字说明文字说明"></el-alert>
        </el-row>
        <el-row>
             <el-alert title="警告提示" type="warning" @close="getclose"></el-alert>
        </el-row>
        <el-row>
             <el-alert title="错误提示" type="error"></el-alert>
        </el-row>
        
        <Title mytitle="加载"></Title>
        <el-table
            v-loading="loading2"
            element-loading-text="拼命加载中"
            element-loading-spinner="el-icon-loading"
            element-loading-background="rgba(0, 0, 0, 0.8)"
            :data="gridData"
            style="width: 100%">
            <el-table-column
                prop="date"
                label="日期"
                width="180">
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名"
                width="180">
            </el-table-column>
            <el-table-column
                prop="address"
                label="地址">
            </el-table-column>
        </el-table>
        <el-row style="margin-top: 10px;">
            <el-button type="primary" @click="openFullScreen" v-loading.fullscreen.lock="fullscreenLoading">指令方式</el-button>
            <el-button type="primary" @click="openFullScreen2">服务方式</el-button>
        </el-row>
        
        <Title mytitle="消息提示"></Title>
        <el-button :plain="true" @click="open">打开消息提示</el-button>
        <el-button :plain="true" @click="openVn">VNode</el-button>
        <el-row style="margin-top: 10px;">
            <el-button :plain="true" @click="open1">成功</el-button>
            <el-button :plain="true" @click="open2">消息</el-button>
            <el-button :plain="true" @click="open3">警告</el-button>
            <el-button :plain="true" @click="open4">错误</el-button>
        </el-row>
        <Title mytitle="弹框"></Title>
       
        
        
        



        <!-- 模态框 -->
        <el-dialog title="收货地址" :visible.sync="dialogVisible" width="50%" :before-close="handleClose" center>
            <el-table :data="gridData">
                <el-table-column property="date" label="日期" width="150"></el-table-column>
                <el-table-column property="name" label="姓名" width="200"></el-table-column>
                <el-table-column property="address" label="地址" ></el-table-column>
            </el-table>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible=false">取消</el-button>
                <el-button type="primary" @click="dialogVisible=false">确定</el-button>
            </span>
        </el-dialog>
        
    </div>
</template>

<script>
import Title from '@/components/MyTitle';
export default {
    name: 'practice',
    data() {
        return {
            visible: false,
            sex: 'man',
            radio2: 1,
            checked: true,
            checkList: ['选中且禁用', '复选框 A'],
            isIndeterminate: true,
            checkAll: false,
            checkedCities: ['上海', '北京'],
            cities: ['上海', '北京', '广州', '深圳'],
            input: '',
            num: 1,
            options: [{
                value: '选项1',
                label: '黄金糕'
            }, {
                value: '选项2',
                label: '双皮奶'
            }, {
                value: '选项3',
                label: '蚵仔煎',
                disabled: true
            }, {
                value: '选项4',
                label: '龙须面'
            }, {
                value: '选项5',
                label: '北京烤鸭'
            }],
            value: '',
            value1: [],
            value2: '',
            options3: [
                {
                    label: '热门城市',
                    options: [
                        {
                            value: 'Shanghai',
                             label: '上海'
                        },
                        {
                            value: 'Beijing',
                            label: '北京'
                        }
                    ]
                },
                {
                    label: '城市名',
                    options: [
                        {
                            value: 'Chengdu',
                            label: '成都'
                        },
                        {
                            value: 'Shenzhen',
                            label: '深圳'
                        },
                        {
                            value: 'Guangzhou',
                            label: '广州'
                        },
                        {
                            value: 'Dalian',
                            label: '大连'
                        }
                    ]
                }
            ],
            // 开关
            switch1: true,
            switch2: true,
            // 滑块
            slider1: 0,
            slider2: 10,
            slider3: 100,
            slider4: 40,
            slider5: 33,
            slider6: [4, 8],
            slider7: 12,
            // 时间选择器
            time1: '',
            time2: '',
            time3: '',
            time4: '',
            startTime: '',
            endTime: '',
            // 日期选择器
            date1: '',
            date2: '',
            // 日期时间选择器
            datetime1: '',
            datetime2: '',
            // 对话框
            dialogVisible: false,
            // 表格数据
            gridData: [
                {date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄'},
                {date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄'},
                {date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄'},
                {date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄'}
            ],
            loading2: true,
            fullscreenLoading: false,
            // 折叠面板
            activeNames: ['0'],
            activeNames1: ['0'],
            menulists: [
                {name: '首页', imgname: 'home', menuli: [{name: '系统首页', page: 'homechild'}, {name: '账户设置', page: 'accoutset'}]},
                {name: '管理', imgname: 'manage', menuli: [{name: '系统首页', page: 'homechild'}, {name: '账户设置', page: 'accoutset'}]},
                {name: '比例', imgname: 'case', menuli: [{name: '系统首页', page: 'homechild'}, {name: '账户设置', page: 'accoutset'}]}
            ]

        }
    },
    components: {
        Title
    },
    created() {},
    mounted() {
    },
    methods: {
        // 单选按钮事件
        radiochange(value) {
            console.log(value)
        },
        // 全选
        handleChangeAll(all) {
            this.checkedCities = all ? this.cities : [];
            this.isIndeterminate = false;
        },
        // 城市选择事件
        handleChangeCheckedCities(city) {
            let checkedCount = city.length;
            this.checkAll = checkedCount === this.cities.length;
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
        },
        // 改变数值方法
        handleChangeNum(value) {
            console.log(value);
        },
        // 关闭模态框
        handleClose(done) {
            console.log(done);
            this.$confirm('确定关闭？')
                .then(_ => {
                    done();
                })
                .catch(_ => {});
        },
        // 关闭回调
        getclose() {
            alert('哈哈')
        },
        openFullScreen() {
            this.fullscreenLoading = true;
            setTimeout(() =>{
                this.fullscreenLoading = false;
            }, 10000)
        },
        // 服务方式加载全屏loading
        openFullScreen2() {
            const loading = this.$loading({
                lock: true,
                text: 'Loading',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
            });
            setTimeout(() => {
                loading.close();
            }, 2000);
        },
        // 打开消息提示
        open() {
            this.$message('这是一条消息提示');
        },
        openVn() {
            const h = this.$createElement;
            console.log(h);
            this.$message({
                message: h('p', null, [h('span', null, '内容可以是'), h('i', {style: 'color: teal'}, 'VNode')])
            })

        },
        open1() {
            this.$message({
                showClose: true,
                message: '恭喜你，已经成功了',
                type: 'success',
                center: true
            })
        },
        open2() {
            this.$message('这是一条消息');
        },
        open3() {
            this.$message({
                message: '警告哦，这是一条警告消息',
                type: 'warning'
            })
        },
        open4() {
            this.$message.error('错了哦，这是一条错误消息');
        },
        // 开关
        handlechangeHandle(value) {
            console.log(value);// true / false
        },
        // 滑块
        formatTooltip(val) {
            return val / 100;
        },
        // 折叠面板
        handleCollapse(value) {
            console.log(value);
        }

    }
}
</script>

<style lang="scss">
    .practice {
        padding: 10px;
    }
    .el-row {
        margin-bottom: 20px;
         .el-col {
             border-radius: 4px;
            .bg-purple-dark {
                background: #99a9bf;
            }
            .grid-content {
                border-radius: 4px;
                min-height: 36px;
            }
            .bg-purple {
                background: #d3dce6;
            }
            .bg-purple-light {
                background: #e5e9f2;
            }

        }
        
    }
   
</style>
