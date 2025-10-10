import { createApp, watchEffect } from 'vue';

// import { registerLoadingDirective } from '@web/ui-common';
import { preferences } from '@web/preferences';
import { initStores } from '@web/stores';
import '@web/styles';
import '@web/styles/ele';
import { EncryptUtils } from '@web/utils';

import { useTitle } from '@vueuse/core';

import { $t, setupI18n } from '#/locales';

import App from './app.vue';
import { router } from './router';

import '#/styles/theme.css';

async function bootstrap(namespace: string) {
  const app = createApp(App);

  // 国际化 i18n 配置
  await setupI18n(app);

  // 配置 pinia-tore
  await initStores(app, { namespace });
  // 初始化axios通用配置

  // 初始化通用加解密工具类
  EncryptUtils.initEncryptUtils(import.meta.env.VITE_APP_KEY);
  // 配置路由及路由守卫
  app.use(router);

  // 动态更新标题
  watchEffect(() => {
    if (preferences.app.dynamicTitle) {
      const routeTitle = router.currentRoute.value.meta?.title;
      const pageTitle =
        (routeTitle ? `${$t(routeTitle)} - ` : '') + preferences.app.name;
      useTitle(pageTitle);
    }
  });

  app.mount('#app');
}

export { bootstrap };
