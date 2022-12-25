<template>
  <div>
    <el-row>
        <el-col :span="24">
            <span>Logo文本颜色</span>
            <el-color-picker v-model="textColor" @change="textColorChange"/>
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="24">
            <span>Logo背景颜色</span>
            <el-color-picker v-model="backgroundColor" @change="backgroundColorChange"/>
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="24">
            <span>Header背景颜色</span>
            <el-color-picker v-model="headerBackground" @change="headerBackgroundChange"/>
        </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { themeConfig } from '../../config/theme';

const { logoColor, logoBackgroundColor, headerBackgroundColor } = themeConfig;
const store = useStore()
const textColor = ref(logoColor)
const backgroundColor = ref(logoBackgroundColor)
const headerBackground = ref(headerBackgroundColor)

const textColorChange = (val) => {
    store.dispatch('theme/setLogoColor', val)
}

const backgroundColorChange = (val) => {
    store.dispatch('theme/setLogoBackgroundColor', val)
}

const headerBackgroundChange = (val) => {
    store.dispatch('theme/setHeaderBackgroundColor', val)
}
</script>

