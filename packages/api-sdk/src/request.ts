import { RequestClient } from '@web/request';

/**
 * @description 枚举多个接口key
 */
export enum BaseUrlKeyEnum {
  /**
   * @description 默认接口
   */
  default = 'default',
  zaloapp = 'zaloapp',
}

export type ApiClientMap = Record<BaseUrlKeyEnum, string>;

/**
 * @description 各个子应用请求管理器
 */
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class RequestClientManager {
  private static clients = new Map<BaseUrlKeyEnum, RequestClient>();

  /**
   * @description 请求拦截器新增规则 比如请求头
   * @param name
   * @param fulfilled
   */
  static addRequestInterceptor(
    name: BaseUrlKeyEnum,
    interceptor: Parameters<RequestClient['addRequestInterceptor']>[0],
  ) {
    const client = this.clients.get(name);
    if (!client) {
      throw new Error(
        `[RequestClientManager][addRequestInterceptor] 未找到名为 "${name}" 的客户端`,
      );
    }
    client.addRequestInterceptor(interceptor);
  }

  /**
   * @description 添加响应拦截器
   */
  static addResponseInterceptor(
    name: BaseUrlKeyEnum,
    interceptor: Parameters<RequestClient['addResponseInterceptor']>[0],
  ) {
    const client = this.clients.get(name);
    if (!client) {
      throw new Error(
        `[RequestClientManager][addResponseInterceptor] 未找到名为 "${name}" 的客户端`,
      );
    }
    client.addResponseInterceptor(interceptor);
  }

  /**
   * @description 获取指定客户端
   * @param name
   */
  static getClients(name: BaseUrlKeyEnum) {
    const client = this.clients.get(name);
    if (!client) {
      throw new Error(
        `[RequestClientManager] 未找到名为 "${name}" 的客户端，请先初始化`,
      );
    }
    return client;
  }

  /**
   * 初始化多个客户端
   */
  static initClients(configMap: ApiClientMap) {
    for (const [key, value] of Object.entries(configMap)) {
      this.clients.set(
        key as BaseUrlKeyEnum,
        new RequestClient({
          baseURL: value,
        }),
      );
    }
  }

  /**
   * @description 新增或更新baseUrl
   * @param name
   */
  static setClientsBaseUrl(name: BaseUrlKeyEnum, baseURL: string) {
    this.clients.set(
      name,
      new RequestClient({
        baseURL,
      }),
    );
  }
}
