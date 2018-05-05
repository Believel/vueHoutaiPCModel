<template>
  <div class="home">
      <!-- 顶部导航 -->
      <TopNav></TopNav>
      <!-- 左边菜单项 -->
      <div class="sidemenu">

      </div>
      <!-- 面包屑 -->
      <div class="breadcrumb">

      </div>
      <!-- 二级路由内容 -->
      <div class="content">
          <router-view></router-view>
      </div>
      <!-- 底部版权 -->
      <div class="copyright">

      </div>
  </div>
</template>
<script>
  import TopNav from 'components/TopNav';
  export default {
      name: 'home',
      data () {
        return {}
      },
      components: {
          TopNav
      },
      methods: {

      },
      mounted() {

      },
      watch: {

      }
  }
</script>
<style lang="scss" scoped>
  .home {
      .sidemenu {
          @include all();
          width: 258px;
          height: auto;
          background-color: red;
          position: absolute;
          right: 0;
          bottom: 0;
          left: 0;
          top: 58px;
      }
      .breadcrumb {
          @include all();
          top: 58px;
          left: 258px;
          height: 55px;
          background-color: pink;
      }
      .content {
        @include all();
        top: 113px;
        bottom: 55px;
        left: 258px;
        background: #fff;
        overflow-y: scroll;
      }
      .copyright {
        @include all();
        height: 55px;
        left: 258px;
        bottom: 0;
        top: auto;
        background-color: #ccc;
      }
  }
</style>
