import { createApp } from 'vue';

import { initStores } from '@web/stores';
import '@web/styles';
import '@web/styles/ele';
import { EncryptUtils } from '@web/utils';

import { initAxiosClients } from '#/api';
import { setupI18n } from '#/locales';

import App from './app.vue';
import { router } from './router';

import '#/styles/theme.css';

async function bootstrap(namespace: string) {
  const app = createApp(App);

  // 国际化 i18n 配置
  await setupI18n(app);

  // 配置 pinia-tore
  await initStores(app, { namespace });

  // 初始化axios

  initAxiosClients();

  // 初始化通用加解密工具类
  EncryptUtils.initEncryptUtils(import.meta.env.VITE_APP_KEY);

  // 配置路由及路由守卫
  app.use(router);

  app.mount('#app');
}

export { bootstrap };
