/**
 * @description 自动import导入所有 pinia 模块
 */
import Tools from "@/utils/tools";

// 动态引入所有状态模块
const storesModelList = Tools.getAutoImportList(
  import.meta.glob("@/stores/modules/*.js", { eager: true }),
  "stores/modules",
  "js"
);

export default storesModelList;
