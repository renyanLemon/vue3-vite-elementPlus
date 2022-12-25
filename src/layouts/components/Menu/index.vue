<template>
  <div>
      <el-menu
        class="elMenuVertical"
        router
        :collapse="collapse"
        @open="handleOpen"
        @close="handleClose"
      >
      <template v-for="item in routes" :key="item.path">
        <menu-item v-if="!item.hidden" :item="{ ...item }"></menu-item>
      </template>
      </el-menu>
       <component
        class="icon-hover fold menu-icon-collapse"
        :is="collapse ? 'icon-menu-fold-one' : 'icon-menu-unfold-one'"
        theme="filled"
        size="26"
        :strokeWidth="4"
        fill="#666"
        @click="handleCollapse"
        />
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Menu'
  };
</script>

<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const collapse = computed(() => store.getters.collapse)
const language = computed(() => store.getters.language)
const routes = computed(() => store.getters.permissionRoutes)

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const handleCollapse = () => {
  store.dispatch('theme/changeCollapse');
};

const computedWidth = computed(() => {
  return () => {
    if(store.getters.collapse) {
      return '100px'
    } else {
      if(store.getters.language === 'cn') {
        return '250px'
      }else if(store.getters.language === 'zh-cn') {
        return '200px'
      }
    }
  }
})

</script>

<style lang="less">
// :not 非选择，排除括号内的其它元素
// 只有collapse是false的时候才起效果，为true折叠状态不起效果
// :is
.elMenuVertical {
  height: calc(100vh - 100px);
}
.menu-icon-collapse {
  margin-left: 20px;
}
</style>
