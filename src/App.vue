<template>
  <div class="app-root">
    <el-config-provider :button="config.button" :locale="locale" :size="config.size" :zIndex="config.zIndex">
      <router-view />
    </el-config-provider>
  </div>
</template>

<script>
import { mapStores } from "pinia";
import { useSystemStore } from "@/stores/modules/system";

export default {
  name: "App",
  watch: {
    "systemStore.getLang": function (locale) {
      this.$i18n.locale = locale;
    },
  },
  data() {
    return {
      config: {
        size: "default",
        zIndex: 2000,
        button: {
          autoInsertSpace: false,
        },
      },
    };
  },
  computed: {
    ...mapStores(useSystemStore),
    locale() {
      return this.$i18n.messages[this.$i18n.locale].el;
    },
  },
  created() {
    console.log(
      "%c CMCC %c Gitee: https://gitee.com/nxqf/zy-admin-template",
      "background:#666;color:#fff;border-radius:3px;",
      "",
    );
    this.initializeTheme();
  },
  mounted() {
    this.initializeLocale();
  },
  methods: {
    /**
     * 初始化多语言数据
     */
    initializeLocale() {
      let _langList = Object.values(this.$TOOLS.cloneDeep(this.$i18n.messages)).map((item) => {
        return {
          name: item.label,
          value: item.el.name,
        };
      });
      this.systemStore.setLang(_langList);
    },
    initializeTheme: function () {
      // 设置主题模式
      this.systemStore.setTheme(this.systemStore.getTheme);
      // 设置主题色
      this.systemStore.setThemeColor(this.$CONFIG.STYLE_OPTION.COLOR || this.systemStore.getThemeColor);
    },
  },
};
</script>

<style scoped>
.app-root {
  min-height: 100vh;
  background: url("@/assets/common/bg.png") no-repeat center center;
  background-size: cover;
  color: var(--white);
}
</style>
