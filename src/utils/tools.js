import SysConfig from "@/config";
import CryptoJS from "@/utils/crypto";
import Cookie from "@/utils/cookie";
import LocalStorage from "@/utils/localStorage";
import * as lodash from "lodash";

export default {
  ...lodash,
  crypto: CryptoJS,
  cookie: Cookie,
  data: LocalStorage,

  /**
   * 统一获取图标名称
   *
   * @param {String} iconName  图标名称
   * @param {String} prefix    图标前缀，默认调用系统配置
   *
   * @return {String}
   */
  iconName: function(iconName, prefix) {
    prefix = prefix ? prefix : SysConfig.APP_PREFIX;
    return `${this.upperFirst(prefix)}Icon${iconName}`;
  },

  /**
   * 自动引入辅助处理方法
   *
   * @param {Array} moduleList   模块列表
   * @param {String} prefixPath  前缀路径，例：pages/usercenter/components
   * @param {String} suffixPath  后缀路径，例：vue
   * @param {Function} moduleFun 可选， 自定义存储
   *
   * @example <<<
   * getAutoImportList(
   *  import.meta.glob('@/pages/usercenter/components/*Panel.vue', { eager: true }),
   *    'pages/usercenter/components',
   *    'vue',
   *    function ({ name }) {
   *			return defineAsyncComponent(() => import(`@/pages/usercenter/components/${name}.vue`));
   *		},
   * )
   * >>>
   */
  getAutoImportList: function(moduleList, prefixPath, suffixPath, moduleFun) {
    let name = "",
      slice = [],
      list = {};
    Object.keys(moduleList).forEach((fileName) => {
      slice = [
        fileName.indexOf(prefixPath) + prefixPath.length + 1,
        !!suffixPath ? "-" + (suffixPath.length + 1) : fileName.length,
      ];
      name = fileName.slice(slice[0], slice[1]);
      if (!!moduleFun) {
        list[name] = moduleFun({
          name,
          module: moduleList[fileName],
          filePath: fileName,
        });
      } else {
        list[name] = moduleList[fileName];
      }
    });
    return list;
  },

  /**
   * 返回文件路径的信息
   *
   * @param {String} path 要解析的路径
   * @param {String} flags 如果指定了，将会返回指定元素(dirname\basename\extension\filename)
   *
   * @return {Object|String|null}
   */
  pathinfo: function(path, flags) {
    let _fileInfo = {
      dirname: "",
      basename: "",
      extension: "",
      filename: "",
    };
    _fileInfo["basename"] = path.slice(path.lastIndexOf("/") + 1);
    if (path.lastIndexOf(".") < 0) {
      _fileInfo["extension"] = "";
    } else {
      _fileInfo["extension"] = path.slice(path.lastIndexOf(".") + 1);
    }
    _fileInfo["filename"] = _fileInfo["basename"].slice(
      0,
      _fileInfo["basename"].lastIndexOf(_fileInfo["extension"]) - 1,
    );
    _fileInfo["dirname"] = path.slice(0, -_fileInfo["basename"].length - 1);

    if (flags) {
      if (!!_fileInfo[flags]) {
        return _fileInfo[flags];
      } else {
        return null;
      }
    }
    return _fileInfo;
  },
};
