import sysConfig from "@/config"

//系统路由
const routes = [
	{
		name: "layout",
		path: "/",
		component: () => import(/* webpackChunkName: "layout" */ '@/layout/index.vue'),
		redirect: sysConfig.DASHBOARD_URL || '/screensaver',
		children: []
	},
	{
		name: 'login',
		path: "/login",
		component: () => import(/* webpackChunkName: "login" */ '@/pages/login/index.vue'),
		meta: {
			title: "登录"
		}
	},
	{
		name: 'reset_password',
		path: "/reset_password",
		component: () => import(/* webpackChunkName: "resetPassword" */ '@/pages/login/resetPassword.vue'),
		meta: {
			title: "重置密码"
		}
	}
]

export default routes;