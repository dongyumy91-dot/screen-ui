/**
 * @description 挂载全局对象
 */
import Tools from "@/utils/tools";
import { permission, rolePermission } from "@/utils/permission";
import Config from "@/config";
import * as Api from "@/api";
import APIS from "@/bootstrap/service/apis";
import * as Stores from "@/stores";

export default function properties(app) {
  app.config.globalProperties.$CONFIG = Config;
  app.config.globalProperties.$TOOLS = Tools;
  app.config.globalProperties.$STORES = Stores.default;
  app.config.globalProperties.$API = Api.default.modules;
  app.config.globalProperties.$APIS = APIS;
  app.config.globalProperties.$API_CONVERTER = Api.default.converter;

  // 权限
  app.config.globalProperties.$AUTH = permission;
  app.config.globalProperties.$ROLE = rolePermission;
}
