/**
 * @description 注册全局指令
 */
import Tools from "@/utils/tools";

// 动态引入全局注册指令
const directivesList = Tools.getAutoImportList(
  import.meta.glob("@/directives/*.js", { import: "default", eager: true }),
  "directives",
  "js"
);

export default function directives(app) {
  //统一注册全局指令
  for (let directiveName in directivesList) {
    app.directive(directiveName, directivesList[directiveName]);
  }
}
