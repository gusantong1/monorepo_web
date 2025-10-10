import CryptoJS from 'crypto-js';
import md5 from 'js-md5';
import pako from 'pako';
/**
 * @description 通用加解密工具类
 */
export class EncryptUtils {
  private static defaultKey: string = '';

  /**
   * @description 初始化加密工具类
   * @param key
   */
  public static initEncryptUtils(key: string) {
    this.defaultKey = key;
  }

  /**
   * @description 创建long随机整型
   */
  public createNonce() {
    return Math.round(Math.random() * 2 ** 63);
  }

  /**
   * @description 创建签名
   * @param data
   * @param nonce
   * @param timestamp
   * @param key
   * @returns
   */
  public createSign(
    data: any,
    nonce: any,
    timestamp: any,
    key = EncryptUtils.defaultKey,
  ) {
    // sign 字符串
    const sign = data + key + nonce + timestamp;
    // hmacSHA1加密 -- 这里不需要做任何转吗，CryptoJS底层默认会转UTF-8
    const sha1Data = md5(md5(sign));
    return sha1Data;
  }

  /**
   * @description 获取当前时间戳 毫秒
   * @returns
   */
  public createTimestamp() {
    return Date.now();
  }

  /**
   * @description 数据解密 公开
   * @param data
   * @param key
   * @returns
   */
  public decryptData(data: string, key = EncryptUtils.defaultKey) {
    const commonKey = CryptoJS.enc.Utf8.parse(key);
    // aes解密
    const aesData = this.aesDecrypt(data, commonKey);
    // GZIP解密
    const gzipData = this.unzip(aesData);
    return gzipData;
  }

  /**
   * @description 数据加密 公开
   * @param data
   * @param key
   * @returns
   */
  public encryptData(data: any, key = EncryptUtils.defaultKey) {
    data = data || data * 1 === 0 ? data : {};
    if (typeof data !== 'string') {
      data = JSON.stringify(data);
    }
    // 将秘钥转换成Utf8字节数组
    const commonKey = CryptoJS.enc.Utf8.parse(key);
    const zipData = this.zip(data);
    const aesEncryptData = this.aesEncrypt(zipData, commonKey);
    return aesEncryptData;
    // const aesEncryptData = aesEncrypt(zipData, commonKey);
  }

  /**
   * @description aes解密
   * @param data
   * @param key
   * @returns
   */
  private aesDecrypt(data: any, key: any) {
    const decrypt = CryptoJS.AES.decrypt(data, key, {
      iv: key,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
    // 这里转成Unit8Array方便Gzip解压
    const bytesArray = this.wordToBytesArray(decrypt);
    return bytesArray;
  }

  /**
   * @description aes加密
   * @param zipData
   * @param key
   * @returns
   */
  private aesEncrypt(zipData: any, key: any) {
    // Uint8Array的数据转成WordArray的数据
    if (typeof zipData !== 'string') {
      zipData = this.typeArrayToWordArray(zipData);
    }
    const encrypt = CryptoJS.AES.encrypt(zipData, key, {
      iv: key,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
    return encrypt.toString();
  }

  /**
   * @description typedArrayToWordArray 字节数组转word数组
   */
  private typeArrayToWordArray(u8arr: pako.Uint8ArrayReturnType) {
    const len = u8arr.length;
    // Convert
    const words: any = [];
    for (let i = 0; i < len; i++) {
      words[i >>> 2] |= (u8arr[i] & 0xFF) << (24 - (i % 4) * 8);
    }
    return CryptoJS.lib.WordArray.create(words, len);
  }

  private unzip(key: any) {
    // GZIP解压
    const data = pako.inflate(key);
    // 16进制字节流 转wordArray
    const wordArray = this.typeArrayToWordArray(data);
    // wordArray 转UTF-8
    const str = CryptoJS.enc.Utf8.stringify(wordArray);

    return str;
  }

  private wordToBytesArray(wordArray: any) {
    // Shortcuts
    const words = wordArray.words;
    const sigBytes = wordArray.sigBytes;
    // Convert
    const u8 = new Uint8Array(sigBytes);
    for (let i = 0; i < sigBytes; i++) {
      const byte = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
      u8[i] = byte;
    }
    return u8;
  }

  /**
   * @description 字符串压缩成zip
   * @param str
   * @returns
   */
  private zip(str: string) {
    const binary = pako.gzip(str);
    return binary;
  }
}
