import sysConfig from "@/config";
import Tools from "@/utils/tools";

const signTools = {
  /**
   * 判断是否是JSON数据
   *
   * @param {String|Object} str 待验证数据
   *
   * @return {Boolean}
   */
  isJson(str) {
    if (typeof str == "string") {
      try {
        JSON.parse(str);
        return true;
      } catch (e) {
        return false;
      }
    } else {
      return typeof str == "object";
    }
  },

  /**
   * 判断是否是空值
   *
   * @param {any} obj
   *
   * @return {Boolean}
   */
  isEmpty(obj) {
    if (obj === undefined || obj === null || obj === "" || typeof obj === "undefined"
      || obj.length === 0 || JSON.stringify(obj) === "{}") {
      return typeof obj !== "boolean";
    } else {
      return false;
    }
  },

  /**
   * 判断是否为索引数组
   *
   * @param {any} data 待判断数据
   *
   * @return {Boolean}
   */
  isArrayOrObject(data) {
    return typeof data === "object";
  },

  /**
   * 去除数组(对象)中空数据
   * @link https://blog.csdn.net/u011159821/article/details/124262466
   * @param {Object|Array} arr
   * @return {Object|Array}
   */
  filterNullValue(arr) {
    let _data = (typeof arr != "object") ? [arr] : arr;  //确保参数总是数组
    let _dataJudge = function(val) { // 统一过滤判断
      if (val === null || val === "" || val === undefined || JSON.stringify(val) === "{}") {
        return typeof val !== "boolean";
      }
      return false;
    };
    for (let i in _data) {
      if (typeof _data[i] === "number" || (Number(_data[i]) === _data[i])) {
        if (_dataJudge(_data[i])) {
          _data.splice(i, 1);
        }
      } else {
        if (_dataJudge(_data[i])) delete _data[i];
      }
    }
    return _data;
  }
};

class SIGN {
  constructor() {
    this.__KEY = sysConfig.API_SIGN_KEY || "";

    return {
      key: this.key,
      check: this.check,
      make: this.make,
    };
  }

  /**
   * 获取SIGN生成盐
   *
   * @return {String}
   */
  get key() {
    return this.__KEY;
  }

  /**
   * 设置生成SIGN的盐
   *
   * @param {String} key
   *
   * @return {void}
   */
  set key(key) {
    this.__KEY = key;
  }

  /**
   * 对照Sign规则验证给定的值
   *
   * @param  {Array}   value
   * @param  {String}  checkValue
   *
   * @return {Boolean}
   */
  check(value, checkValue) {
    return this.make(value) === checkValue;
  }

  /**
   * 生成给定值的SIGN
   *
   * @param  {Array}   value
   *
   * @return {String}
   */
  make(value) {
    if (!signTools.isJson(value) && typeof value === "function") return "";

    //取key
    var keys = [];
    for (let k in value) {
      if (k === "sign") {
        continue;
      }
      keys.push(k);
    }

    // 排序
    keys.sort();

    // 取value
    let kv = [];
    let _tamp = "";
    for (let k of keys) {
      if (signTools.isEmpty(value[k])) continue;

      if (signTools.isArrayOrObject(value[k]) === true) {
        kv.push(k + "=" + JSON.stringify(signTools.filterNullValue(value[k])));
      } else {
        // _tamp = encodeURIComponent(value[k]);
        // _tamp = _tamp.replace(/\(/, "%28");
        // _tamp = _tamp.replace(/\)/, "%29");
        kv.push(k + "=" + value[k]);
      }
    }

    // 拼接
    let sign = kv.join("&");
    // sign = sign.replace(/\(/,'%28');
    // sign = sign.replace(/\)/,'%29');
    sign = sign + "#" + this.key;

    sign = Tools.crypto.MD5(sign);
    sign = sign.toUpperCase();
    return sign;
  }
}

export default new SIGN;