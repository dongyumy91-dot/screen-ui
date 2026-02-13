// 静态路由配置
// 书写格式与动态路由格式一致，全部经由框架统一转换
// 比较动态路由在meta中多加入了role角色权限，为数组类型。一个菜单是否有权限显示，取决于它以及后代菜单是否有权限。
// routes 显示在左侧菜单中的路由(显示顺序在动态路由之前)
// 示例如下

// const routes = [
// 	{
// 		name: "demo",
// 		path: "/demo",
// 		meta: {
// 			icon: "el-icon-eleme-filled",
// 			title: "演示",
// 			role: ["SA"]
// 		},
// 		children: [{
// 			name: "demopage",
// 			path: "/demopage",
// 			component: "test/autocode/index",
// 			meta: {
// 				icon: "el-icon-menu",
// 				title: "演示页面",
// 				role: ["SA"]
// 			}
// 		}]
// 	}
// ]

const routes = [
  // 屏保
  {
    name: "Screensaver",
    path: "/screensaver",
    meta: { title: "福州交付融合支撑中心" },
    component: "home/index",
  },
  // 一级屏
  {
    name: "PrimaryScreen",
    path: "/primaryscreen",
    meta: {
      title: "福州交付融合支撑中心",
      titleLinkTo: '/screensaver', // 跳转至屏保
    },
    component: "home/primary-screen",
  },
  // 二级屏 - 网格
  {
    name: "GridSched",
    path: "/gridsched",
    meta: {
      title: "网格融合支撑",
      titleLinkTo: '/primaryscreen', // 跳转至一级屏
    },
    component: "home/grid-sched",
  },
  // 二级屏 - 家庭
  {
    name: "HomeCustomer",
    path: "/homecustomer",
    meta: {
      title: "家庭市场支撑",
      titleLinkTo: '/primaryscreen', // 跳转至一级屏
    },
    component: "home/home-customer",
  },
  // 二级屏 - 商客
  {
    name: "BusinessCustomer",
    path: "/businesscustomer",
    meta: {
      title: "商客市场支撑",
      titleLinkTo: '/primaryscreen', // 跳转至一级屏
    },
    component: "home/business-customer",
  },
  // 二级屏 - 战客
  {
    name: "BattleCustomer",
    path: "/battlecustomer",
    meta: {
      title: "商客市场支撑",
      titleLinkTo: '/primaryscreen', // 跳转至一级屏
    },
    component: "home/battle-customer",
  },
  // 二级屏 - 国际
  {
    name: "International",
    path: "/international",
    meta: {
      title: "国际市场支撑",
      titleLinkTo: '/primaryscreen', // 跳转至一级屏
    },
    component: "home/international",
  },
];

export default routes;
