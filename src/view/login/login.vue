<template>
    <div class="login">
        <div class="loginbg">
            <img src="../../assets/img/loginbg.png" class="bgImg">
        </div>
        <div class="logincontent">
            
        </div>
        <el-button type="primary" @click="login">登录</el-button>
    </div>
</template>
<script>
    export default {
        name: 'login',
        data () {
        return {}
        },
        components: {

        },
        methods: {
            // 登录
            login() {
                this.$router.push({'name': 'homechild'});
            }
        },
        mounted() {
            
        },
        watch: {

        }
    }
</script>
<style lang="scss" scoped>
    .login {
        .loginbg {
            @include all();
            overflow: hidden;
            .bgImg {
                width: 100%;
                height: 100%;
            }
        }
        .logincontent {
            @include center();
            width: 483px;
            height: 454px;
            background-color: $bg_cw;
        }
        
    }
</style>
