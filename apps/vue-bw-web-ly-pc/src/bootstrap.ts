import { createApp, watchEffect } from 'vue';

import { registerLoadingDirective } from '@web/common-ui';
import { preferences } from '@web/preferences';
import { initStores } from '@web/stores';
import '@web/styles';
import '@web/styles/ele';

import { useTitle } from '@vueuse/core';
// import { ElLoading } from 'element-plus';
import PrimeVue from 'primevue/config';

import { $t, setupI18n } from '#/locales';

import App from './app.vue';
import { router } from './router';

import '#/styles/theme.css';

async function bootstrap(namespace: string) {
  // // 设置弹窗的默认配置
  // setDefaultModalProps({
  //   fullscreenButton: false,
  // });
  // // 设置抽屉的默认配置
  // setDefaultDrawerProps({
  //   zIndex: 2000,
  // });
  const app = createApp(App);

  // 注册Element Plus提供的v-loading指令
  // app.directive('loading', ElLoading.directive);

  // 注册Vben提供的v-loading和v-spinning指令
  registerLoadingDirective(app, {
    loading: false, // Vben提供的v-loading指令和Element Plus提供的v-loading指令二选一即可，此处false表示不注册Vben提供的v-loading指令
    spinning: 'spinning',
  });

  // 国际化 i18n 配置
  await setupI18n(app);

  // 配置 pinia-tore
  await initStores(app, { namespace });

  // 配置路由及路由守卫
  app.use(router);

  // 配置Motion插件
  const { MotionPlugin } = await import('@web/plugins/motion');
  app.use(MotionPlugin);
  // 单独集成PrimeVue
  app.use(PrimeVue);

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
