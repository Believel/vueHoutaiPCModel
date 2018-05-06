<template>
    <div class="breadcrumb">
        <div class="left" v-html="refreshstr">
        </div>
        <div class="right">
            <el-button @click="refresh" icon="el-icon-refresh">刷新</el-button>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        data() {
            return {
               
            }
        },
        methods: {
            refresh() {
                window.location.reload();
            }
        },
        computed: {
            ...mapState([
              'refreshstr'
            ])
        }
    }
</script>
<style  lang="scss">
    .el-button {
        @include wh(82px, 35px);
        padding: 0;
    }
    .el-icon-refresh {
        font-size: 16px;
    }
</style>
<style lang="scss" scoped>
    .breadcrumb {
        @include all();
        top: 58px;
        left: 258px;
        height: 58px;
        background-color: #ffffff;
        .left {
            margin-left: 28px;
            @include font(14px, 58px, 'PingFangSC-Regular');
            color: #676A6C ;
        }
        .right {
          position: absolute;
          right: 31px;
          top: 10px;
          bottom: 9px;
        }
    }
</style>
