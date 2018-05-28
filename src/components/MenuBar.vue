<template>
    <div class="menubar">
    </div>
</template>

<script>
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
                menuData: []
            }
        }
    }
</script>
<style lang="scss" scoped>

</style>

