<template>
    <div>
        <div class="margin-bottom-10">{{ $t('languagePage.descTitle') }}</div>
        <div>
             <el-radio-group v-model="language" @change="languageChange">
                <el-radio label="zh-cn" size="large" border>简体中文</el-radio>
                <el-radio label="en" size="large" border>English</el-radio>
            </el-radio-group>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useStore } from 'vuex'
import { getLanguage, setLanguage } from '@/utils/cookies.js';

const store = useStore()
let language = $ref<string>(getLanguage())

const languageChange = (value: string) => {
    language = value
    store.dispatch('languages/setLanguage', value)
    setLanguage(value)
    location.reload();
}
</script>
