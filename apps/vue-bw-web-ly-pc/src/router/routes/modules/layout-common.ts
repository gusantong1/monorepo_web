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
    name: 'layoutCommon',
    path: '/',
    children: [
      {
        meta: {
          title: $t('demos.elementPlus'),
        },
        name: 'home',
        path: '/home',
        component: () => import('#/views/layout-common/home/home.vue'),
      },
    ],
  },
];

export default layoutCommonRoutes;
