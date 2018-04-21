<template>
  <div class="home">
      <!-- 顶部导航 -->
      <div class="top">

      </div>
      <!-- 左边菜单项 -->
      <div class="sidemenu">

      </div>
      <!-- 面包屑 -->
      <div class="breadcrumb">

      </div>
      <!-- 二级路由内容 -->
      <div class="content">

      </div>
      <!-- 底部版权 -->
      <div class="copyright">

      </div>
  </div>
</template>
<script>
  export default {
    name: 'home',
    data () {
      return {}
    },
    components: {

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
      .top {
          width: 100%;
          height: 58px;
          background-color: green;
      }
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
          width: 100%;
          height: 55px;
          background-color: pink;
      }
      .content {
        @include all();
        top: 113px;
        bottom: 55px;
        left: 258px;
        background: orange;

      }
      .copyright {
        @include all();
        height: 55px;
        width: 100%;
        left: 258px;
        bottom: 0;
        top: auto;
        background-color: #ccc;

      }
  }
</style>
