import Vue from 'vue'
import Router from 'vue-router'
import home from '@/view/home'
import login from '@/view/login/login1';

Vue.use(Router)

export default new Router({
    routes: [
        /*{ path: '*', component: NotFoundComponent },//404页面*/
        {
            path: '/home',
            name: 'home',
            component: home,
            title: "首页"
        },
        {
          path: '/',
          name: 'home',
          component: home,
          title: "登录"
        }
    ]
})
