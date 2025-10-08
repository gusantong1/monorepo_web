export class LoginReq {
  /**
   *@description  极验二次验证表单传参字段 chllenge
   */
  challenge?: string;

  /**
   * @description 终端设备号
   */
  deviceNo?: string;

  /**
   * @description 登录网址 (128)
   */
  loginReference?: string;

  /**
   * @description 极验二次验证表单传参字段 seccode
   */
  seccode?: string;

  /**
   * @description 账号
   */
  userName?: string;

  /**
   * @description 密码
   */
  userPw?: string;

  /**
   * @description 极验二次验证表单传参字段 validate
   */
  validate?: string;

  /**
   * @description 图像验证码
   */
  verifyCode?: string;
}

/**
 * @description 登陆返回
 */
export class LoginRes {
  /**
   * 账号类型, 使用AccountTypeEnum枚举
   */
  accountType: number = 0;

  /**
   * 首存活动每会员一次参加标识，0未参加，1已参加
   */
  activityOnlyFlag: number = 0;

  /**
   * 中心钱包余额
   */
  balance: number = 0;

  /**
   * 出生日期
   */
  birthday: string = '';

  /**
   * 注册时间
   */
  createdAt: string = '';

  /**
   * 信用等级
   */
  creditLevel: number = 0;

  /**
   * 会员币种
   */
  currency: string = '';

  /**
   * 邮箱
   */
  email: string = '';

  /**
   * 财务信用等级
   */
  financeLevel: string = '';

  /**
   * 首存金额
   */
  firstDeposit: number = 0;

  /**
   * 首存时间
   */
  firstDepositDatetime: string = '';

  /**
   * 游戏锁定状态 0-未锁定 1-游戏锁定
   */
  gameLockStatus: number = 0;

  /**
   * 性别 0-女，1-男
   */
  gender: number = 0;

  /**
   * Google密钥
   */
  googleSecretKey: string = '';

  /**
   * Google验证器状态：0 关闭，1 开启
   */
  googleSecretStatus: number = 0;

  /**
   * ID
   */
  id: string = '';

  /**
   * 邀请码
   */
  invitationCode: string = '';

  /**
   * IP归属地
   */
  ipAttribution: string = '';

  /**
   * 用户是否当月注册，true：是，false：否
   */
  isMonthRegister: boolean = false;

  /**
   * 标签id
   */
  labelId: number = 0;

  /**
   * 标签名称
   */
  labelName: string = '';

  /**
   * 标签集合
   */
  labels: any[] = [];

  /**
   * 上次存款金额
   */
  lastDeposit: number = 0;

  /**
   * 上次存款时间
   */
  lastDepositTime: string = '';

  /**
   * 最后登陆时间
   */
  lastLoginDatetime: string = '';

  /**
   * 最后登录设备号
   */
  lastLoginDeviceNo: string = '';

  /**
   * 最后登录终端类型（1-PC，2-IOS_APP，3-IOS_H5，4-Android_H5，5-Android_APP 6-后台）
   */
  lastLoginDeviceType: number = 0;

  /**
   * 最后登录IP
   */
  lastLoginIp: string = '';

  /**
   * 上次提款时间
   */
  lastWithdrawTime: string = '';

  /**
   * 登陆锁定状态 0-未锁定 1-登陆锁定
   */
  loginLockStatus: number = 0;

  /**
   * 会员来源备注
   */
  memberOriginRemark: string = '';

  /**
   * 商户ID
   */
  merchantId: string = '';

  /**
   * 商户名称
   */
  merchantName: string = '';

  /**
   * 商户层级路径
   */
  merchantPath: string = '';

  /**
   * 会员手机号码
   */
  mobile: string = '';

  /**
   * 是否需要修改密码：0不需要，1需要修改密码
   */
  needChgPwd: number = 0;

  /**
   * 开启免转模式 0-手动，1-免转
   */
  noTransfer: number = 0;

  /**
   * 父级商户ID
   */
  parentMerchantId: string = '';

  /**
   * 父级商户层级路径
   */
  parentMerchantPath: string = '';

  /**
   * 上级代理id
   */
  parentProxyId: number = 0;

  /**
   * 上级代理层级
   */
  parentProxyLevel: number = 0;

  /**
   * 上级代理层级名称
   */
  parentProxyLevelName: string = '';

  /**
   * 上级代理名称
   */
  parentProxyName: string = '';

  /**
   * 上级代理层级路径
   */
  parentProxyPath: string = '';

  /**
   * 会员密码
   */
  password: string = '';

  /**
   * 充提锁定状态 0-未锁定 1-充提锁定
   */
  paymentLockStatus: number = 0;

  /**
   * 会员真实姓名
   */
  realName: string = '';

  /**
   * 注册设备号
   */
  registerDeviceNo: string = '';

  /**
   * 注册终端类型（1-PC，2-IOS_APP，3-IOS_H5，4-Android_H5，5-Android_APP 6-后台）
   */
  registerDeviceType: number = 0;

  /**
   * 注册IP
   */
  registerIp: string = '';

  /**
   * 客户端备注
   */
  remark: string = '';

  /**
   * 盐
   */
  salt: string = '';

  /**
   * 第二次存款金额
   */
  secondDeposit: number = 0;

  /**
   * 第二次存款时间
   */
  secondDepositDatetime: string = '';

  /**
   * 三方授权信息
   */
  thirdPartyOauthInfo: string = '';

  /**
   * 头像
   */
  topImagesUrl: string = '';

  /**
   * 主商户ID
   */
  topMerchantId: string = '';

  /**
   * 主商户名称
   */
  topMerchantName: string = '';

  /**
   * 总代id
   */
  topProxyId: number = 0;

  /**
   * 总代名称
   */
  topProxyName: string = '';

  /**
   * 累计大额提款次数
   */
  totalBigWithdrawNum: number = 0;

  /**
   * 累计存款金额
   */
  totalDeposit: number = 0;

  /**
   * 累计存款次数
   */
  totalDepositNum: number = 0;

  /**
   * 累计提款金额
   */
  totalWithdraw: number = 0;

  /**
   * 累计普通提款次数
   */
  totalWithdrawNum: number = 0;

  /**
   * 转代次数
   */
  transforNum: number = 0;

  /**
   * 更新时间
   */
  updatedAt: string = '';

  /**
   * 财务等级设置方式(1=自动更改，2=后台手动更改)
   */
  updateFinanceLevelType: number = 0;

  /**
   * 会员账号
   */
  userName: string = '';

  /**
   * vip经验值
   */
  vipExperience: number = 0;

  /**
   * 是否需要显示:1=展示（有会员福利）,2=不展示（无会员福利）
   */
  vipFlag: number = 0;

  /**
   * vip等级id
   */
  vipId: number = 0;

  /**
   * vip等级
   */
  vipLevel: number = 0;

  /**
   * 风控层级id
   */
  windControlId: number = 0;

  /**
   * 风控层级名称
   */
  windControlName: string = '';

  /**
   * 取款密码 是否审核中 true审核中
   */
  withdrawAuditFlag: boolean = false;

  /**
   * 取款密码
   */
  withdrawPassword: string = '';
}
