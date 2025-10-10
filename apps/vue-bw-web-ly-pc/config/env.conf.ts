import process from 'node:process';
//  --------------------参数说明--------------------
// VITE_APP_BASE_API：base api
// VITE_APP_KEY：密钥key  dev不加密
// VITE_APP_SECRET_VERSION：密钥版本 test 1  pre 1  release 2
// VITE_APP_ENCRYPTED： 是否开启加密 1加密 0不加密  预发和生产默认加密
// VITE_APP_ENV_FLAG： 环境标识
// VITE_APP_MERCHANT_ID：商户id
// VITE_APP_CURRENCY：商户货币
// VITE_APP_TITLE：站点标题
// VITE_APP_FB_APP_ID：facebook appid
// VITE_APP_ZALO_APP_ID：zalo appid

// 生产环境公共配置
const prodCommonConfig = {
  VITE_APP_BASE_API: '/api/bw-client-server/',
  VITE_APP_KEY: 'FTwKikY1QY0MmNqM',
  VITE_APP_SECRET_VERSION: '9',
  VITE_APP_ENCRYPTED: '1',
  VITE_APP_ENV_FLAG: 'release',
  VITE_APP_FINGERPRINT_ENDPOINT: 'https://bw999.rmfclbbo.com',
};

// 基础公共配置
const baseEnvConfig: any = {
  // dev环境
  dev: {
    VITE_APP_BASE_API:
      'https://bw-client-gateway.dev.zhanggao223.com/bw-client-gateway/bw-client-server/',
    VITE_APP_KEY: 'uKGOh/gaKhjb9CXu',
    VITE_APP_SECRET_VERSION: '1',
    VITE_APP_ENCRYPTED: '0',
    VITE_APP_ENV_FLAG: 'dev',
    VITE_APP_FINGERPRINT_ENDPOINT: 'https://bw999.rmfclbbo.com',
  },
  // qa环境
  test: {
    VITE_APP_BASE_API:
      'https://bw-client-gateway.test.zhanggao223.com/bw-client-gateway/bw-client-server/',
    VITE_APP_KEY: 'uKGOh/gaKhjb9CXu',
    VITE_APP_SECRET_VERSION: '1',
    VITE_APP_ENCRYPTED: '0',
    VITE_APP_ENV_FLAG: 'test',
    VITE_APP_FINGERPRINT_ENDPOINT: 'https://bw999.rmfclbbo.com',
  },
  // 预发环境
  pre: {
    VITE_APP_BASE_API: '/api/bw-client-server/',
    VITE_APP_KEY: 'D00Cj+hC6xnNmoak',
    VITE_APP_SECRET_VERSION: '1',
    VITE_APP_ENCRYPTED: '1',
    VITE_APP_ENV_FLAG: 'pre',
    VITE_APP_FINGERPRINT_ENDPOINT: 'https://bw999.rmfclbbo.com',
  },
  release: {
    ...prodCommonConfig,
  },
};

// 多项目配置
const envConfigList: any = {
  // demo 外部提供演示用
  demo_cny: {
    common: {
      VITE_APP_MERCHANT_CODE: 'demo',
      VITE_APP_TITLE: 'DBCNY',
      VITE_APP_CURRENCY: 'CNY',
      VITE_APP_FB_APP_ID: '1089758781678258',
      VITE_APP_ZALO_APP_ID: '430353615650646128',
    },
    dev: {
      VITE_APP_MERCHANT_ID: '929355868121665567',
    },
    test: {
      VITE_APP_MERCHANT_ID: '956200270959439891',
    },
    pre: {
      VITE_APP_MERCHANT_ID: '956202502125117491',
    },
    release: {
      VITE_APP_MERCHANT_ID: '872527006079725624',
    },
  },
  demo_vnd: {
    common: {
      VITE_APP_MERCHANT_CODE: 'demo',
      VITE_APP_TITLE: 'DBVND',
      VITE_APP_CURRENCY: 'VND',
      VITE_APP_FB_APP_ID: '1089758781678258',
      VITE_APP_ZALO_APP_ID: '430353615650646128',
    },
    dev: {
      VITE_APP_MERCHANT_ID: '780916020056862725',
    },
    test: {
      VITE_APP_MERCHANT_ID: '956200683238551632',
    },
    pre: {
      VITE_APP_MERCHANT_ID: '956202819973668874',
    },
    release: {
      VITE_APP_MERCHANT_ID: '872527364847906825',
    },
  },
  demo_thb: {
    common: {
      VITE_APP_MERCHANT_CODE: 'demo',
      VITE_APP_TITLE: 'DBTHB',
      VITE_APP_CURRENCY: 'THB',
      VITE_APP_FB_APP_ID: '1089758781678258',
      VITE_APP_ZALO_APP_ID: '430353615650646128',
    },
    dev: {
      VITE_APP_MERCHANT_ID: '780916020056862725',
    },
    test: {
      VITE_APP_MERCHANT_ID: '956200497032425485',
    },
    pre: {
      VITE_APP_MERCHANT_ID: '956202696174592054',
    },
    release: {
      VITE_APP_MERCHANT_ID: '872527536826957891',
    },
  },
  demo_usdt: {
    common: {
      VITE_APP_MERCHANT_CODE: 'demo',
      VITE_APP_TITLE: 'DBUSDT',
      VITE_APP_CURRENCY: 'USDT',
      VITE_APP_FB_APP_ID: '1089758781678258',
      VITE_APP_ZALO_APP_ID: '430353615650646128',
    },
    dev: {
      VITE_APP_MERCHANT_ID: '780916020056862725',
    },
    test: {
      VITE_APP_MERCHANT_ID: '956200983538135066',
    },
    pre: {
      VITE_APP_MERCHANT_ID: '956202927255576658',
    },
    release: {
      VITE_APP_MERCHANT_ID: '886631521158508642',
    },
  },
  // demo2 测试用生产环境
  demo2: {
    common: {
      VITE_APP_MERCHANT_CODE: 'demo',
      VITE_APP_TITLE: 'DBCNY',
      VITE_APP_CURRENCY: 'CNY',
      VITE_APP_FB_APP_ID: '1089758781678258',
      VITE_APP_ZALO_APP_ID: '430353615650646128',
    },
    dev: {
      VITE_APP_MERCHANT_ID: '970721221950914652',
    },
    test: {
      VITE_APP_MERCHANT_ID: '970721221950914652',
    },
    pre: {
      VITE_APP_MERCHANT_ID: '970721221950914652',
    },
    release: {
      VITE_APP_MERCHANT_ID: '970721221950914652',
    },
  },
  // bet999越南盾
  bet999_vnd: {
    common: {
      VITE_APP_MERCHANT_CODE: 'bet999_vnd',
      VITE_APP_TITLE: 'BET999',
      VITE_APP_CURRENCY: 'VND',
      VITE_APP_FB_APP_ID: '',
      VITE_APP_ZALO_SECRET_KEY: 'L4Bru6v8C6j7TSRYxGKK',
      VITE_APP_ZALO_APP_ID: '4491404430502907660',
    },
    dev: {
      VITE_APP_MERCHANT_ID: '952891424482856991',
    },
    test: {
      VITE_APP_MERCHANT_ID: '940268711937011790',
      VITE_APP_GOOGLE_GTAG_ID: 'G-SJ0B5S674L',
      VITE_APP_META_PIXEL_ID: '865001608704556',
    },
    pre: {
      VITE_APP_MERCHANT_ID: '940277660343459925',
      VITE_APP_META_PIXEL_ID: '865001608704556',
    },
    release: {
      VITE_APP_MERCHANT_ID: '940280064414658579',
      VITE_APP_GOOGLE_GTAG_ID: 'G-81ECG8XD44',
      VITE_APP_META_PIXEL_ID: '1773062073114673',
    },
  },
  // bet999 usdt
  bet999_usdt: {
    common: {
      VITE_APP_MERCHANT_CODE: 'bet999_usdt',
      VITE_APP_TITLE: 'BET999',
      VITE_APP_CURRENCY: 'USDT',
      VITE_APP_FB_APP_ID: '',
      VITE_APP_ZALO_SECRET_KEY: 'L4Bru6v8C6j7TSRYxGKK',
      VITE_APP_ZALO_APP_ID: '4491404430502907660',
    },
    dev: {
      VITE_APP_MERCHANT_ID: '827207346373226540',
    },
    test: {
      VITE_APP_MERCHANT_ID: '940318208511668269',
      VITE_APP_GOOGLE_GTAG_ID: 'G-FJMR0P476F',
    },
    pre: {
      VITE_APP_MERCHANT_ID: '940319162650189900',
    },
    release: {
      VITE_APP_MERCHANT_ID: '940315042162749521',
    },
  },
  // bet999泰铢
  bet999_thb: {
    common: {
      VITE_APP_MERCHANT_CODE: 'bet999_thb',
      VITE_APP_TITLE: 'BET999',
      VITE_APP_CURRENCY: 'THB',
      VITE_APP_FB_APP_ID: '',
      VITE_APP_ZALO_SECRET_KEY: 'L4Bru6v8C6j7TSRYxGKK',
      VITE_APP_ZALO_APP_ID: '4491404430502907660',
    },
    dev: {
      VITE_APP_MERCHANT_ID: '952891657988149262',
    },
    test: {
      VITE_APP_MERCHANT_ID: '940269142041915428',
    },
    pre: {
      VITE_APP_MERCHANT_ID: '940278026556530744',
    },
    release: {
      VITE_APP_MERCHANT_ID: '940279775238369308',
      VITE_APP_GOOGLE_GTAG_ID: 'G-81ECG8XD44',
    },
  },
  // YOMI 体育
  yomi_sports: {
    common: {
      VITE_APP_MERCHANT_CODE: 'yomi_sports',
      VITE_APP_TITLE: 'Yomi Sports',
      VITE_APP_CURRENCY: 'USDT',
      VITE_APP_FB_APP_ID: '',
      VITE_APP_ZALO_SECRET_KEY: '',
      VITE_APP_ZALO_APP_ID: '',
    },
    dev: {
      VITE_APP_MERCHANT_ID: '940269142041915428',
    },
    test: {
      VITE_APP_MERCHANT_ID: '956226368124448799',
    },
    pre: {
      VITE_APP_MERCHANT_ID: '956227997403308099',
    },
    release: {
      VITE_APP_MERCHANT_ID: '956150084751405146',
    },
  },
  // 99BET
  '99bet': {
    common: {
      VITE_APP_MERCHANT_CODE: '99bet',
      VITE_APP_TITLE: '99BET',
      VITE_APP_CURRENCY: 'VND',
      VITE_APP_FB_APP_ID: '',
      VITE_APP_ZALO_SECRET_KEY: '',
      VITE_APP_ZALO_APP_ID: '',
    },
    dev: {
      VITE_APP_MERCHANT_ID: '940269142041915428',
    },
    test: {
      VITE_APP_MERCHANT_ID: '956226368124448799',
    },
    pre: {
      VITE_APP_MERCHANT_ID: '956227997403308099',
    },
    release: {
      VITE_APP_MERCHANT_ID: '962357297287344199',
    },
  },

  // ck8
  ck8: {
    common: {
      VITE_APP_MERCHANT_CODE: 'ck8',
      VITE_APP_TITLE: 'CK8',
      VITE_APP_CURRENCY: 'VND',
      VITE_APP_FB_APP_ID: '',
      VITE_APP_ZALO_SECRET_KEY: '',
      VITE_APP_ZALO_APP_ID: '',
    },
    dev: {
      VITE_APP_MERCHANT_ID: '940269142041915428',
    },
    test: {
      VITE_APP_MERCHANT_ID: '956226368124448799',
    },
    pre: {
      VITE_APP_MERCHANT_ID: '956227997403308099',
    },
    release: {
      VITE_APP_MERCHANT_ID: '968191184747970587',
    },
  },
};

// 合并环境变量
export const mergeEnvCofing = () => {
  // 如果脚本中没有merchant_code参数，默认读取demo站配置
  const envCofing = envConfigList[process.env.merchant_code || 'demo_cny'];
  Object.keys(envCofing).forEach((v) => {
    envCofing[v] = Object.assign(
      { ...envCofing.common, ...envCofing[v] },
      baseEnvConfig[v],
    );
  });
  return envCofing;
};
