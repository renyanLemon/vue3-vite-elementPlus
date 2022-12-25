import { createApp } from 'vue'

import './router/permission' // permission 权限文件

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'

import './assets/main.css'

import store from '@/store' // vuex

const app = createApp(App)

// 注册字节跳动图标
import iconPark from './plugin/icon-park';
iconPark(app);

// element-plus 图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

// layout components
import layoutComp from './layouts/components/export';
layoutComp(app);

import i18n from '@/locales';

app.use(router).use(ElementPlus).use(store).use(i18n).mount('#app')
