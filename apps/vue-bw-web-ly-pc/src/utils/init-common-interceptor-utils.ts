import type {
  CheckForEncryptParams,
  RequestHeaderCommonConfig,
} from '@web/api-sdk';

/**
 * @description 初始化通用请求
 */
export class InitCommonInterceptorUtils {
  /**
   * @description 获取是否需要加密配置
   * @returns
   */
  public getCheckForEncryptParams(): CheckForEncryptParams {
    return {
      PROD: import.meta.env.PROD,
      VITE_APP_ENCRYPTED: import.meta.env.VITE_APP_ENCRYPTED,
      VITE_APP_ENV_FLAG: import.meta.env.VITE_APP_ENV_FLAG,
    };
  }

  /**
   * @description 获取通用请求头
   * @returns RequestHeaderCommonConfig
   */
  public getRequestHeaderCommonConfig(): RequestHeaderCommonConfig {
    return {
      currency: 'VND',
      lang: 'zh_CN',
      'merchant-id': '940277660343459925',
      'ob-application': '62',
      'ob-client': '1',
      'ob-secret-version': '1',
      'X-Request-Token': '',
    };
  }
}
