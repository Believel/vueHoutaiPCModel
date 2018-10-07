<template>
    <div class="animation">
        <button @click="show=!show">
            toggle render
        </button>

        <!-- JavaScript钩子函数 -->

        <transition
                @before-enter="beforeEnter"
                @enter="enter"
                @after-enter="afterEnter"
                @enter-cancelled="enterCancelled"
                
                @before-leave="beforeLeave"
                @leave="leave"
                @after-leave="afterLeave"
                @leave-cancelled="leaveCancelled">
            <p v-if="show">
                DEMO
            </p>
        </transition>   
        
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: true,
                show2: true
            }
        },
        mounted() {
           
        },
        methods: {
            // 进入时
            beforeEnter(el) {
                el.style.opacity = 0;
                el.style.transformOrigin = 'left';
            },
            enter(el, done) {
                Velocity(el, {opacity: 1, fontSize: '1.4em'}, {duration: 300})
                Velocity(el, {fontSize: '1em'}, {complete: done})
                // 当只用javaScript过渡的时候，在enter和leave中必须使用done进行回调。否则，它们将被同步调用，过渡会立即完成
                // done()
            },
            afterEnter(el) {

            },
            enterCancelled(el) {

            },
            // 离开时
            beforeLeave(el) {

            },
            leave(el, done) {
                Velocity(el, {translateX: '15px', rotateZ: '50deg'}, {duration: 600})
                Velocity(el, {rotateZ: '100deg'}, {loop: 2})
                Velocity(el, {
                    rotateZ: '45deg',
                    translateX: '30px',
                    translateY: '30px',
                    opacity: 0
                }, {complete: done})
            },
            afterLeave(el) {

            },
            leaveCancelled(el) {

            }

        }
    }
    // v-enter: 定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除
    // v-enter-active: 定义进入过渡生效时的状态。在整个进入过渡的阶段中应用,在元素被插入之前生效，在
    //                 过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。
</script>

<style lang="scss" scoped>
    .fade-enter-active {
        transition: opacity .5s;
    }
    .fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0)
    }
    .fade-enter, .fade-leave-to {
        transform: translateX(10px);
        opacity: 0;
    }
    .bounce-enter-active {
        animation: bounce-in .5s;
    }
    .bounce-leave-active {
        animation: bounce-in .5s reverse;
    }
    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.5)
        }
        100% {
            transform: scale(1)
        }
    }
</style>

