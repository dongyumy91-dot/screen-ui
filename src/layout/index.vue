<template>
  <el-container class="layout-container" direction="vertical">
    <!-- <LayoutHeader class="layout-header" :height="layoutStyles.header.height" /> -->
    <el-container>
      <!-- <LayoutAside
        :width="layoutStyles.aside.width"
        :menu="menu"
        :menu-active="menuActive"
        v-model:menu-collapse="layoutStyles.menu.collapse"
      /> -->
      <el-main class="layout-main">
        <LayoutBreadcrumb v-model:isShow="layoutStyles.breadcrumb.isShow" />
        <div class="main-warp">
          <iframe-view v-if="isIframeView" />
          <router-view v-else />
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { mapStores } from "pinia";
import { useSystemStore } from "@/stores/modules/system";
import LayoutHeader from "@/layout/components/layoutHeader.vue";
import LayoutAside from "@/layout/components/layoutAside.vue";
import LayoutBreadcrumb from "@/layout/components/breadcrumb.vue";
import LayoutSetting from "@/layout/components/layoutSetting.vue";
import IframeView from "@/layout/components/iframeView.vue";

export default {
  name: "DefaultLayout",
  components: {
    LayoutHeader,
    LayoutAside,
    LayoutBreadcrumb,
    LayoutSetting,
    IframeView,
  },
  computed: {
    ...mapStores(useSystemStore),

    isIframeView: function () {
      return this.$route.meta.type ? this.$route.meta.type === "iframe" : false;
    },

    layoutStyles: function () {
      return this.systemStore.getLayoutStyles;
    },

    mainWarpHeight: function () {
      if (this.layoutStyles.breadcrumb.isShow === true) {
        return `calc(100% - ${this.layoutStyles.breadcrumb.height} - 3px)`;
      }

      return "100%";
    },
  },
  watch: {
    $route: function () {
      this.showThis();
    },
    layoutStyles: {
      deep: true,
      handler: function (option) {
        this.systemStore.setLayoutStyles(option);
      },
    },
  },
  data() {
    return {
      menu: [],
      nextMenu: [],
      pmenu: {},
      menuActive: "",

      layoutSetting: {
        open: false,
      },
    };
  },
  created() {
    this.systemStore.setLayoutStyles(this.systemStore.getLayoutStyles);
    this.menu = this.filterUrl(this.$router.getMenu());
    this.showThis();
  },
  methods: {
    openLayoutSetting() {
      this.layoutSetting.open = false;
    },
    /**
     * 路由监听高亮
     */
    showThis() {
      this.pmenu = this.$route.meta.breadcrumb ? this.$route.meta.breadcrumb[0] : {};
      this.nextMenu = this.filterUrl(this.pmenu.children);
      this.$nextTick(() => {
        this.menuActive = this.$route.meta.active || this.$route.path || this.$route.fullPath;
      });
    },
    /**
     * 转换外部链接的路由
     *
     * @param {Array} map
     *
     * @return {Array}
     */
    filterUrl(map) {
      var newMap = [];
      map &&
        map.forEach((item) => {
          item.meta = item.meta ? item.meta : {};
          //处理隐藏
          if (item.meta.hidden || item.meta.type == "button") {
            return false;
          }
          //处理http
          if (item.meta.type == "iframe") {
            item.path = `/i/${item.name}`;
          }
          //递归循环
          if (item.children && item.children.length > 0) {
            item.children = this.filterUrl(item.children);
          }
          newMap.push(item);
        });
      return newMap;
    },
  },
};
</script>

<style scoped lang="scss">
.layout-container {
  height: 100vh;
  background-color: "transparent";

  :deep(.el-container) {
    height: calc(100vh - v-bind("layoutStyles.header.height"));
  }
  :deep(.el-card) {
    background: transparent;
    border: none;
  }
}
.layout-main {
  height: 100%;
  padding: 0;

  .main-warp {
    height: v-bind("mainWarpHeight");
    overflow-y: auto;

    .el-container {
      height: 100%;
      overflow-y: auto;
    }
  }
}
</style>
