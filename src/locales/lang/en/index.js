import components from "@/locales/lang/en/components";
import validation from "@/locales/lang/en/validation";
import message from "@/locales/lang/en/message";
import page from "@/locales/lang/en/page";

export default {
	app: {
		title: import.meta.env.VITE_APP_NAME || 'CMCC',
	},
	validation,
	message,
	
	...components,
	...page
}
