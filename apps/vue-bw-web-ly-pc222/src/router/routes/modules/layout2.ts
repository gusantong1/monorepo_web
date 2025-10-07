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
    component: () => import('#/layouts/layout-replenish/layout-replenish.vue'),
    name: 'layoutCommon',
    path: '/layout2',
    redirect: '/r',

    children: [
      {
        meta: {
          title: $t('demos.elementPlus'),
        },
        name: 'home',
        path: '/home',
        component: () => import('#/views/layout-common/home/home.vue'),
      },
      {
        meta: {
          title: $t('demos.elementPlus'),
        },
        name: 'demo',
        path: '/active2',
        component: () => import('#/views/layout-common/demo/demo.vue'),
      },
    ],
  },
];

export default layoutCommonRoutes;
