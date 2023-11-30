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
  extraEnhancers:[]
});

// 2. Plugins
// app.use({});

// 3. Model  
// app.model(require('./models/example').default);

// 4. Router
// app.router(require('./router').default);
app.router(RouterConfig);

// 5. Start
app.start("#root");
