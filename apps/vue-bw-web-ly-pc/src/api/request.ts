import type { ApiClientMap } from '@web/api-sdk';

import {
  BaseUrlKeyEnum,
  initCommonInterceptor,
  RequestClientManager,
} from '@web/api-sdk';

import { InitCommonInterceptorUtils } from '#/utils/init-common-interceptor-utils';

const apiMap = {
  [BaseUrlKeyEnum.default]: import.meta.env.VITE_APP_BASE_API,
  [BaseUrlKeyEnum.zaloapp]: 'https://oauth.zaloapp.com',
} as ApiClientMap;

/**
 * @description 初始化当前应用请求客户端
 */
export function initAxiosClients() {
  RequestClientManager.initClients(apiMap);
  // api列表
  const initCommonInterceptorUtils = new InitCommonInterceptorUtils();

  // 初始化多个客户端
  RequestClientManager.initClients(apiMap);

  // 初始化各个子应用通用拦截器
  initCommonInterceptor(
    BaseUrlKeyEnum.default,
    initCommonInterceptorUtils.getRequestHeaderCommonConfig(),
    initCommonInterceptorUtils.getCheckForEncryptParams(),
  );

  // 初始化 zaloapp 请求头
  RequestClientManager.addRequestInterceptor(BaseUrlKeyEnum.zaloapp, {
    fulfilled: async (config) => {
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
      config.headers.secret_key = import.meta.env.VITE_APP_ZALO_SECRET_KEY;
      return config;
    },
  });
}
