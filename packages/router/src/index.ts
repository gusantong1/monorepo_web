import { createRouter, createWebHistory } from 'vue-router';
/**
 *  @zh_CN 创建vue-router实例
 */
export const router = createRouter({
  history: createWebHistory('.'),
  routes: [],
  scrollBehavior: (to, _from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    }
    return to.hash ? { behavior: 'smooth', el: to.hash } : { left: 0, top: 0 };
  },
});
