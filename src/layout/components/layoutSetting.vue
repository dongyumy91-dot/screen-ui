<template>
  <el-drawer
    title="页面配置"
    v-model="_open"
    :size="400"
    :with-header="true"
    :show-close="true"
    append-to-body
    destroy-on-close
  >
    <div class="layout-setting-warp">
      <div class="setting-item item-flex-colum">
        <h3 class="setting-item-title">页面语言</h3>
        <div class="setting-item-box">
          <el-select v-model="langActive" @change="handleThemeLangChange">
            <el-option
              v-for="item in langList"
              :key="item.value"
              :label="item.name"
              :value="item.value"
            />
          </el-select>
        </div>
      </div>

      <div class="setting-item item-flex-colum">
        <h3 class="setting-item-title">主题模式</h3>
        <div class="setting-item-box">
          <div class="theme-mode">
            <div
              class="theme-mode-radio"
              :class="{ 'is-checked': themeModeActive === modeItem.key }"
              v-for="(modeItem, i) in themeMode"
              :key="i"
            >
              <label
                class="theme-mode-box"
                @click="handleThemeModeChange(modeItem.key)"
              >
                <div
                  class="theme-mode-icon"
                  :style="modeItem.style || undefined"
                >
                  <el-icon :size="26"
                    ><component :is="modeItem.icon"></component
                  ></el-icon>
                </div>
              </label>
              <p>{{ modeItem.label }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="setting-item item-flex-colum">
        <h3 class="setting-item-title">主题色</h3>
        <div class="setting-item-box">
          <div class="theme-color">
            <div
              class="theme-color-blox"
              :class="{ 'is-checked': themeColorActive === colorKey }"
              v-for="(colorKey, i) in themeColor"
              :key="i"
              :style="{ '--el-color-primary': colorKey }"
              @click="handleThemeColorChange(colorKey)"
            ></div>
          </div>
        </div>
      </div>

      <el-divider style="margin: 40px 0">其他</el-divider>

      <div class="setting-item">
        <h3 class="setting-item-title">显示 Breadcrumbs</h3>
        <div class="setting-item-box">
          <el-switch
            v-model="breadcrumbIsShow"
            inline-prompt
            :active-value="true"
            :inactive-value="false"
            @change="handleLayoutBreadcrumbShowChange"
          />
        </div>
      </div>

      <div class="setting-item" v-if="false">
        <h3 class="setting-item-title">使用 多标签Tab页</h3>
        <div class="setting-item-box">
          <el-switch v-model="value1" />
        </div>
      </div>
    </div>
    <template #footer>
      <div style="text-align: left">
        <el-alert
          description="开发者可复制后手动修改配置文件: config/index.js 中的配置默认值，非常不建议在生产环境下开放布局设置"
          type="error"
          :closable="false"
        />
        <div style="text-align: center; margin-top: 10px">
          <el-button type="primary" link v-copy="copyConfigValue"
            >复制配置</el-button
          >
        </div>
      </div>
    </template>
  </el-drawer>
</template>

<script>
import { mapStores } from "pinia";
import { useSystemStore } from "@/stores/modules/system";
export default {
  props: {
    open: { type: Boolean, default: () => false },
  },
  watch: {
    open: function (isOpen) {
      this._open = isOpen;
    },
    _open: function (isOpen) {
      this.$emit("update:open", isOpen);
    },
    "systemStore.getLang": function (lang) {
      this.styleForm.LANG = this.langActive = lang;
    },
    "systemStore.getTheme": function (themeMode) {
      this.styleForm.STYLE_OPTION.THEME_MODE = this.themeModeActive = themeMode;
    },

    "systemStore.getThemeColor": function (themeColor) {
      this.styleForm.STYLE_OPTION.COLOR = this.themeColorActive = themeColor;
    },
    "systemStore.getLayoutStyles": {
      deep: true,
      handler: function (option) {
        this.styleForm.STYLE_OPTION.LAYOUT_STYLES.breadcrumb.isShow =
          this.breadcrumbIsShow = option.breadcrumb.isShow;
      },
    },
  },
  computed: {
    ...mapStores(useSystemStore),

    langList: function () {
      return this.systemStore.getLangList;
    },

    copyConfigValue: function () {
      return JSON.stringify(this.styleForm, null, 4);
    },
  },
  data() {
    return {
      _open: false,

      styleForm: {
        LANG: "",
        STYLE_OPTION: {
          THEME_MODE: "",
          COLOR: "",

          LAYOUT_STYLES: {
            breadcrumb: {
              isShow: true,
            },
          },
        },
      },

      // 预设主题语言
      langActive: "zh-cn",

      // 预设主题模式
      themeModeActive: "light",
      themeMode: [
        { key: "light", label: "明亮", icon: "ElIconSunny", style: {} },
        {
          key: "dark",
          label: "暗黑",
          icon: "ElIconMoon",
          style: { color: "#949eaa", backgroundColor: "#13161b" },
        },
      ],

      // 预设主题色
      themeColorActive: "#1890ff",
      themeColor: [
        "#1890ff",
        "#f5222d",
        "#fa541c",
        "#faad14",
        "#13c2c2",
        "#52c41a",
        "#2f54eb",
        "#722ed1",
      ],

      breadcrumbIsShow: false,
    };
  },
  mounted() {
    this.initialize();
  },
  methods: {
    initialize: function () {
      this._open = this.open;

      this.styleForm.LANG = this.langActive = this.systemStore.getLang;
      this.styleForm.STYLE_OPTION.THEME_MODE = this.themeModeActive =
        this.systemStore.getTheme;
      this.styleForm.STYLE_OPTION.COLOR = this.themeColorActive =
        this.systemStore.getThemeColor;
      this.styleForm.STYLE_OPTION.LAYOUT_STYLES.breadcrumb.isShow =
        this.breadcrumbIsShow =
          this.systemStore.getLayoutStyles["breadcrumb"]["isShow"];
    },
    /**
     * 页面语言切换
     *
     * @param {String} lang
     */
    handleThemeLangChange: function (lang) {
      this.langActive = lang;
      this.styleForm.LANG = lang;
      this.systemStore.setLang(lang);
    },
    /**
     * 主题模式切换
     *
     * @param {String} themeMode
     */
    handleThemeModeChange: function (themeMode) {
      this.themeModeActive = themeMode;
      this.styleForm.STYLE_OPTION.THEME_MODE = themeMode;
      this.systemStore.setTheme(themeMode);
    },
    /**
     * 主题色切换
     *
     * @param {String} themeColor
     */
    handleThemeColorChange: function (themeColor) {
      this.themeColorActive = themeColor;
      this.styleForm.STYLE_OPTION.COLOR = themeColor;
      this.systemStore.setThemeColor(themeColor);
    },

    /**
     * 面包屑是否显示
     *
     * @param {Boolean} show
     */
    handleLayoutBreadcrumbShowChange: function (show) {
      this.styleForm.STYLE_OPTION.LAYOUT_STYLES.breadcrumb.isShow = show;
      let _breadcrumb = this.systemStore.getLayoutStyles["breadcrumb"];
      _breadcrumb.isShow = show === "true" || show === true;
      this.systemStore.setLayoutStyles({
        breadcrumb: _breadcrumb,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
:root {
  --theme-color: var(--el-color-primary);
}
.layout-setting-warp {
}

.setting-item {
  display: flex;
  justify-content: space-between;
  margin: 0 0 20px;

  .setting-item-title {
    position: relative;
    color: var(--el-text-color-regular);
    font-size: var(--el-form-label-font-size);
    font-weight: 500;
    line-height: 22px;
    margin: 0;
  }
}

.item-flex-colum {
  flex-direction: column;
  gap: 15px;

  .setting-item-title {
    padding-left: 10px;
    &::before {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 4px;
      border-left: 4px solid var(--el-color-primary);
      content: "";
    }
  }
}

.theme-mode {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  width: 100%;
  justify-content: space-around;

  .is-checked {
    .theme-mode-box {
      border-color: var(--el-color-primary) !important;
    }
  }

  .theme-mode-radio {
    display: block;
    width: 100%;
    .theme-mode-box {
      display: block;
      color: var(--el-text-color-primary);
      height: 45px;
      margin: 0;
      border: 2px solid transparent;
      border-radius: var(--el-border-radius-base);
      cursor: pointer;

      .theme-mode-icon {
        display: flex;
        height: 100%;
        background-color: var(--el-color-info-light-8);
        align-items: center;
        justify-content: center;
        border-radius: var(--el-border-radius-base);
      }
    }

    p {
      text-align: center;
      margin-top: 8px;
      margin-bottom: 0;
    }
  }
}

.theme-color {
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 5px;

  .theme-color-blox {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    cursor: pointer;
    border: 1px solid transparent;

    &::after {
      display: block;
      width: calc(100% - 10px);
      height: calc(100% - 10px);
      border-radius: 50%;
      background-color: var(--theme-color, var(--el-color-primary));
      content: "";
    }
  }

  .theme-color-blox.is-checked {
    border-color: var(--theme-color, var(--el-color-primary));
  }
}
</style>
