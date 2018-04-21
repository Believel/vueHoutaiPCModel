<template>
    <div id="homePage">
        <div>项目使用库 element-ui jquery axios vuex sass</div>
        <img class="titleImg" src="../assets/logo.png">
        <hr>
        <p>2.这里使用了vuex name: {{name}}</p>
        <hr>
        <button v-on:click="changeName('改变了值')">3.点击我改变vuex值</button>
        <div class="center">1.我使用sass @include center居中</div>
        <HelloWorld title="组件:HelloWorld"></HelloWorld>
        <hr>
        <button v-on:click="getBaidu()">5.点击发送get请求 并且打印config.js</button>
        <hr>
        <button v-on:click="postBaidu()">6.点击发送post请求</button>
        <hr>
        <button v-on:click="getDom()">7.集成jquery点击获取dom元素</button>
    </div>
</template>

<script>
import config from '@/config.js';
import { setTimeout } from 'timers';

//引入vuex
import { mapMutations, mapState } from 'vuex'

import HelloWorld from "@/components/HelloWorld.vue";
import {
    get_baidu,
    post_baidu
} from '@/api.js';

export default {
    name: 'HomePage',
    props: [],
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    computed: {
        /* 使用mapMutaions遍历vuex里的mutations */
        ...mapState([
            'name'
        ])
    },
    components: {
        HelloWorld
    },
    mounted() {
        this.$message('欢迎使用基础模板!');
    },
    methods: {
        /* 使用mapMutaions遍历vuex里的mutations */
        ...mapMutations([
            'changeName'
        ]),
        async getBaidu() {
            /* ajax请求演示 使用es7 async await */
            try {
                var result = await get_baidu({ hehe: 1 });
            } catch (error) {
                console.log(error);
            }
            /* 这里使用了config 会合成环境静态变量以及通用静态变量 */
            this.$message("发送ajax请求，打印全局静态变量去控制台查看");
            console.log("全局静态变量",config);
        },
        async postBaidu() {
            /* ajax请求演示 使用es7 async await */
            try {
                var result = await post_baidu({ hehe: 1 });
            } catch (error) {
                console.log(error);
            }
        },
        getDom(){
            this.$message("控制台已经输出dom节点");
            console.log($('#homePage'));
        }
    },
}
</script>

<style lang="scss" scope>
#homePage {
    text-align: center;
    .center {
        @include center();
        color: $black_c;
    }
    .titleImg {
        width: 350px;
    }
    button {
        border: 1px solid;
        cursor: pointer;
        background: #ffffff;
    }
}
</style>
