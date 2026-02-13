import path from "node:path";
import { fileURLToPath, URL } from "node:url";

import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { viteMockServe } from "vite-plugin-mock";

function AutoMockApiImport(moduleList) {
  let name = "",
    list = {};
  let fileReg = new RegExp(`\\.\\/service\\/mock\\/|.js`, "g");
  Object.keys(moduleList).forEach((fileName) => {
    name = fileName.replace(fileReg, "");
    list[name] = moduleList[fileName];
  });
  return list;
}

// @link https://vitejs.dev/config/
export default ({ mode }) => {
  const envConfig = loadEnv(process.env.NODE_ENV || mode, "./");

  // 配置vite Server服务
  const server = {
    host: envConfig.VITE_PROXY_SERVER_HOST,
    port: envConfig.VITE_PROXY_PORT,
  };
  if (envConfig.VITE_PROXY_OPEN === "true" && envConfig.VITE_LOCAL_MOCK === "false") {
    server["proxy"] = {
      ["^/" + envConfig.VITE_PROXY_PREFIX]: {
        target: envConfig.VITE_PROXY_TARGET,
        changeOrigin: true,
        rewrite: (path) => {
          let regExpStr = "/" + envConfig.VITE_PROXY_PREFIX;
          let regExp = new RegExp(regExpStr);
          return path.replace(regExp, "");
        },
      },
    };
  }

  // 配置Mock Server服务
  const mockServer = {
    supportTs: false,
    // 是否在控制台显示请求日志
    logger: false,
    // mock文件位置
    mockPath: "./service/mock/api",
    // 本地是否启用 mock 功能
    localEnabled: process.env.MOCK || envConfig.VITE_LOCAL_MOCK || false,
    // 打包是否启用 mock 功能
    prodEnabled: process.env.MOCK || envConfig.VITE_PROD_MOCK || false,
    //  控制关闭mock的时候不让mock打包到最终代码内
    injectCode: `
    import { setupProdMockServer } from '@mock/mockServer';
    setupProdMockServer();
    `,
  };

  return defineConfig({
    // build编译后不生成资源MAP文件
    productionSourceMap: false,
    server,
    // 配置vite plugins插件
    // @link https://github.com/vbenjs/vite-plugin-mock/blob/HEAD/README.zh_CN.md
    plugins: [vue(), viteMockServe(mockServer)],
    resolve: {
      alias: {
        "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js",
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "@mock": fileURLToPath(new URL("./service/mock", import.meta.url)),
      },
      extensions: [".js", ".vue"],
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/styles/mixin.scss" as *;`,
        },
      },
    },
  });
};
