/**
 * 该文件可自行根据业务逻辑进行调整
 */

import { RequestClient } from '@web/request';

export interface ApiSdkConfig {
  baseURL: string;
}

let apiConfig: ApiSdkConfig = {
  baseURL: '',
};

export function initApiSdk(config: ApiSdkConfig) {
  apiConfig = config;
}

export const baseRequestClient = new RequestClient({
  baseURL: apiConfig.baseURL,
});
