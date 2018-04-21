<template>
    <div id="app">
      <transition name="router-fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {}
    },
    components: {},
    created() {},
    mounted() {},
    methods: {}
}
</script>

<style lang="scss">
    /* 全局resetCss 重置 */
    @import './assets/css/resetCss.css';
    @import './assets/css/mixin.scss';
    #app {
        font-family: 'PingFangSC-Regular';
        color: #000000;
        font-size: 16px;
    }
</style>
