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
    </div>
</template>

<script>
import Title from '@/components/MyTitle';
export default {
    name: 'practice',
    data() {
        return {
            visible: false
        }
    },
    components: {
        Title
    },
    created() {},
    mounted() {},
    methods: {}
}
</script>

<style lang="scss">
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
