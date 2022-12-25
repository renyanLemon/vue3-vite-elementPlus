<template>
    <!-- 如果当前菜单没有meta， 或当前菜单没有子菜单，或当前菜单只有一个子菜单，设置了不展示父菜单 -->
    <el-menu-item 
        v-if="!item.meta || !item.children || (item.children && item.children.length === 1 && !item.alwaysShow)"
        :key="item.path"
        :index="item.children ? item.children[0].path : item.path"
        >
        <el-icon v-if="item.children ? item?.children[0]?.meta?.icon : item?.meta?.icon" class="menu-icon">
            <component :is="item.children ? item?.children[0]?.meta?.icon : item?.meta?.icon" />
        </el-icon>
        <template #title>
            <span>{{ item.children ? item?.children[0]?.meta?.title : item?.meta?.title }}</span>
        </template>
    </el-menu-item>

    <!-- el-sub-menu 展开折叠 那一层，不是页面 -->
    <el-sub-menu v-else :index="item.path">
        <!-- 所有 展开/折叠 菜单那一层 -->
        <template #title>
            <el-icon v-if="item.meta.icon" class="menu-icon">
                <component :is="item.meta.icon" />
            </el-icon>
            <span>{{ item.meta.title }}</span>
        </template>

        <template v-for="option in item.children" :key="option.path">
            <!-- 有 子菜单 的，进入循环 -->
            <menu-item 
                v-if="option.children" 
                :key="option.path" 
                :item="option">
            </menu-item>

            <!-- 这是最后一级菜单 -->
            <el-menu-item 
                v-else 
                :index="option.path">
                <el-icon v-if="option.meta.icon" class="menu-icon">
                    <component :is="option.meta.icon" />
                </el-icon>
                <span>{{ option.meta.title }}</span>
            </el-menu-item>

        </template>
    </el-sub-menu>
</template>

<script lang='ts'>
  export default {
    name: 'MenuItem',
  };
</script>


<script lang='ts' setup>

defineProps({
    item: {
        type: Object,
        default: () => {}
    }
})

</script>
<style lang="less" scoped>
.menu-icon {
    font-size: 14px;
}
</style>
