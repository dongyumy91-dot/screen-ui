import sysConfig from '@/config'
import CryptoJS from '@/utils/crypto'
/**
 * @description 本地数据管理
*/
const LocalStorage = {
	set(key, data, datetime = 0) {
		//加密
		if(sysConfig.LS_ENCRYPTION == "AES"){
			data = CryptoJS.AES.encrypt(JSON.stringify(data), sysConfig.LS_ENCRYPTION_key)
		}
        let cacheValue = {
            content: data,
            datetime: parseInt(datetime) === 0 ? 0 : new Date().getTime() + parseInt(datetime) * 1000
        }
        return localStorage.setItem(key, JSON.stringify(cacheValue))
	},
	get(key) {
        try {
            const value = JSON.parse(localStorage.getItem(key))
            if (value) {
                let nowTime = new Date().getTime()
                if (nowTime > value.datetime && value.datetime != 0) {
                    localStorage.removeItem(key)
                    return null;
                }
				//解密
				if(sysConfig.LS_ENCRYPTION == "AES"){
					value.content = JSON.parse(CryptoJS.AES.decrypt(value.content, sysConfig.LS_ENCRYPTION_key))
				}
                return value.content
            }
            return null
        } catch (err) {
            return null
        }
	},
	remove(key) {
		return localStorage.removeItem(key)
	},
	clear() {
		return localStorage.clear()
	}
};

export default LocalStorage;