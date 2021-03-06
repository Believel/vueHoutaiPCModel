import Vue from 'vue'
import Router from 'vue-router'
import home from '@/view/home'                           // 系统首页
import login from '@/view/login/login';                  // 登录页面
import practice from '@/view/practice/practice';         // 练习界面
import tabledemo from '@/view/practice/tabledemo';         // 表格界面
import homechild from '@/view/home/homechild';           // 系统首页
import menuPage from '@/view/menuPage';       // 树形菜单

import fileUpload from '@/view/fileUpload/fileUpload' // 文件上传
import animationDemo from '@/view/animation/animation.vue' // vue相关动画练习


Vue.use(Router)

export default new Router({
    routes: [
        /*{ path: '*', component: NotFoundComponent },//404页面*/
        {
            path: '/home',
            name: 'home',
            component: home,
            title: "首页",
            children: [
                // 系统首页
                {
                    path: 'homechild',
                    name: 'homechild',
                    component: homechild
                },
                {  //练习页面
                    path: 'poorpeoplemanage',
                    name: 'poorpeoplemanage',
                    component: practice
                },
                {
                    path: 'fileUpload',
                    name: 'fileUpload',
                    component: fileUpload
                },
                {
                    path: 'tabledemo',
                    name: 'tabledemo',
                    component: tabledemo
                },
                {
                    path: 'menuPage',
                    name: 'menuPage',
                    component: menuPage,
                    title: '菜单'
                }
            ]
        },
        {
            path: '/menuPage',
            name: 'menuPage',
            component: menuPage,
            title: '菜单'
        },
        {
          path: '/',
          name: 'login',
          component: login,
          title: "登录"
        },
        {
            path: '/animationDemo',
            name: 'animationDemo',
            component: animationDemo,
            title: "动画"
        }
       
    ]
})
