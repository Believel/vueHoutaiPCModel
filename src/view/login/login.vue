<template>
  <div class="login">
    <div class="loginin"><img class="backimg" src="../../assets/img/loginback.jpg"/></div>
    <div class="contentlogin">

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
      //背景图片缩放
        scalebackimg(_domimg){
            //scrollHeight
            let scrollw = document.documentElement.scrollWidth,
                scrollh = document.documentElement.scrollHeight<720?720:document.documentElement.scrollHeight,
                clientw = document.documentElement.clientWidth,
                clienth = document.documentElement.clientHeight,
                backimg = $('.backimg'),
                loginin = $('.loginin'),
                contentlogin = $('.contentlogin'),
                w = _domimg.width,
                h = _domimg.height,
                outscale = scrollw/scrollh,
                inscale = w/h;

            //外框宽高比大于里面图片时，图片100%高度，否则100%宽度
            loginin.css('width' ,'100%');
            loginin.css('height' ,'100%');
			if(outscale>inscale){
                backimg.css('width',scrollw);
                backimg.css('height',scrollw/inscale);
                backimg.css('top',(scrollh-scrollw/inscale)/2);
                backimg.css('left',0);
			}else{
                backimg.css('width',scrollh*inscale);
                backimg.css('height',scrollh);
                backimg.css('top',0);
                backimg.css('left',(scrollw-scrollh*inscale)/2);
            }
            if(clienth<700){
                loginin.css('height' ,'700px');
            }
            if(clientw<550){
                loginin.css('width' ,'550px');
            }
            // //内容垂直居中
            let _top = (clienth - contentlogin.height())/2;
            if(_top<20) _top = 20;
            contentlogin.css('top' ,_top+'px');
        },
        //执行缩放
        initscaleimg(){
            var img = new Image();
            img.src = logoinback;
            img.onload = ()=>{
                this.scalebackimg(img);
                window.onresize = ()=>{
                    window.requestAnimationFrame( () => {
                        this.scalebackimg(img);
                    });
                }
            }
        },
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
          overflow: hidden;
          .backimg{
              z-index: -1;
              position: absolute;
              min-width: 1052px;
              min-height: 658px;
          }
      }
  }
</style>
