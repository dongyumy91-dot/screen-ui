/**
 * @deprecated Page Language Lines
 */
export default {
	login: {
		describe: 'Vue3 + ElementPlus based front-end solutions in the background.',
		form: {
			username: {placeholder:'Username',},
			password: {placeholder:'Password',},
			automatic: 'Remember me',
			reset_password: 'Forget Password ?',
			login_button: 'Sign In',
		},
		formRules: {
			username: {required:'The Username cannot be empty',},
			password: {required:'The password cannot be empty',},
		},
	},
	dashboard: {
		top_alert: "Currently only the basic version, as needed to expand by itself"
	},
	usercenter: {
		header_menu:{
			uc: 'Account Info',
			out_login: 'Log Out',
		},
		AsideMenu: {
			basics: 'Basic',
			data: 'Data',
		},
		menu: {
			info: 'Account',
			info_alias: 'Account Info',
			info_from: {
				portrait: 'Portrait',
				portrait_upload_tips: 'Click profile picture to upload',
				account: 'Account',
				account_tips: 'The account information is used for login and cannot be modified',
				compellation: 'Full Name',
			},
			settings: 'Personalized',
			password: 'Password',
			password_alias: 'Update Password',
			password_tips: 'After the password is successfully updated, you will be redirected to the login page where you can log in again with the new password.',
			password_from: {
				login_pass: 'Password',
				login_pass_tips: 'You must provide the password of the current logged-in user to perform the modification',
				new_pass: 'New Password',
				new_pass_tips: 'Please enter a password with more than 8 digits and English',
				new_pass_confirm: 'Confirm Pass',
			},
			logs: 'Logs',
			logs_alias: 'Operation records of the last 7 days',
		},
	},
}
