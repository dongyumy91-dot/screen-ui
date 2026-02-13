/**
 * @description 挂载全局扩展库
 */
import { createPinia } from 'pinia'
import i18n from '@/locales'
import router from '@/router'
import ElementPlus from '@/bootstrap/element'

export default function library(app)
{
    app.use(createPinia())
    app.use(router)
    app.use(ElementPlus)
    app.use(i18n)
}