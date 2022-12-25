import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layouts/index.vue';
import i18n from '@/locales';
const { global } = i18n;

export const constantRoutes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login.vue'),
    meta: {
      title: '登录',
    },
    hidden: true
  }
];

export const asyncRoutes = [
  {
    path: '/',
    component: Layout,
    name: 'SystemConfig',
    meta: {
      title: global.t('menu.systemManagement'),
      icon: 'Setting'
    },
    redirect: '/layoutConfig',
    children: [
      {
        path: '/pageSet',
        name: 'PageSet',
        meta: {
          title: global.t('menu.pagesetup'),
          icon: 'Pointer',
          affix: true,
          noKeepAlive: true,
        },
        children: [
          {
            path: '/layoutConfig',
            name: 'LayoutConfig',
            component: () => import('@/views/SystemConfig/layoutConfig.vue'),
            meta: {
              title: global.t('menu.pagelayout'),
              icon: 'Switch',
              affix: true,
              noKeepAlive: true,
            },
          },
          {
            path: '/themeColors',
            name: 'ThemeColors',
            component: () => import('@/views/SystemConfig/themeColors.vue'),
            meta: {
              title: global.t('menu.themecolors'),
              icon: 'RefreshLeft',
              affix: true,
              noKeepAlive: true,
            },
          }
        ]
      },{
          path: '/language',
          name: 'Language',
          component: () => import('@/views/SystemConfig/language.vue'),
          meta: {
            title: global.t('menu.languagesettings'),
            icon: 'ChatDotSquare',
            affix: true,
            noKeepAlive: true,
        }
      }
    ],
  },{
    path: '/company',
    component: Layout,
    name: 'Company',
    meta: {
      title: global.t('menu.corporate'),
      icon: 'House'
    },
    redirect: '/user',
    children: [
      {
        path: '/user',
        name: 'User',
        component: () => import('@/views/company/user/index.vue'),
        meta: {
          title: global.t('menu.user'),
          icon: 'User',
          affix: true,
          noKeepAlive: true,
        },
      },{
        path: '/job',
        name: 'Job',
        component: () => import('@/views/company/job/index.vue'),
        meta: {
          title: global.t('menu.job'),
          icon: 'FullScreen',
          affix: true,
          noKeepAlive: true,
        },
      },
    ],
  },
  {
    path: '/customer',
    component: Layout,
    name: 'Customer',
    meta: {
      title: '',
      icon: 'PieChart'
    },
    alwaysShow: false,
    redirect: '/member',
    children: [
      {
        path: '/member',
        name: 'Member',
        component: () => import('@/views/customer/member/index.vue'),
        meta: {
          title: global.t('menu.member'),
          icon: 'Operation',
          affix: true,
          noKeepAlive: true,
        }
      }
    ],
  },{
    path: '/room',
    component: Layout,
    children: [
      {
        path: '/room',
        component: () => import('@/views/room/index.vue'),
        name: 'Room',
        meta: {
          title: global.t('menu.room'),
          icon: 'Crop'
        }
      }
    ],
    
  },{
    component: Layout,
    children: [
      {
        path: '/salary',
        name: 'Salary',
        component: () => import('@/views/salary/index.vue'),
        meta: {
          title: global.t('menu.salary'),
          icon: 'Discount',
          affix: true,
          noKeepAlive: true,
        }
      }
    ],
  },
  {
    path: '/errorPage',
    name: 'ErrorPage',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/404',
        name: '404',
        component: () => import('@/views/errorPage/404.vue'),
        hidden: true
      },
      {
        path: '/401',
        name: '401',
        component: () => import('@/views/errorPage/401.vue'),
        hidden: true
      }
    ]
  }
 ];

console.log(import.meta.env.BASE_URL)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: constantRoutes
})

export default router
