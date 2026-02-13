import StyleConfig from "@/config/style";

let apiUrl = "";
if (
  import.meta.env.VITE_PROD_MOCK === "true" ||
  import.meta.env.VITE_LOCAL_MOCK === "true"
) {
  apiUrl = "mock";
} else if (import.meta.env.VITE_PROXY_OPEN === "true") {
  apiUrl = import.meta.env.VITE_PROXY_PREFIX;
}

const DEFAULT_CONFIG = {
  APP_DEV: process.env.NODE_ENV === "production",
  // 项目名称
  APP_NAME: import.meta.env.VITE_APP_NAME || "CMCC",

  APP_PREFIX: "zy",

  //首页地址
  DASHBOARD_URL: "/screensaver",

  // 请求地址
  API_URL: `/${apiUrl}`,

  //请求超时
  TIMEOUT: 10000,

  //语言
  LANG: "zh-cn",

  //TokenName
  TOKEN_NAME: "Authorization",

  //Token前缀，注意最后有个空格，如不需要需设置空字符串
  TOKEN_PREFIX: "Bearer ",

  //追加其他头
  HEADERS: {},

  //请求是否开启缓存
  REQUEST_CACHE: false,

  //是否加密localStorage, 为空不加密，可填写AES(模式ECB,移位Pkcs7)加密
  LS_ENCRYPTION: "",

  //localStorageAES加密秘钥，位数建议填写8的倍数
  LS_ENCRYPTION_key: "H4XGL1EK0IFZNKJA",

  // 样式控制
  STYLE_OPTION: StyleConfig,
};

// 如果生产模式，就合并动态的APP_CONFIG
// public/config.js
if (process.env.NODE_ENV === "production") {
  Object.assign(DEFAULT_CONFIG, APP_CONFIG);
}

export default DEFAULT_CONFIG;
