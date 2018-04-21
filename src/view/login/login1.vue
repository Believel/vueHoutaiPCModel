<template>
  <div class="login">
      <div class="loginin">
          <img src="../../assets/img/loginback.jpg" class="backimg">
      </div>
      <div class="contentlogin">
          <div class="logoinout">
              <div class="logoinc">


              </div>
          </div>
          <div class="copyright">
              <span>Copyright © *******************, All Rights Reserved.</span>
          </div>
      </div>
  </div>
</template>
<script>
  import logoinback from '../../assets/img/loginback.jpg'
  export default {
    name: 'login',
    data () {
      return {}
    },
    components: {

    },
    methods: {
      // 执行缩放
      initscaleimg() {
          $('.backimg').onload = () => {
            window.onresize = ()=> {
              window.requestAnimationFrame( () => {
                $('.backimg').height = $(window).height();
                $('.backimg').width = $(window).width();
              })
            }
          }
      }
    },
    mounted() {
      this.initscaleimg();
    },
    watch: {

    }
  }
</script>
<style lang="scss" scoped>
  .login {
      .loginin{
          position: absolute;
          width: 100%;
          height: 100%;
          z-index: -1;
          overflow: hidden;
          .backimg {
            height: 100%;
            width: 100%;
          }
      }
      .contentlogin {
          @include center();
          width: 100%;
          height: 300px;
          background-color: $bg_c;
          .logoinout {
            width: 984px;
            height: 300px;
            border: 1px solid red;
            margin: 0 auto;
          }
      }
  }
</style>
