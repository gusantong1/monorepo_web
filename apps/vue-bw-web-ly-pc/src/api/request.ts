import { BaseUrlKeyEnum, RequestClientManager } from '@web/api-sdk';

// 当前应用通用接口api地址
const baseURL1 = import.meta.env.VITE_APP_BASE_API;

const apiMap = {
  [BaseUrlKeyEnum.default]: baseURL1,
};

/**
 * @description 初始化当前应用请求客户端
 */
export function initClients() {
  RequestClientManager.initClients(apiMap);
}

// /**
//  * @description 添加当前应用default的请求头
//  */
// function addRequestInterceptor(name: BaseUrlKeyEnum) {
//   RequestClientManager.addRequestInterceptor(name, {
//     fulfilled: async (config) => {
//       config.headers['Content-Type'] =
//         config.headers['Content-Type'] || 'application/json';
//       return config;
//     },
//   });
// }

console.log(RequestClientManager, BaseUrlKeyEnum);
