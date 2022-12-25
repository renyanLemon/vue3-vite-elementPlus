<template>
  <div class="common-layout">
    <el-container>
      <el-header :style="{ backgroundColor}" class="header">
            <Header></Header>
        </el-header>
      <el-container>
        <el-aside :width="computedWidth()">
          <Menu></Menu>
        </el-aside>
          <el-main>
            <router-view />
          </el-main>
        </el-container>
      </el-container>
  </div>
</template>
<script lang="ts" setup>
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'
import {setWaterMark } from '@/plugin/watermark.js'
import { getUserName } from '@/utils/cookies.js';
import * as moment from 'moment';
const store = useStore()

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
const backgroundColor = computed(() => store.getters.headerBackgroundColor)

onMounted(() => {
  console.log('onMountedonMountedonMounted')
  const userName = getUserName('userName')
    if(userName) {
      setWaterMark(userName, moment(new Date()).format("YYYY-MM-DD"));
    }
})
</script>
<style scoped>
.header {
  border-bottom: 1px solid #dcdfe6;;
}
</style>