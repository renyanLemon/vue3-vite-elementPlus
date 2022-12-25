<template>
    <div class="header-container">
      <!-- <component>标签是Vue框架自定义的标签，它的用途就是可以动态绑定我们的组件，根据数据的不同更换不同的组件 -->
      <!-- component通过属性is的值可以渲染不同的组件 -->
        <logo />
        <div class="avatar-container">
          <el-avatar :size="40" :src="circleUrl" />
            <el-dropdown>
            <span class="el-dropdown-user">
              <span class="user-name">{{userName}}</span>
              <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="signOut">退出</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
    </div>
</template>

<script lang="ts">
  export default {
    name: 'Header',
  };
</script>

<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { getUserName } from '@/utils/cookies.js';

const router = useRouter()
const store = useStore()

const collapse = computed(() => store.getters.collapse)
const userName = getUserName('userName')

const circleUrl = $ref('https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png')

const signOut = () => {
  store.dispatch('userInfo/logout').then(() => {
    router.push('/login')
  })
}
</script>
<style lang="less" scoped>
.header-container {
  z-index: 99999999999;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
  line-height: 60px;
}
.avatar-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  .el-dropdown-user {
    padding: 0 20px;
    .user-name {
      font-size: 20px;
      background: linear-gradient(to right, red, blue);
      -webkit-background-clip: text; 
      color: transparent;
      cursor: pointer;
    }
  }
}
</style>
