import { BaseUrlKeyEnum, RequestClientManager } from '#/request';

import { LoginReq, LoginRes } from './model';

/**
 * @description 登陆模块接口
 */
export class ApiLogin {
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
