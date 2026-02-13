import CryptoJS from 'crypto-js';

const Crypto = {
    //MD5加密
	MD5(data){
		return CryptoJS.MD5(data).toString()
	},
	//BASE64加解密
	BASE64: {
		encrypt(data){
			return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(data))
		},
		decrypt(cipher){
			return CryptoJS.enc.Base64.parse(cipher).toString(CryptoJS.enc.Utf8)
		}
	},
	//AES加解密
	AES: {
		encrypt(data, secretKey, config={}){
			if(secretKey.length % 8 != 0){
				console.warn("[SCUI error]: 秘钥长度需为8的倍数，否则解密将会失败。")
			}
			const result = CryptoJS.AES.encrypt(data, CryptoJS.enc.Utf8.parse(secretKey), {
				iv: CryptoJS.enc.Utf8.parse(config.iv || ""),
				mode: CryptoJS.mode[config.mode || "ECB"],
				padding: CryptoJS.pad[config.padding || "Pkcs7"]
			})
			return result.toString()
		},
		decrypt(cipher, secretKey, config={}){
			const result = CryptoJS.AES.decrypt(cipher, CryptoJS.enc.Utf8.parse(secretKey), {
				iv: CryptoJS.enc.Utf8.parse(config.iv || ""),
				mode: CryptoJS.mode[config.mode || "ECB"],
				padding: CryptoJS.pad[config.padding || "Pkcs7"]
			})
			return CryptoJS.enc.Utf8.stringify(result);
		}
	}
};

export default Crypto;