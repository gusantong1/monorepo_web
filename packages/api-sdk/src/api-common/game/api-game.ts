import type { ResponseCommonData } from '../index';

import { useQuery } from '@pinia/colada';

import { BaseUrlKeyEnum, RequestClientManager } from '#/request';

import { VenueListRes } from './model';
/**
 * @description 场馆api接口
 */
export class ApiGame {
  /**
   * @description 使用pinincolada 处理venueList
   * @param data
   * @returns
   */
  public async useVenueList(data = {}) {
    const venueListQuery = useQuery({
      key: ['venueList', data],
      query: () => this.venueList(data),
    });
    return venueListQuery;
  }

  /**
   * @description 查询商户游戏类型列表，如真人、体育、电子
   * @param data
   * @returns
   */
  public async venueList(data = {}): Promise<ResponseCommonData<VenueListRes>> {
    return RequestClientManager.getClients(BaseUrlKeyEnum.default).post<
      ResponseCommonData<VenueListRes>
    >('/main/venueList', data);
  }
}
