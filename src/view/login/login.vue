<template>
    <div class="login">
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
        color: $red_c;
        
    }
</style>
