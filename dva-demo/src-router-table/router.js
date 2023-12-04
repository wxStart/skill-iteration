import React from "react";
import { Router, Link } from "dva/router";

import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import "./assets/css/index.css";

import "lib-flexible";

import RouterView from "./RouterView";
import routes from "./routerRoutes";

function RouterConfig({ history, app }) {
  return (
    <ConfigProvider locale={zhCN}>
      <Router history={history}>
        <div>
          <div>
            <Link to="/">主页</Link>-------
            <Link to="/demo">demo</Link>------
            <Link to="/user">user</Link>
          </div>
          <hr />
          <RouterView routes={routes} ></RouterView>
        </div>
      </Router>
    </ConfigProvider>
  );
}

export default RouterConfig;
