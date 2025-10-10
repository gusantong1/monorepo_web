import type { RouteRecordRaw } from 'vue-router';

import { $t } from '#/locales';

/**
 * @description 通用布局路由
 */
const layoutCommonRoutes: RouteRecordRaw[] = [
  {
    meta: {
      keepAlive: true,
      order: 1000,
      title: $t('demos.title'),
    },
    component: () => import('#/layouts/layout1/layout1.vue'),
    name: 'layoutCommon',
    path: '/',
    redirect: '/demo',

    children: [
      {
        meta: {
          title: $t('demos.elementPlus'),
        },
        name: 'home',
        path: '/home',
        component: () => import('#/views/layout1/home/home.vue'),
      },
      {
        meta: {
          title: $t('demos.elementPlus'),
        },
        name: 'demo',
        path: '/demo',
        component: () => import('#/views/layout1/demo/demo.vue'),
      },
    ],
  },
];

export default layoutCommonRoutes;
