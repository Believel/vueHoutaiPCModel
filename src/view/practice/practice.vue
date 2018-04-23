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
        <el-select  v-model="value" placehoder="请选择" clearable >
            <el-option v-for="item in options" :label="item.label" :value="item.value" :key="item.value" :disabled="item.disabled">
            </el-option>
        </el-select>
        <Title mytitle="对话框"></Title>
        <el-button type="primary" @click="dialogVisible = true">点击打开dialog</el-button>



        <!-- 模态框 -->
        <el-dialog title="收货地址" :visible.sync="dialogVisible" width="50%" :before-close="handleClose">
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
            // 对话框
            dialogVisible: false,
            // 表格数据
            gridData: [
                {date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄'},
                {date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄'},
                {date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄'},
                {date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄'}
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
