import { router } from '@web/router';
import { EncryptUtils } from '@web/utils';

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
 * @description 通用响应数据
 */
export interface ResponseData<T = any> {
  code: number;
  data: T;
  msg: string;
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
  const encryptUtils = new EncryptUtils();
  // axios请求拦截器自带闭包特性，所以函数外部初始化进来的参数会一直不会释放，函数内部签名时间戳是实时生成
  RequestClientManager.addRequestInterceptor(name, {
    fulfilled: async (config) => {
      try {
        // 通用请求头赋值
        Object.keys(requestHeaderCommonConfig).forEach((key) => {
          const typekey = key as keyof RequestHeaderCommonConfig;
          config.headers[typekey] = requestHeaderCommonConfig[typekey];
        });

        const nonce = encryptUtils.createNonce();
        const timestamp = encryptUtils.createTimestamp();
        // 数据是否加密
        if (
          checkForEncryptParams.PROD &&
          checkForEncryptParams.VITE_APP_ENCRYPTED === '1' &&
          config?.responseType !== 'blob'
        ) {
          if (
            ['dev', 'test'].includes(checkForEncryptParams.VITE_APP_ENV_FLAG)
          ) {
            config.headers['ob-encrypted'] = 'true';
          }
          // 处理加密字符串两端双引号问题
          config.transformRequest = (data) => data;
          // 加密工具类
          const encryptedData = encryptUtils.encryptData(config.data);
          const sign = encryptUtils.createSign(encryptedData, nonce, timestamp);
          config.headers['ob-sign'] = sign;
          config.data = encryptedData;
        } else {
          config.headers['ob-encrypted'] = 'false';
        }

        config.headers['ob-nonce'] = nonce;
        config.headers['ob-timestamp'] = timestamp;
        return config;
      } catch (error) {
        throw String(error);
      }
    },
    rejected: async (err) => {
      console.error(err);
    },
  });

  // 添加通用响应拦截器
  RequestClientManager.addResponseInterceptor(name, {
    fulfilled: (response) => {
      try {
        let { config, data } = response;

        // 响应数据解密
        if (
          import.meta.env.PROD &&
          import.meta.env.VITE_APP_ENCRYPTED === '1' &&
          config?.responseType !== 'blob' &&
          data
        ) {
          const decryptedData = encryptUtils.decryptData(data as string);
          data = JSON.parse(decryptedData);
        }
        const resData: ResponseData = data as any;
        if (resData.code !== 200 && resData.code === 403) {
          router.push({ path: '/403' });
        }
        return response;
      } catch (error) {
        throw String(error);
      }
    },
    rejected: (err) => {
      console.error(err);
    },
  });
}

export * from './login';
