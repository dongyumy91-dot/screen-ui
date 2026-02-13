import components from "@/locales/lang/zh-cn/components";
import validation from "@/locales/lang/zh-cn/validation";
import message from "@/locales/lang/zh-cn/message";
import page from "@/locales/lang/zh-cn/page";

export default {
	app: {
		title: import.meta.env.VITE_APP_NAME || 'CMCC',
	},
	validation,
	message,
	
	...components,
	...page
}
