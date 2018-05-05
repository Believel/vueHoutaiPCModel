<template>
  <div class="topnav">
      <!-- 左边导航 S-->
      <div class="navleft">
        <img src="../assets/img/logo.png" title="廊坊智慧医保扶贫管理系统">
      </div>
      <!-- 左边导航 E -->
      <div class="navright">
          <img src="../assets/img/name.png" class="username">
          <span class="name">超级管理员</span>
          <i class="el-icon-arrow-down down"></i>
          <i class="line"></i>
          <img src="../assets/img/home.png" class="homeimg">
          <i class="line"></i>
          <img src="../assets/img/loginout.png" class="loginout" @click="loginout">
      </div>
  </div>
</template>

<script>
    export default {
      name: 'TopNav',
      data() {
        return {}
      },
      methods: {
        loginout() {
          this.$router.push({path: '/'})
        }
      }
    }
</script>
<style lang="scss" scoped>
    .topnav {
        width: 100%;
        height: 58px;
        background-color: $green_c;
        .navleft {
            width: 258px;
            height: 58px;
            img {
              width: 100%;
              height: 100%;
            }
        }
        .navright {
            position: absolute;
            right: 23px;
            top: 20px;
            bottom: 16px;
            .loginout {
              width: 16px;
              height: 22px;
            }
            .line {
              width: 1px;
              height: 22px;
              display: inline-block;
              margin: 0 18px;
              background-color: #CBCBCB;
            }
            .homeimg {
              width: 19px;
              height: 21px;
            }
            .down {
              font-weight: 700;
              position: relative;
              top: -5px;
              color: #ffffff;
            }
            .username {
              width: 24px;
              height: 24px;
            }
            .name {
              position: relative;
              top: -5px;
              color:#ffffff;
            }

        }
    }
</style>
