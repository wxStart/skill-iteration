import type { App, VueElement } from "@vue/runtime-dom";
// 全局样式
import "./style.ts";

// 全局组件
import * as globalCom from "./global-component.ts";

// 路由
import router from "./router.ts";

// ElementPlus
import ElementPlus from "./element-plus.ts";

export default (app: App): any => {
  // 注册全局组件
  Object.keys(globalCom).forEach((element: string): undefined => {
    let vueELe: VueElement = (globalCom as any)[element];
    app.component(element, vueELe);
  });

  // 注册路由
  app.use(router);
  // 注册ElementPlus
  app.use(ElementPlus);
};
