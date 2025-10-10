/* eslint-disable n/prefer-global/process */
//  --------------------参数说明--------------------
// VITE_APP_BASE_API: base api
// VITE_APP_KEY: 密钥key
// VITE_APP_SECRET_VERSION: 密钥版本
// VITE_APP_ENCRYPTED:  是否开启加密 1加密 0不加密
// VITE_APP_ENV_FLAG:  环境标识
// VITE_APP_MERCHANT_ID: 站点id, 站点列表数据表id
// VITE_APP_CURRENCY: 货币
// VITE_APP_TITLE: 站点名称
// VITE_APP_FB_APP_ID: facebook appid
// VITE_APP_ZALO_APP_ID: zalo appid
// VITE_APP_MERCHANT_CODE: 商户标识
// VITE_APP_MERCHANT_CONFIG: 商户配置类型, merchant.conf.js 中使用
// VITE_APP_FINGERPRINT_ENDPOINT: finger print 付费版，自定义 API 端点
// VITE_APP_TIMEZONE: 站点时区
// VITE_APP_TEMPLATE: 模版标识，D：模版D，E：模版E

// 生产环境公共配置
const prodCommonConfig = {
  VITE_APP_BASE_API: '/api/bw-client-server/',
  VITE_APP_KEY: 'UEUzJKosfvJ4mcRe',
  VITE_APP_SECRET_VERSION: '20',
  VITE_APP_ENCRYPTED: '1',
  VITE_APP_ENV_FLAG: 'release',
  VITE_APP_FINGERPRINT_ENDPOINT: 'https://bw999.rmfclbbo.com',
};

// 基础公共配置
const baseEnvConfig = {
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
    VITE_APP_BASE_API:
      'https://bw-client-gateway.pre.zhanggao223.com/bw-client-gateway/bw-client-server/',
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
const envConfigList = {
  // demo 外部提供演示用
  demo: {
    common: {
      VITE_APP_MERCHANT_CODE: 'demo',
      VITE_APP_TITLE: 'DBVND',
      VITE_APP_CURRENCY: 'VND',
      VITE_APP_FB_APP_ID: '1089758781678258',
      VITE_APP_ZALO_APP_ID: '430353615650646128',
    },
    dev: {
      // VITE_APP_MERCHANT_ID: '952891424482856991', // 模版D越南盾DEMO
      // VITE_APP_MERCHANT_ID: '952890960936767506', // 多商户子商户CNY
      VITE_APP_MERCHANT_ID: '952891424482856991', // 多商户子商户VND
    },
    test: {
      VITE_APP_MERCHANT_ID: '1065332985578614790', // D模板cny
    },
    pre: {
      VITE_APP_MERCHANT_ID: '1023271150672797767', // ck8越南盾子商户
    },
    release: {
      VITE_APP_MERCHANT_ID: '1056624637616668754', // 模板DVND
    },
  },
  bet999_vnd: {
    common: {
      VITE_APP_TIMEZONE: '7',
      VITE_APP_MERCHANT_CODE: 'bet999_vnd',
      VITE_APP_TITLE: 'BET999',
      VITE_APP_CURRENCY: 'VND',
      VITE_APP_FB_APP_ID: '',
      VITE_APP_ZALO_SECRET_KEY: '',
      VITE_APP_ZALO_APP_ID: '',
      VITE_APP_THEME: 't001',
    },
    dev: {
      VITE_APP_MERCHANT_ID: '1064138688806588489',
    },
    test: {
      VITE_APP_MERCHANT_ID: '940268711937011790',
      VITE_APP_GOOGLE_GTAG_ID: 'G-SJ0B5S674L',
      VITE_APP_META_PIXEL_ID: '',
      VITE_APP_BAIDU_TONGJI_ID: '3f82f195df145deb7f0b30abd56143cd',
    },
    pre: {
      VITE_APP_MERCHANT_ID: '940277660343459925',
      VITE_APP_META_PIXEL_ID: '',
    },
    release: {
      VITE_APP_MERCHANT_ID: '940280064414658579',
      VITE_APP_GOOGLE_GTAG_ID: 'G-81ECG8XD44',
      VITE_APP_META_PIXEL_ID: '',
      VITE_APP_BAIDU_TONGJI_ID: '4a64a686edff7ed962f5cd6d435ea47a',
    },
  },
  // 乐赢CNY中文站点
  leying_e: {
    common: {
      VITE_APP_TIMEZONE: '8',
      VITE_APP_MERCHANT_CODE: 'leying_e',
      VITE_APP_TITLE: 'ly',
      VITE_APP_CURRENCY: 'CNY',
      VITE_APP_FB_APP_ID: '',
      VITE_APP_ZALO_SECRET_KEY: '',
      VITE_APP_ZALO_APP_ID: '',
      VITE_APP_TEMPLATE: 'E',
    },
    dev: {
      VITE_APP_MERCHANT_ID: '',
    },
    test: {
      VITE_APP_MERCHANT_ID: '1165734464763686997',
      VITE_APP_GOOGLE_GTAG_ID: '',
      VITE_APP_META_PIXEL_ID: '',
      VITE_APP_BAIDU_TONGJI_ID: '',
    },
    pre: {
      VITE_APP_MERCHANT_ID: '1168244128832675930',
      VITE_APP_META_PIXEL_ID: '',
    },
    release: {
      VITE_APP_MERCHANT_ID: '1066705629765386246',
      VITE_APP_GOOGLE_GTAG_ID: '',
      VITE_APP_META_PIXEL_ID: '',
      VITE_APP_BAIDU_TONGJI_ID: '',
    },
  },

  // 快速开站共用服务器, 本地开发的时候可以看情况更改对应环境的VITE_APP_MERCHANT_ID
  // VITE_APP_V9_MERCHANT_ID 用于v9商户的特殊需求判断依据
  // VITE_APP_DEMO_MERCHANT_ID 用于demo商户的特殊需求判断依据
  common_web: {
    common: {
      VITE_APP_IS_COMMON_SITE: '1',
      VITE_APP_MERCHANT_CODE: 'common_web',
    },
    dev: {
      VITE_APP_MERCHANT_ID: '789469140550905867',
    },
    test: {
      VITE_APP_MERCHANT_ID: '1041007431228551243',
      VITE_APP_V9_MERCHANT_ID: '1106926342842839111',
      VITE_APP_DEMO_MERCHANT_ID: '1065290671804084253',
    },
    pre: {
      VITE_APP_MERCHANT_ID: '',
      VITE_APP_V9_MERCHANT_ID: '1113573569868193874',
      VITE_APP_DEMO_MERCHANT_ID: '',
    },
    release: {
      VITE_APP_MERCHANT_ID: '1134902901904326713',
      VITE_APP_V9_MERCHANT_ID: '1105909282728263761',
      VITE_APP_DEMO_MERCHANT_ID: '1056623978142052417',
    },
  }, // D 模板公共配置
  common_web_e: {
    common: {
      VITE_APP_IS_COMMON_SITE: '1',
      VITE_APP_MERCHANT_CODE: 'common_web_e',
      VITE_APP_TEMPLATE: 'E',
    },
    dev: {
      VITE_APP_MERCHANT_ID: '789469140550905867',
    },
    test: {
      VITE_APP_MERCHANT_ID: '1041007431228551243',
      VITE_APP_V9_MERCHANT_ID: '1106926342842839111',
      VITE_APP_DEMO_MERCHANT_ID: '1065290671804084253',
    },
    pre: {
      VITE_APP_MERCHANT_ID: '',
      VITE_APP_V9_MERCHANT_ID: '1113573569868193874',
      VITE_APP_DEMO_MERCHANT_ID: '',
    },
    release: {
      VITE_APP_MERCHANT_ID: '1134902901904326713',
      VITE_APP_V9_MERCHANT_ID: '1105909282728263761',
      VITE_APP_DEMO_MERCHANT_ID: '1056623978142052417',
    },
  }, // E 模板公告配置
};

// 合并环境变量
function mergeEnvCofing() {
  // 如果脚本中没有merchant_code参数，默认读取demo站配置
  const envCofing = envConfigList[process.env.merchant_code || 'demo'];
  Object.keys(envCofing).forEach((v) => {
    envCofing[v] = Object.assign(
      { ...envCofing.common, ...envCofing[v] },
      baseEnvConfig[v],
    );
  });
  console.log(envCofing);
  return envCofing;
}

module.exports = mergeEnvCofing();
