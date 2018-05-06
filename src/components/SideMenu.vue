<template>
    <div class="sidemenu">
        <el-collapse v-model="activeName" accordion>
            <el-collapse-item v-for="(item, index ) in menulist" :name="`${index}`" :key="index">
                <template slot="title">
                    <i class="iconimg" :class="item.imgname"></i> {{item.name}}
                </template>
                <ul class="menuul">
                  <li v-for="(child, index) in item.children" :key="index" class="menuli"  :type="child.page" @click="menuclick(child)">{{child.name}}</li>
                </ul>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
    import menuList from '@/resources/menulist.json'
    import router from '@/router';
    import {mapMutations} from 'vuex';
    export default {
        data() {
            return {
                menulist: menuList,
                activeName: ['0'] // 默认选中
            }
        },
        created() {
            // 3. 当路由改变时也要改变菜单项的指向
            router.beforeEach((to, from, next) => {
                let arr = to.path.split('/');
                let name = arr[2];
                this.menuLight(name);
                this.savefreshname(this.getBreadNames(name, arr));
                next();
            });
        },
        mounted() {
            // 1.当刷新浏览器是会触发
            // 2. 当从登录页进入会触发
            setTimeout(() => {
               this.savefreshname(this.setMenuHandler());
            }, 1000)
        },
        methods: {
          /**
           * 点击二级菜单显示不同的路由视图
           * @param item 当前的菜单项{name: '系统首页', page: 'homechild', list: [{name: '', page: ''}]}
           */
           menuclick(item) {
              // 1. 跳转路由
              this.$router.push({"name": item.page});
           },
           /**
            *  当前菜单项名字设置为白色
            */
           menuLight(page) {
                $('.menuul').find('.menuli').removeClass('myWhite');
                $('.menuul').find("[type$= '"+page+"']").addClass('myWhite');
           },
           /**
            *  根据路由地址设置当前菜单项高亮
            */
            setMenuHandler() {
                // 1. 得到当前路由
                let url = window.location.href;
                let arr = url.split('#')[1].split('/');
                let name = arr[2];
                // 3.高亮显示
                this.menuLight(name);
                // 4.设置当前手风琴索引并找到每级菜单的名称，并返回
                return this.getBreadNames(name, arr);
            },
            /**
             *  得到当前面包屑的导航名称并且设置当前点击菜单项的父级为选中项
             * @param name  当前点击的菜单页
             * @param arr  当前路由地址
             * return refreshHtml 一段字符串
             */
            getBreadNames(name, arr) {
                let name1 = ''; // 一级菜单名称
                let name2 = ''; // 二级菜单名称
                let name3 = ''; // 三级菜单名称
                let menuIndex = ''; // 当前单击的父级索引
                let refreshHtml = ''; // 返回的字符串名字
                for (let item of this.menulist) {
                    for (let child of item.children) {
                        if (child.page === name) {
                            name1 = item.name;
                            name2 = child.name;
                            menuIndex = this.menulist.findIndex((value, index) => {
                                return value.name === item.name;
                            })
                            menuIndex = menuIndex.toString();
                            if (child.list && child.list.length > 0) {
                                for (let listitem of child.list) {
                                    if (listitem.page === arr[3]) {
                                        name3 = listitem.name;
                                    }
                                }
                            }
                            break;
                        }
                    }
                }
                this.activeName = [];
                this.activeName.push(menuIndex);
                if (name3 !== '') {
                    refreshHtml = `<span>${name1}</span> / <span>${name2}</span> / <span>${name3}</span>`;
                } else {
                    refreshHtml = `<span>${name1}</span> / <span>${name2}</span>`
                }
                return refreshHtml;

            },
            ...mapMutations({
                'savefreshname' : 'SAVEREFRESHNAME'
            })
        }

    }
</script>

<style lang="scss">
    .sidemenu {
        .el-collapse {
            width: 258px;
            border: 0;
            font-family: 'PingFangSC-Medium';
            .el-collapse-item .el-collapse-item__header {
               font-size: 16px;
                height: 38px;
                line-height: 38px;
                background: transparent;
                color: $bg_cw;
                padding: 8px 15px 8px 25px;
                border-bottom: 1px solid #34404C;
                .iconimg {
                    display: inline-block;
                    position: relative;
                    top: 5px;
                    @include wh(24px, 24px);
                    margin-right: 11px;
                }
                .btn_shouye {
                    @include bis('../assets/img/btn_shouye1.png')
                }
                .btn_guanli {
                    @include bis('../assets/img/icon_guanli_hover.png')
                }
                .btn_tongji {
                    @include bis('../assets/img/btn_jianli1.png')
                }
                .btn_fankui {
                    @include bis('../assets/img/btn_baogao1.png');
                }
                .btn_tongzhi {
                    @include bis('../assets/img/btn_tongji1.png');
                }
                .btn_sysshezhi {
                    @include bis('../assets/img/btn_jiancha1.png');
                }
            }
            .el-collapse-item.is-active .el-collapse-item__header .el-collapse-item__arrow {
              transform: rotate(270deg);
            }
            .el-collapse-item__wrap {
              border: 0;
            }
            .el-collapse-item .el-collapse-item__header .el-collapse-item__arrow {
                font-weight: bold;
                line-height: 38px;
            }
            .el-collapse-item .el-collapse-item__content {
              padding-bottom: 0;
              background-color: #2F4050;
              font-family: 'PingFangSC-Regular';
              .menuul {
                  margin-left:57px;
                  padding-top: 22px;
                  .menuli {
                    padding-bottom: 22px;
                    font-size: 14px;
                    color: #cccccc;
                  }
                  .myWhite {
                      color: #ffffff;
                  }
              }
            }
            .el-collapse-item.is-active .el-collapse-item__header.is-active {
                height: 38px;
                background-color: $green_c;
                .btn_shouye {
                    @include bis('../assets/img/btn_shouye2.png')
                }
                .btn_guanli {
                    @include bis('../assets/img/icon_guanli.png')
                }
                .btn_tongji {
                    @include bis('../assets/img/btn_jianli2.png')
                }
                .btn_fankui {
                    @include bis('../assets/img/btn_baogao2.png');
                }
                .btn_tongzhi {
                    @include bis('../assets/img/btn_tongji2.png');
                }
                .btn_sysshezhi {
                    @include bis('../assets/img/btn_jiancha2.png');
                }
            }
        }
    }
</style>
<style lang="scss" scoped>
    .sidemenu {
        @include all();
        width: 258px;
        height: auto;
        background-color: $bg_side;
        top: 58px;
        // padding-top: 8px;
        overflow-x: hidden;
        overflow-y: auto;
    }

</style>
