import dva from "dva";
import "./index.css";

import RouterConfig from "./router";
// const

import { createHashHistory } from "history";

// 1. Initialize
const app = dva({
  // 指定路由的模式  默认是hash
  history: createHashHistory(),
  // 扩展其他中间件： 例如redux-logger
  extraEnhancers: [],
  
  // initialState: { // model板块赋值初始状态，优先级高，一般要保证模块不是懒加载的demo模块不是懒加载
  //   demo: {  
  //     num: 10,
  //   },
  // },
});

window.dvaApp = app;
console.log("app: ", app);

// 2. Plugins
// app.use({});

// 3. Model
app.model(require("./models/init-common").default);
app.model(require("./models/init-user").default);

// 4. Router
// app.router(require('./router').default);
app.router(RouterConfig);

// 5. Start
app.start("#root");
