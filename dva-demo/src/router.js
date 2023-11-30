import React from "react";
import { Router, Route, Switch } from "dva/router";
import IndexPage from "./routes/IndexPage";

/**配置antd */
import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import './assets/css/index.css'

/**rem */
import 'lib-flexible';// 设置html的 font-size  宽度除10

function RouterConfig({ history }) {
  return (
    <ConfigProvider locale={zhCN}>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={IndexPage} />
        </Switch>
      </Router>
    </ConfigProvider>
  );
}

export default RouterConfig;
