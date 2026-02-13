import config from "@/config"
import http from "@/utils/request"

export default {
	token: {
		method: 'post',
		url: `${config.API_URL}/system/login`,
		name: "登录获取TOKEN",
		post: async function(param={}){
			return await http.post(this.url, param);
		}
	}
}
