<template>
    <div :style="{ backgroundColor}" class="logo-container">
        <svg-icon name="vue" size="35px" />
        <span :style="{color}"> vue3-vite-elementPlus </span>
    </div>
</template>
<script lang="ts">
export default {
    name: 'Logo'
}
</script>
<script lang="ts" setup>
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()

const color = computed(() => store.getters.logoColor)
const backgroundColor = computed(() => store.getters.logoBackgroundColor)

</script>
<style lang="less" scoped>
.logo-container {
    height: 58px;
    line-height: 58px;
}
</style>
