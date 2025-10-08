import { BaseUrlKeyEnum, RequestClientManager } from '#/request';

/**
 * @description 通用请求头设置
 */
export interface RequestHeaderCommonConfig {
  // [key: string]: string;
  // 'Content-Type': string;
  currency: string;
  joincode?: string;
  lang: string;
  'merchant-id': string;
  'ob-application': string;
  'ob-client': string;
  'ob-secret-version': string;
  'X-Request-Token': string;
  yqcode?: string;
}

/**
 * @description 判断是否需要加密参数
 */
export interface CheckForEncryptParams {
  PROD: string;
  VITE_APP_ENCRYPTED: string;
  VITE_APP_ENV_FLAG: string;
}

/**
 * @description 初始化各个子应用通用请求头
 * @param name
 * @param requestHeaderCommonConfig
 */
export function initCommonRequestInterceptor(
  name: BaseUrlKeyEnum,
  requestHeaderCommonConfig: RequestHeaderCommonConfig,
  checkForEncryptParams: CheckForEncryptParams,
) {
  RequestClientManager.addRequestInterceptor(name, {
    fulfilled: async (config) => {
      // 通用请求头赋值
      Object.keys(requestHeaderCommonConfig).forEach((key) => {
        const typekey = key as keyof RequestHeaderCommonConfig;
        config.headers[typekey] = requestHeaderCommonConfig[typekey];
      });
      // 数据是否加密
      if (
        checkForEncryptParams.PROD &&
        checkForEncryptParams.VITE_APP_ENCRYPTED === '1' &&
        config?.responseType !== 'blob'
      ) {
        if (['dev', 'test'].includes(checkForEncryptParams.VITE_APP_ENV_FLAG)) {
          config.headers['ob-encrypted'] = 'true';
        }
        // 处理加密字符串两端双引号问题
        config.transformRequest = (data) => data;
      }
      return config;
    },
    rejected: async (err) => {
      console.error(err);
    },
  });
}

export * from './login';
