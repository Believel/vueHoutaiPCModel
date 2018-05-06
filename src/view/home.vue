<template>
  <div class="home">
      <!-- 顶部导航 -->
      <TopNav></TopNav>

      <!-- 左边菜单项 -->
      <SideMenu></SideMenu>

      <!-- 面包屑 -->
      <BreadCrumb></BreadCrumb>

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
  import SideMenu from 'components/SideMenu';
  import BreadCrumb from 'components/BreadCrumb';
  export default {
      name: 'home',
      data () {
        return {}
      },
      components: {
          TopNav,
          SideMenu,
          BreadCrumb
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
      .content {
        @include all();
        top: 113px;
        bottom: 55px;
        left: 258px;
        background: #F3F3F4;
        overflow-y: auto;
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
