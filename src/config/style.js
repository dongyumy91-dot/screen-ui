const DEFAULT_CONFIG = {
  // 主题模式
  THEME_MODE: "light",

  // 颜色
  COLOR: "",

  // 主体布局样式控制
  LAYOUT_STYLES: {
    // 顶部栏
    header: {
      // 顶部容器高度
      height: "48px",
    },

    // 侧边栏
    aside: {
      // 侧边栏容器宽度
      width: "200px",
    },

    // 菜单
    menu: {
      //菜单是否折叠
      collapse: false,
      //菜单是否启用手风琴效果
      unique_opened: false,
    },

    // 面包屑
    breadcrumb: {
      // 是否显示导航
      isShow: true,
      // 导航高度
      height: "50px",
    },

    // 多标签Tab页
  },
};

export default DEFAULT_CONFIG;
