<template>
    <div class="menubar">
        <template  v-for="value in menuData">
          <!--  inde 唯一标志-->
            <el-submenu
                v-if="value.childs && value.entity && value.entity.state == 'ENABLE'"
                :key="value.entity.id"
                :data="value"
                :index="value.entity.name">
                <template slot="title">
                    <i :class="value.entity.icon"></i>
                    <span slot="title">{{value.entity.alias}}</span>
                </template>
                <MenuBar :menuData="value.childs"></MenuBar>
            </el-submenu>
            <!-- index是唯一标志 -->
            <el-menu-item
                :index="value.entity.value"
                v-if="value.childs==null && value.entity && value.entity.state === 'ENABLE'"
                :key="value.entity.id"
                :data="value"
                :route="value.entity.value" disabled="">
               <i :class="value.entity.icon"></i>
               <span slot="title">{{value.entity.alias}}</span>
            </el-menu-item>
        </template>
    </div>
</template>

<script>

    export default {
        name: 'MenuBar',
        props: ['menuData'],
        data() {
            return {
            }
        }
    }
</script>
<style lang="scss" scoped>

</style>
