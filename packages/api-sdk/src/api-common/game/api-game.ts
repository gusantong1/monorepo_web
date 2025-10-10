import { BaseUrlKeyEnum, RequestClientManager } from '#/request';

import { VenueListRes } from './model';

/**
 * @description 场馆api接口
 */
export class ApiGame {
  /**
   * @description 查询商户游戏类型列表，如真人、体育、电子
   * @param data
   * @returns
   */
  public async venueList(data = {}): Promise<VenueListRes> {
    return RequestClientManager.getClients(
      BaseUrlKeyEnum.default,
    ).post<VenueListRes>('/main/venueList', data);
  }
}
