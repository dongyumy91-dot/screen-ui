/**
 * @description 自动import导入所有 api 模块
 */
import Tools from "@/utils/tools";

// 动态引入所有API接口模块
const apiModelList = Tools.getAutoImportList(
  import.meta.glob("@/api/model/*.js", { import: "default", eager: true }),
  "api/model",
  "js"
);

// 动态引入所有API响应转换器模块
const apiConverterModelList = Tools.getAutoImportList(
  import.meta.glob("@/api/converter/*.js", { import: "default", eager: true }),
  "api/converter",
  "js"
);

// 动态引入相关文件
export default {
  modules: apiModelList,
  converter: apiConverterModelList,
};
