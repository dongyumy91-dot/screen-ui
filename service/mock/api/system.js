import { createMockApi } from "../mockTools";

const MockApi = [
  // 获取后台菜单列表
  createMockApi("get", "system/menu/my", {
    menu: [
      {
        path: "/component",
        name: "component",
        meta: {
          title: "组件",
          icon: "el-icon-price-tag",
          type: "menu",
        },
        children: [
          {
            path: "/component/data",
            name: "component.data",
            meta: {
              title: "Data 数据展示",
              icon: "el-icon-data-analysis",
              type: "menu",
            },
            children: [
              {
                path: "/component/echarts",
                name: "component.data.echarts",
                meta: {
                  title: "图表 Echarts",
                  type: "menu",
                },
                component: "component/echarts/index",
                children: [],
              },
            ],
          },
          {
            path: "/component/form-data",
            name: "component.form",
            meta: {
              title: "Form数据录入",
              icon: "el-icon-edit",
              type: "menu",
            },
            children: [
              {
                path: "/component/icon-picker",
                name: "component.form.IconPicker",
                meta: {
                  title: "图标选择器",
                  type: "menu",
                },
                component: "component/iconPicker/index",
                children: [],
              },
            ],
          },
          {
             path: "/component/table-demo",
            name: "component.table",
            meta: {
              title: "Table 表格",
              icon: "el-icon-histogram",
              type: "menu",
            },
            children: [
              {
                path: "/component/table",
                name: "component.data.table",
                meta: {
                  title: "ZyTable",
                  type: "menu",
                },
                component: "component/table/index",
                children: [],
              },
            ],
          },
        ],
      },
      {
        path: "/other",
        name: "other",
        meta: {
          title: "其他",
          icon: "el-icon-more",
          type: "menu",
        },
        children: [
          {
            path: "/other/directive",
            name: "directive",
            meta: {
              title: "指令",
              icon: "el-icon-price-tag",
              type: "menu",
            },
            component: "other/directive",
            children: [],
          },
          {
            path: "/link",
            name: "link",
            meta: {
              title: "外部链接",
              icon: "el-icon-link",
              type: "menu",
            },
            children: [
              {
                path: "https://baidu.com",
                name: "百度",
                meta: {
                  title: "百度",
                  type: "link",
                },
              },
              {
                path: "https://www.google.cn",
                name: "谷歌",
                meta: {
                  title: "谷歌",
                  type: "link",
                },
              },
            ],
          },
          {
            path: "/iframe",
            name: "iframe",
            meta: {
              title: "Iframe",
              icon: "el-icon-position",
              type: "menu",
            },
            children: [
              {
                path: "https://v3.cn.vuejs.org",
                name: "vue3",
                meta: {
                  title: "Vue 3",
                  type: "iframe",
                },
              },
            ],
          },
        ],
      },
    ],
    permissions: [
      "list.add",
      "list.edit",
      "list.delete",
      "user.add",
      "user.edit",
      "user.delete",
    ],
  }),
];

export default MockApi;
