import type { ApiClientMap } from '@web/api-sdk';

import { createApp } from 'vue';

import {
  BaseUrlKeyEnum,
  initCommonInterceptor,
  RequestClientManager,
} from '@web/api-sdk';
import { initStores } from '@web/stores';
import '@web/styles';
import '@web/styles/ele';
import { EncryptUtils } from '@web/utils';

import { setupI18n } from '#/locales';
import { InitCommonInterceptorUtils } from '#/utils/init-common-interceptor-utils';

import App from './app.vue';
import { router } from './router';

import '#/styles/theme.css';

async function bootstrap(namespace: string) {
  const app = createApp(App);

  // 国际化 i18n 配置
  await setupI18n(app);

  // 配置 pinia-tore
  await initStores(app, { namespace });

  /**
   * 初始化axios分割线
   * ---------------------------------------------------------------------------------------------
   */

  // api列表
  const initCommonInterceptorUtils = new InitCommonInterceptorUtils();
  const apiClientMap: ApiClientMap = {
    [BaseUrlKeyEnum.default]: import.meta.env.VITE_APP_BASE_API,
  };

  // 初始化多个客户端
  RequestClientManager.initClients(apiClientMap);

  // 初始化各个子应用通用请求头
  initCommonInterceptor(
    BaseUrlKeyEnum.default,
    initCommonInterceptorUtils.getRequestHeaderCommonConfig(),
    initCommonInterceptorUtils.getCheckForEncryptParams(),
  );

  /**
   * 初始化axios分割线
   * ---------------------------------------------------------------------------------------------
   */

  // 初始化通用加解密工具类
  EncryptUtils.initEncryptUtils(import.meta.env.VITE_APP_KEY);

  // 配置路由及路由守卫
  app.use(router);

  // // 动态更新标题
  // watchEffect(() => {
  //   if (preferences.app.dynamicTitle) {
  //     const routeTitle = router.currentRoute.value.meta?.title;
  //     const pageTitle =
  //       (routeTitle ? `${$t(routeTitle)} - ` : '') + preferences.app.name;
  //     useTitle(pageTitle);
  //   }
  // });

  app.mount('#app');
}

export { bootstrap };
