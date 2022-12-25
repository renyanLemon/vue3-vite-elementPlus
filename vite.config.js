import { fileURLToPath, URL } from 'node:url'
const path = require('path');
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import vueI18n from '@intlify/vite-plugin-vue-i18n';

const isDev = process.env.NODE_ENV === 'development';

const loadI18n = isDev ? vueI18n({ include: path.resolve(__dirname, './src/locales/**') }) : '';

export default defineConfig({
  plugins: [
    vue({
      // 响应性语法糖
      reactivityTransform: true,
      refTransform: true
    }),
    loadI18n,
    Components({
      resolvers: [
        ElementPlusResolver({
          importStyle: 'less'
        }),
        // 自动注册图标组件
        IconsResolver({
          enabledCollections: ['ep'],
        }),
      ],
    })
  ],
  server: {
    hmr: true,
  },
  resolve: {
    // 设置别名
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  css: {
    // CSS 预处理器
    preprocessorOptions: {
      less: {
        additionalData: '@import "@/style/index.less";',
        charset: false,
      },
    }
  }
})
