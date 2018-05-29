<template>
    <div class="menuPage">
         <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起{{defaultOpen}}</el-radio-button>
        </el-radio-group>
        <!-- 水平方向 -->
        <!-- default-openeds 当前打开的sub-menu中index的值 -->
        <el-menu
          :default-active="defaultOpen"
          class="el-menu-vertical-demo"
          @select="menuSelected"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          :unique-opened="true"
          router>
            <MenuTree :menuData="menuData.childs"></MenuTree>
            <!-- <el-menu-item index="1">
                <i class="el-icon-menu"></i>
                <span slot="title">处理中心</span>
            </el-menu-item>
            <el-submenu index="2">
                  <template slot="title">
                      <i class="el-icon-message"></i>
                      <span>导航一</span>
                  </template>
                  <el-menu-item index="/home/homechild">选项1</el-menu-item>
                  <el-menu-item index="/home/poorpeoplemanage">选项2</el-menu-item>
                  <el-submenu index="2-3">
                      <template slot="title">选项3</template>
                      <el-menu-item index="2-3-1">选项1</el-menu-item>
                      <el-menu-item index="2-3-2">选项2</el-menu-item>
                  </el-submenu>
            </el-submenu> -->
        </el-menu>
    </div>
</template>

<script>
// https://www.jianshu.com/p/35dd41d8173d
    import MenuTree from 'components/MenuBar';
    let Data =
    {
      "entity": null,
      "childs": [
          {
              "entity": {
                  "id": 1,
                  "parentMenuId": 0,
                  "name": "systemManage",
                  "icon": "el-icon-message\r\n",
                  "alias": "系统管理",
                  "state": "ENABLE",
                  "sort": 0,
                  "value": null,
                  "type": "NONE",
                  "discription": "用于系统管理的菜单",
                  "createUserId": 1
              },
              "childs": [
                  {
                      "entity": {
                          "id": 3,
                          "parentMenuId": 1,
                          "name": "authManage",
                          "icon": "el-icon-loading",
                          "alias": "权限管理",
                          "state": "ENABLE",
                          "sort": 0,
                          "value": "/home/homechild",
                          "type": "LINK",
                          "discription": "用于权限管理的菜单",
                          "createUserId": 1
                      },
                      "childs": null
                  },
                  {
                      "entity": {
                          "id": 4,
                          "parentMenuId": 1,
                          "name": "roleManage",
                          "icon": "el-icon-bell",
                          "alias": "角色管理",
                          "state": "ENABLE",
                          "sort": 1,
                          "value": "/system/role",
                          "type": "LINK",
                          "discription": "用于角色管理的菜单",
                          "createUserId": 1
                      },
                      "childs": null
                  },
                  {
                      "entity": {
                          "id": 2,
                          "parentMenuId": 1,
                          "name": "menuManage",
                          "icon": "el-icon-edit",
                          "alias": "菜单管理",
                          "state": "ENABLE",
                          "sort": 2,
                          "value": "/system/menu",
                          "type": "LINK",
                          "discription": "用于菜单管理的菜单",
                          "createUserId": 1
                      },
                      "childs": null
                  },
                  {
                      "entity": {
                          "id": 5,
                          "parentMenuId": 1,
                          "name": "groupManage",
                          "icon": "el-icon-mobile-phone\r\n",
                          "alias": "分组管理",
                          "state": "ENABLE",
                          "sort": 3,
                          "value": "/system/group",
                          "type": "LINK",
                          "discription": "用于分组管理的菜单",
                          "createUserId": 1
                      },
                      "childs": null
                  }
              ]
          },
          {
              "entity": {
                  "id": 6,
                  "parentMenuId": 0,
                  "name": "userManage",
                  "icon": "el-icon-news",
                  "alias": "用户管理",
                  "state": "ENABLE",
                  "sort": 1,
                  "value": null,
                  "type": "NONE",
                  "discription": "用于用户管理的菜单",
                  "createUserId": 1
              },
              "childs": [
                  {
                      "entity": {
                          "id": 7,
                          "parentMenuId": 6,
                          "name": "accountManage",
                          "icon": "el-icon-phone-outline\r\n",
                          "alias": "帐号管理",
                          "state": "ENABLE",
                          "sort": 0,
                          "value": "",
                          "type": "NONE",
                          "discription": "用于帐号管理的菜单",
                          "createUserId": 1
                      },
                      "childs": [
                          {
                              "entity": {
                                  "id": 14,
                                  "parentMenuId": 7,
                                  "name": "emailManage",
                                  "icon": "el-icon-sold-out\r\n",
                                  "alias": "邮箱管理",
                                  "state": "ENABLE",
                                  "sort": 0,
                                  "value": "/content/email",
                                  "type": "LINK",
                                  "discription": "用于邮箱管理的菜单",
                                  "createUserId": 1
                              },
                              "childs": null
                          },
                          {
                              "entity": {
                                  "id": 13,
                                  "parentMenuId": 7,
                                  "name": "passManage",
                                  "icon": "el-icon-service\r\n",
                                  "alias": "密码管理",
                                  "state": "ENABLE",
                                  "sort": 1,
                                  "value": "/content/pass",
                                  "type": "LINK",
                                  "discription": "用于密码管理的菜单",
                                  "createUserId": 1
                              },
                              "childs": null
                          }
                      ]
                  },
                  {
                      "entity": {
                          "id": 8,
                          "parentMenuId": 6,
                          "name": "integralManage",
                          "icon": "el-icon-picture",
                          "alias": "积分管理",
                          "state": "ENABLE",
                          "sort": 1,
                          "value": "/user/integral",
                          "type": "LINK",
                          "discription": "用于积分管理的菜单",
                          "createUserId": 1
                      },
                      "childs": null
                  }
              ]
          },
          {
              "entity": {
                  "id": 9,
                  "parentMenuId": 0,
                  "name": "contentManage",
                  "icon": "el-icon-rank",
                  "alias": "内容管理",
                  "state": "ENABLE",
                  "sort": 2,
                  "value": null,
                  "type": "NONE",
                  "discription": "用于内容管理的菜单",
                  "createUserId": 1
              },
              "childs": [
                  {
                      "entity": {
                          "id": 10,
                          "parentMenuId": 9,
                          "name": "classifyManage",
                          "icon": "el-icon-printer",
                          "alias": "分类管理",
                          "state": "ENABLE",
                          "sort": 0,
                          "value": "/content/classify",
                          "type": "LINK",
                          "discription": "用于分类管理的菜单",
                          "createUserId": 1
                      },
                      "childs": null
                  },
                  {
                      "entity": {
                          "id": 11,
                          "parentMenuId": 9,
                          "name": "articleManage",
                          "icon": "el-icon-star-on",
                          "alias": "文章管理",
                          "state": "ENABLE",
                          "sort": 1,
                          "value": "/content/article",
                          "type": "LINK",
                          "discription": "用于文章管理的菜单",
                          "createUserId": 1
                      },
                      "childs": null
                  },
                  {
                      "entity": {
                          "id": 12,
                          "parentMenuId": 9,
                          "name": "commentManage",
                          "icon": "el-icon-share",
                          "alias": "评论管理",
                          "state": "ENABLE",
                          "sort": 2,
                          "value": "/content/comment",
                          "type": "LINK",
                          "discription": "用于评论管理的菜单",
                          "createUserId": 1
                      },
                      "childs": null
                  }
              ]
          }
      ]
      }


    let menuDataDemo =
      [
        {
          id: '1',
          path:''
        }
      ];

    export default {
        data() {
            return {
                isCollapse: false,
                menuData: Data,
                active: [1],
                defaultOpen: '/home/homechild'
            }
        },
        computed: {

        },
        components: {
            MenuTree
        },
        methods: {
            handleOpen(key, keyPath) {
               console.log(key);
               console.log(keyPath);
            },
            menuSelected(index, indexPath) {
              console.log(index);
              console.log(indexPath);
            }
        }
    }
</script>

<style  lang="scss">
    .menu-Bar:not(.el-menu--collapse) {
       width: 200px;
       min-height: 400px;
    }
    .el-menu {
      width: 200px;
    }
</style>
