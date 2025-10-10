/**
 * @description 场馆列表
 */
export class VenueResp {
  /**
   * 币种, 逗号隔开(如 CNY, THB) (见 BwCurrencyEnum)
   */
  currencyTypes: string = '';

  /**
   * 是否是 ob 系的 (1 是, 0 否)
   */
  isOb: number = 0;

  /**
   * 支持语言, 逗号隔开(如 zh_CN, en_US, th_TH)
   */
  languageTypes: string = '';

  /**
   * 状态 (0 已禁用, 1 开启中, 2 维护中)
   */
  status: number = 0;

  /**
   * 场馆 code (如 by, ty, imsb, cq9) (见 BwVenueEnum)
   */
  venueCode: string = '';

  /**
   * 场馆 code 下游戏的条数
   */
  venueCodeNumber: number = 0;

  /**
   * 场馆英文名
   */
  venueEnName: string = '';

  /**
   * 场馆图标 (App, H5)
   */
  venueIconUrlApp: string = '';

  /**
   * 场馆图标 (PC)
   */
  venueIconUrlPc: string = '';

  /**
   * 场馆名 (如 ag 真人, ob 体育)
   */
  venueName: string = '';

  /**
   * 场馆泰文名
   */
  venueThName: string = '';

  /**
   * 场馆切换图标 (App, H5)
   */
  venueTransferIconUrlApp: string = '';

  /**
   * 场馆切换图标 (PC)
   */
  venueTransferIconUrlPc: string = '';

  /**
   * 场馆繁体名
   */
  venueTwName: string = '';

  /**
   * 场馆类型 (如 ty, zr, qkl) (见 BwVenueTypeEnum)
   */
  venueType: string = '';

  /**
   * 场馆类型英文名称 (见 BwVenueTypeEnum)
   */
  venueTypeEnName: string = '';

  /**
   * 场馆类型名称 (如 体育, 真人, 区块链) (见 BwVenueTypeEnum)
   */
  venueTypeName: string = '';

  /**
   * 场馆类型泰文名 (见 BwVenueTypeEnum)
   */
  venueTypeThName: string = '';

  /**
   * 场馆类型繁体名 (见 BwVenueTypeEnum)
   */
  venueTypeTwName: string = '';

  /**
   * 场馆类型越南名 (见 BwVenueTypeEnum)
   */
  venueTypeVnName: string = '';

  /**
   * 场馆越南名
   */
  venueVnName: string = '';

  /**
   * 包含中越泰三种语言的钱包名称, JSON 格式 -> 前端可直接使用此字段
   */
  walletNames: string = '';
}

/**
 * @description 场馆返回数据
 */
export class VenueListRes {
  /**
   * 配置类型[0:小图,1:中图,2:大图]
   */
  imageType: number = 0;

  /**
   * [场馆图配置号]
   */
  sortNumber?: string;

  venueList: Array<VenueResp> = [];

  /**
   * 场馆类型code,如ty,zr,dy,qkl
   */
  venueTypeCode?: string;

  /**
   * 场馆类型的图片
   */
  venueTypeIconUrl?: string;
}
