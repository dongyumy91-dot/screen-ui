// 引入全局样式
import "element-plus/dist/index.css";
import "@/styles/global.scss";

import '@/bootstrap/service/jsPrototype';
import ExceptionsHandler from "@/bootstrap/exceptions/handler";
import Properties from "@/bootstrap/properties";
import Library from "@/bootstrap/library";
import Components from "@/bootstrap/components";
import Directives from "@/bootstrap/directives";

export default {
  install(app) {
    // 挂载全局对象
    Properties(app);

    // 挂载全局扩展库
    Library(app);

    // 注册全局组件
    Components(app);

    // 注册全局指令
    Directives(app);

    //全局代码错误捕捉
    app.config.errorHandler = ExceptionsHandler;
  },
};
