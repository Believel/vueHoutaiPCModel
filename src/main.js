// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import $ from 'n-zepto'
import $ from 'jquery'
import router from './router'
import store from "./store.js"
import vueUtil from "./util/vueUtil.js"
import axios from 'axios'
import elementUi from 'element-ui'
import '../static/css/element-ui/lib/theme-chalk/index.css'

//阻止vue在启动时生成生产提示
Vue.config.productionTip = false
Vue.use(vueUtil);
// 完整的引入了Element,那么Vue.prototype上会有一个全局的$loading，它的调用方式为：this.$loading(options),会返回一个Loading实例
Vue.use(elementUi);
Vue.prototype.$http = axios;
console.log(Vue.prototype)
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
