import sysConfig from "@/config"
import tool from '@/utils/tools'
import { createI18n } from 'vue-i18n'
import el_zh_cn from 'element-plus/es/locale/lang/zh-cn'
import el_en from 'element-plus/es/locale/lang/en'

import zh_cn from './lang/zh-cn'
import en from './lang/en'

const messages = {
	'zh-cn': {
		label: '简体中文',
		el: el_zh_cn,
		...zh_cn
	},
	'en': {
		label: 'English',
		el: el_en,
		...en
	}
}

const i18n = createI18n({
	locale: tool.data.get("APP_LANG") || sysConfig.LANG,
	fallbackLocale: 'zh-cn',
	globalInjection: true,
	messages,
})

export default i18n;
