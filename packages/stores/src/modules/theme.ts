import { defineStore } from 'pinia';

export enum ThemeEnum {
  /**
   * @description 深色主题
   */
  DARK = 'dark',

  /**
   * @description 默认主题
   */

  DEFAULT = 'default',
  /**
   * @description 浅色主题
   */

  LIGHT = 'light',
}

interface ThemeStateModel {
  currentTheme: ThemeEnum;
}

/**
 * @zh_CN 主题切换
 */
export const useThemeStore = defineStore('core-theme', {
  actions: {
    /**
     * @description 设置当前主题
     * @param theme
     */
    setCurrentTheme(theme: ThemeEnum) {
      this.currentTheme = theme;
      const root = document.documentElement;
      root.dataset.webTheme = theme;
    },
  },
  persist: {
    // 持久化
    pick: ['currentTheme'],
  },
  state: (): ThemeStateModel => ({
    currentTheme: ThemeEnum.DEFAULT,
  }),
});
