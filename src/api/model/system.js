import config from "@/config";
import http from "@/utils/request";

export default {
  menu: {
    myMenus: {
      method: 'get',
      url: `${config.API_URL}/system/menu/my`,
      name: "获取我的菜单",
      get: async function() {
        return await http.get(this.url);
      },
    },
  },
};