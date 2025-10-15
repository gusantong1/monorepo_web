import { BaseUrlKeyEnum, RequestClientManager } from '#/request';

import { LoginReq, LoginRes } from './model';

/**
 * @description 登陆模块接口
 */
export class ApiLogin {
  /**
   * @description 单独走axios取zalo的access_token
   * @param data
   * @returns
   */
  public async getZaloAccessTokenApi(data = {}) {
    return RequestClientManager.getClients(BaseUrlKeyEnum.zaloapp).post(
      '/v4/access_token',
      data,
    );
  }

  /**
   * @description 登陆
   * @param data
   * @returns
   */
  public async loginApi(data: LoginReq) {
    return RequestClientManager.getClients(
      BaseUrlKeyEnum.default,
    ).post<LoginRes>('/auth/login', data);
  }
}
