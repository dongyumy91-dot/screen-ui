import sysConfig from "@/config";
import SystemEnum from "@/enum/SystemEnum";
import Tools from "@/utils/tools";
import ColorUnit from "@/utils/color";
import { defineStore } from "pinia";

export const useSystemStore = defineStore({
  id: "system",
  state: () => ({
    //语言
    lang_current: Tools.data.get(SystemEnum.APP_LANG_KEY) || sysConfig.LANG,
    lang_list: [],

    // 主题
    theme:
      Tools.data.get(SystemEnum.APP_THEME_KEY) ||
      sysConfig.STYLE_OPTION.THEME_MODE,

    // 颜色
    color: sysConfig.STYLE_OPTION.COLOR || "#1890ff",

    // 主体布局控制
    layoutStyles:
      Tools.data.get(SystemEnum.APP_LAYOUT_KEY) ||
      sysConfig.STYLE_OPTION.LAYOUT_STYLES,
  }),
  getters: {
    getLang: (state) => state.lang_current,
    getLangList: (state) => state.lang_list,

    getTheme: (state) => state.theme,
    getThemeColor: (state) => state.color,

    getLayoutStyles: (state) => state.layoutStyles,
  },
  actions: {
    /**
     * 设置页面主题模式
     *
     * @param {String} theme 暗色dark 亮色light
     *
     * @return {Boolean}
     */
    setTheme(theme) {
      this.theme = theme;
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
        Tools.data.set(SystemEnum.APP_THEME_KEY, "dark");
      } else {
        document.documentElement.classList.remove("dark");
        Tools.data.remove(SystemEnum.APP_THEME_KEY);
      }
      return true;
    },
    /**
     * 设置页面主题色
     *
     * @param {String} color
     *
     * @return {Boolean}
     */
    setThemeColor(color) {
      if (!color) return false;
      this.color = color;
      //设置主题颜色
      document.documentElement.style.setProperty("--el-color-primary", color);
      document.documentElement.style.setProperty(
        "--el-color-primary-dark",
        ColorUnit.darken(color, 1 / 10)
      );
      for (let i = 1; i <= 9; i++) {
        document.documentElement.style.setProperty(
          `--el-color-primary-light-${i}`,
          ColorUnit.lighten(color, i / 10)
        );
      }
      for (let i = 1; i <= 9; i++) {
        document.documentElement.style.setProperty(
          `--el-color-primary-dark-${i}`,
          ColorUnit.darken(color, i / 10)
        );
      }
      return true;
    },
    /**
     * 设置页面语言
     *
     * @param {String|Array} keys
     *
     * @return {Boolean}
     */
    setLang(keys) {
      if (Tools.isArray(keys) === true) {
        this.lang_list = keys;
        return true;
      } else if (Tools.isString(keys) === true) {
        this.lang_current = keys;
        Tools.data.set(SystemEnum.APP_LANG_KEY, keys);
        return true;
      }
      return false;
    },
    /**
     * 设置页面主体布局
     *
     * @param {Object|String} option
     * @param {Any} value
     *
     * @return {Void}
     */
    setLayoutStyles(option, value) {
      if (Tools.isString(option)) {
        if (!!this.layoutStyles[option]) {
          this.layoutStyles[option] = value;
        }
      } else {
        for (let item in option) {
          this.setLayoutStyles(item, option[item]);
        }
        Tools.data.set(SystemEnum.APP_LAYOUT_KEY, this.layoutStyles);
      }
    },
  },
});
