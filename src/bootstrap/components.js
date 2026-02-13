/**
 * @description 注册全局组件
 */
import Tools from "@/utils/tools";
import SysConfig from "@/config";
import * as elIcons from "@element-plus/icons-vue";
import * as customIcons from "@/assets/icons";

const Prefix = Tools.upperFirst(SysConfig.APP_PREFIX);

const zyComponentsList = import.meta.glob(`@/components/Zy*/index.*`, {
  import: "default",
  eager: true,
});

// 动态引入全局注册组件
const componentsList = import.meta.glob(`@/components/global/*/index.*`, {
  import: "default",
  eager: true,
});

/**
 * 注册全局公共(模块)组件
 *
 * @param {Object} app
 * @param {Array}  list
 * @param {String} prefix
 *
 * @return {void}
 */
function registerCustomComponents(app, list, prefix) {
  let _tamp, _tampComponentName;
  let _componentsList = list ? list : componentsList;
  prefix = prefix ? prefix : Prefix;

  for (let component in _componentsList) {
    _tamp = Tools.pathinfo(component);
    _tampComponentName =
      _componentsList[component]?.name ||
      _tamp.dirname.slice(_tamp.dirname.lastIndexOf("/") + 1);
    _tampComponentName = `${prefix}${Tools.upperFirst(_tampComponentName)}`;

    if (["vue"].includes(_tamp.extension)) {
      _componentsList[component].name = _tampComponentName;
      app.component(_tampComponentName, _componentsList[component]);
    } else {
      for (let module in _componentsList[component]) {
        _componentsList[component][module].name = `${prefix}${Tools.upperFirst(module)}`;
        app.component(
          _componentsList[component][module].name,
          _componentsList[component][module],
        );
      }
    }
  }
}

const registerComponentsList = {
  /**
   * 统一注册el-icon图标
   *
   * @param {Object} app
   *
   * @return {void}
   */
  elIcons: function(app) {
    for (let icon in elIcons) {
      app.component(`ElIcon${icon}`, elIcons[icon]);
    }
  },
  /**
   * 统一注册自定义扩展图标
   *
   * @param {Object} app
   *
   * @return {void}
   */
  customIcons: function(app) {
    // 统一自定义图标前缀
    let CustomIconsPrefix = `${Prefix}Icon`;
    for (let icon in customIcons) {
      app.component(`${CustomIconsPrefix}${icon}`, customIcons[icon]);
    }
  },
  /**
   * 注册内置全局公共(模块)组件
   *
   * @param {Object} app
   *
   * @return {void}
   */
  internalComponents: function(app) {
    registerCustomComponents(app, zyComponentsList, "Zy");
  },
  /**
   * 注册全局公共(模块)组件
   *
   * @param {Object} app
   *
   * @return {void}
   */
  customComponents: function(app) {
    registerCustomComponents(app, undefined, undefined);
  },
};

export default function components(app) {
  for (let componentsDispose in registerComponentsList) {
    registerComponentsList[componentsDispose].call(this, app);
  }
}
