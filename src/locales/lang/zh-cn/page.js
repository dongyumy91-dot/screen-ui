export default {
	login: {
		describe: '基于Vue3 + Element-Plus 的中后台前端解决方案。',
		form: {
			username: {placeholder:'用户名:admin',},
			password: {placeholder:'密码: 123456',},
			automatic: '自动登录',
			reset_password: '忘记密码?',
			login_button: '登 录',
		},
		formRules: {
			username: {required:'登录用户名不能为空',},
			password: {required:'登录密码不能为空',},
		},
	},
	dashboard: {
		top_alert: "当前仅是基础版，按需自行扩展"
	},
	usercenter: {
		header_menu:{
			uc: '帐号信息',
			out_login: '退出登录',
		},
		AsideMenu: {
			basics: '基础设置',
			data: '数据管理',
		},
		menu: {
			info: '账号信息',
			info_alias: '账号信息',
			info_from: {
				portrait: '头像',
				portrait_upload_tips: '点击头像上传',
				account: '账号',
				account_tips: '账号信息用于登录，系统不允许修改',
				compellation: '姓名',
			},
			settings: '个性化',
			password: '密码',
			password_alias: '修改密码',
			password_tips: '密码更新成功后，您将被重定向到登录页面，您可以使用新密码重新登录。',
			password_from: {
				login_pass: '当前密码',
				login_pass_tips: '必须提供当前登录用户密码才能进行更',
				new_pass: '新密码',
				new_pass_tips: '请输入包含英文、数字的8位以上密码',
				new_pass_confirm: '确认新密码',
			},
			logs: '操作日志',
			logs_alias: '近7天操作记录',
		},
	},
}
