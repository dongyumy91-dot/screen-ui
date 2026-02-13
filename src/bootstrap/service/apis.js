import * as Api from "@/api";
import Tools from "@/utils/tools";

/**
 * 获取API模块(支持“.”获取)
 *
 * @param {Object} object API模块列表
 * @param {String} string api模块路径，例如：auth.token
 *
 * @return {Object}
 */
function getApiModel(object, string) {
  let tags = string.split(".");
  let tagsCopy = JSON.parse(JSON.stringify(tags));
  tagsCopy.map(item => {
    object = object[tags[0]];
    tags.shift();
  });
  return object;
}

/**
 * API快捷调用处理器
 *
 * @param {String|Object} url
 * @param {String|Object} options
 *
 * @return {Promise}
 */
const APIS = function(url, options) {
  let _api = {},
    _apiMethod,
    _apiParams = [],
    _options = {
      url: "",
      params: {},
    };
  if (typeof url === "string") {
    _options.url = url;
  } else {
    Object.assign(_options, url);
  }
  Object.assign(_options, options || {});

  _api = getApiModel(Api.default.modules, _options.url);
  _apiMethod = _api.method || "get";

  // (暂定)自定义扩展支持
  if (_options.extend) {
    Object.keys(_options.extend).forEach(function(funKeyName) {
      if (_api[funKeyName] && typeof _api[funKeyName] === "function") {
        let _funParams = [];
        if (Tools.isArray(_options.extend[funKeyName])) {
          _funParams = _options.extend[funKeyName];
        } else {
          _api[funKeyName].getParamKeys().forEach(function(keyName) {
            _funParams.push(_options.extend[funKeyName][keyName]);
          });
        }

        _api[funKeyName].apply(_api, _funParams);
      }
    });
  }

  if (Tools.isArray(_options.params)) {
    _apiParams = _options.params;
  } else {
    _api[_apiMethod].getParamKeys().forEach(function(keyName) {
      _apiParams.push(_options.params[keyName]);
    });
  }

  return _api[_apiMethod].apply(_api, _apiParams);
};

export default APIS;