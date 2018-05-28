<template>
    <div class="menuPage">
         <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        <el-menu class="menu-Bar" :collapse="isCollapse">
            <MenuTree :menuData="this.menuData"></MenuTree>
        </el-menu>
    </div>
</template>

<script>
// https://www.jianshu.com/p/35dd41d8173d
    import MenuTree from 'components/MenuBar';
    let Data = 
        [
            {
                "id": 1,
                "parent_id": 0,
                "menu_name": "第一级菜单 1",
                "sorting": 0,
                "node": [
                    {
                        "id": 2,
                        "parent_id": 1,
                        "menu_name": "第二级菜单 1-1",
                        "sorting": 0,
                        "node": [
                            {
                                "id": 3,
                                "parent_id": 2,
                                "menu_name": "第三级菜单 1-1-1",
                                "sorting": 1
                            }
                        ]
                    }
                ]
            },
            {
                "id": 4,
                "parent_id": 0,
                "menu_name": "第一级菜单 2",
                "sorting": 0,
                "node": [
                    {
                        "id": 5,
                        "parent_id": 4,
                        "menu_name": "第二级菜单 2-1",
                        "sorting": 0
                    }
                ]
            }
        ]
    

    export default {
        data() {
            return {
                isCollapse: false,
                menuData: Data,
            }
        },
        components: {
            MenuTree
        }
    }
</script>

<style scoped lang="scss">

</style>


