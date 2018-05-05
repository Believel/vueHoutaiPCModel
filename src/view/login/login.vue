<template>
    <div class="login">
        <div class="loginbg">
            <img src="../../assets/img/loginbg.png" class="bgImg">
        </div>
        <div class="logincontent">
            <div class="content">
                <h1 class="title">廊坊智慧医保扶贫管理系统</h1>
                <div class="contentform">
                    <div class="input_div input_phone">
                        <el-input v-model="phone" placeholder="请输入手机号"></el-input>
                        <i></i>
                    </div>
                    <div class="input_div input_password">
                        <el-input v-model="password" placeholder="请输入密码"></el-input>
                        <i></i>
                    </div>
                    <div class="input_password">
                        <el-button type="primary" class="loginbtn" @click="login">登录</el-button>
                    </div>
                    <div class="register">
                        注册
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import utils from '@/util/util.js'
    import {post_login} from '@/api.js';
    export default {
        name: 'login',
        data () {
            return {
                phone: '',
                password: ''
            }
        },
        components: {

        },
        methods: {
            // 登录
            async login() {
              try {
                  // 手机号为空
                  if (!this.phone) {
                    utils.errortip('手机号不能为空!');
                    return;
                  }
                  // 密码为空
                  if (!this.password) {
                    utils.errortip('密码不能为空!');
                    return;
                  }
                  // 如果手机号和密码都不为空
                  if (this.phone && this.password) {
                    let phoneReg = /^1[3|4|5|8][0-9]\d{8}$/;
                    if (!phoneReg.test(this.phone)) {
                        utils.errortip('手机号规则不正确');
                        return;
                    }
                  }
                  let result = await post_login({
                    Username: this.phone,
                    Password: this.password
                  });
                  utils.successtip(res.data.Info);
                  // 调用登录接口
                  this.$router.push({'name': 'homechild'});
              } catch(e) {
                  console.log(e)
              } finally {

              }
            }
        },
        mounted() {

        },
        watch: {

        }
    }
</script>
<style lang="scss">
    .input_div {
        input {
            height: 50px;
        }
    }
</style>

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
            .content {
                .title {
                    padding: 40px 49.5px 20px;
                    margin: 0 auto;
                    color: $green_c;
                    font-size: $font16;
                    border-bottom: 1px solid $border_c;
                    font-family: 'PingFangSC-Medium';
                }
                .contentform {
                    margin: 0 49.5px;
                    .input_div {
                        position: relative;
                        i {
                            position: absolute;
                            right: 11px;
                            top: 15px;
                            @include wh(24px, 24px);
                        }
                    }
                    .input_phone {
                        margin-top: 32px;
                        i {
                            @include bis('../../assets/img/username.png');
                        }
                    }
                    .input_password {
                        margin-top: 25px;
                        i {
                            @include bis('../../assets/img/password.png');
                        }
                        .loginbtn {
                            width: 100%;
                            height: 50px;
                            font-size: $font8;
                        }
                    }
                    .register {
                        margin-top: 10px;
                        float: right;
                        color: $green_c;
                        font-size: $font4;
                    }
                }
            }
        }

    }
</style>
