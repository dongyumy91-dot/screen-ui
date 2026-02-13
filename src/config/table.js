const DEFAULT_CONFIG = {
    // el-table属性配置
    basics: {
        // Table 的尺寸: large / default /small
        size: 'small',
        // 是否为斑马纹 table: true / false
        stripe: true,
    },

    // 组件布局配置
    layoutStyle: {
        headerBox: true,
        bottomBox: true,
    },

    // 表格展示规格（大小）
    density: {
        default: 'default',
        list: [
            {key:'large', label:'宽松', locales: 'large'},
            {key:'default', label:'默认', locales: 'default'},
            {key:'small', label:'紧凑', locales: 'small'},
        ],
    },

    page: {
        // 只有一页时是否隐藏: true / false
        hideOnSinglePage: false,

        // 当前页数的初始值
        defaultCurrentPage: 1,
        // 组件布局，子组件名用逗号分隔: prev, pager, next, jumper, ->, total
        layout: 'total, sizes, prev, pager, next',
        // 每页显示个数选择器的选项设置
        pageSizes: [10, 20, 50, 100],
        // 每页显示条目数的初始值
        defaultPageSize: 20,
    },
};

export default DEFAULT_CONFIG
