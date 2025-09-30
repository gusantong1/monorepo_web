import type { RouteRecordRaw } from 'vue-router';

import { LOGIN_PATH } from '@web/constants';

import { $t } from '#/locales';

import layoutCommonRoutes from './modules/layout-common';
// const BasicLayout = () => import('#/layouts/basic.vue');
// const AuthPageLayout = () => import('#/layouts/auth.vue');

/** 基本路由，这些路由是必须存在的 */
const coreRoutes: RouteRecordRaw[] = [
  {
    // component: AuthPageLayout,
    meta: {
      hideInTab: true,
      title: 'Authentication',
    },
    name: 'Authentication',
    path: '/auth',
    redirect: LOGIN_PATH,
    children: [
      {
        name: 'Login',
        path: 'login',
        component: () => {},
        meta: {
          title: $t('page.auth.login'),
        },
      },
      {
        name: 'CodeLogin',
        path: 'code-login',
        component: () => {},
        meta: {
          title: $t('page.auth.codeLogin'),
        },
      },
      {
        name: 'QrCodeLogin',
        path: 'qrcode-login',
        component: () => {},
        meta: {
          title: $t('page.auth.qrcodeLogin'),
        },
      },
      {
        name: 'ForgetPassword',
        path: 'forget-password',
        component: () => {},
        meta: {
          title: $t('page.auth.forgetPassword'),
        },
      },
      {
        name: 'Register',
        path: 'register',
        component: () => {},
        meta: {
          title: $t('page.auth.register'),
        },
      },
    ],
  },
  /**
   * @description 通用布局路由
   */
  ...layoutCommonRoutes,
];

export { coreRoutes };
