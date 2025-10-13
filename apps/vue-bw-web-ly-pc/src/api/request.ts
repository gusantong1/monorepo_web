import type { ApiClientMap } from '@web/api-sdk';

import {
  BaseUrlKeyEnum,
  initCommonInterceptor,
  RequestClientManager,
} from '@web/api-sdk';

import { InitCommonInterceptorUtils } from '#/utils/init-common-interceptor-utils';

const apiMap = {
  [BaseUrlKeyEnum.default]: import.meta.env.VITE_APP_BASE_API,
};

/**
 * @description 初始化当前应用请求客户端
 */
export function initAxiosClients() {
  RequestClientManager.initClients(apiMap);
  // api列表
  const initCommonInterceptorUtils = new InitCommonInterceptorUtils();
  const apiClientMap: ApiClientMap = {
    [BaseUrlKeyEnum.default]: import.meta.env.VITE_APP_BASE_API,
  };

  // 初始化多个客户端
  RequestClientManager.initClients(apiClientMap);

  // 初始化各个子应用通用拦截器
  initCommonInterceptor(
    BaseUrlKeyEnum.default,
    initCommonInterceptorUtils.getRequestHeaderCommonConfig(),
    initCommonInterceptorUtils.getCheckForEncryptParams(),
  );
}
