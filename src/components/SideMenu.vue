<template>
    <div class="sidemenu">
        <el-collapse v-model="activeName" accordion>
            <el-collapse-item v-for="(item, index ) in menulist" :name="`${index}`" :key="index">
                <template slot="title">
                    <i class="iconimg" :class="item.imgname"></i> {{item.name}}
                </template>
                <ul class="menuul">
                  <li v-for="child in item.children" :key="child.name" class="menuli">{{child.name}}</li>
                </ul>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
    import menuList from '@/resources/menulist.json'
    export default {
        data() {
            return {
                menulist: menuList,
                activeName: '0' // 默认选中
            }
        },
        mounted() {
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
              background-color: #2F4050;
              color: #cccccc;
              font-family: 'PingFangSC-Regular';
              .menuul {
                  margin-left:57px;
                  padding-top: 22px;
                  .menuli {
                    padding-bottom: 22px;
                    font-size: 14px;
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
        padding-top: 8px;
        overflow-x: hidden;
        overflow-y: auto;
    }

</style>
