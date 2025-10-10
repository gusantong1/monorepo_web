import { BaseUrlKeyEnum, RequestClientManager } from '#/request';

import { VenueListRes } from './model';

/**
 * @description 场馆api接口
 */
class ApiGame {
  /**
   * @description 登陆
   * @param data
   * @returns
   */
  public async loginApi(data = {}) {
    return RequestClientManager.getClients(
      BaseUrlKeyEnum.default,
    ).post<VenueListRes>('/main/venueList', data);
  }
}

export default ApiGame;
