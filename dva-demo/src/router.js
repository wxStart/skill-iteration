import React from "react";
import { Router, Route, Switch, Redirect, Link } from "dva/router";
import IndexPage from "./routes/IndexPage";
import Demo from "./routes/Demo";
import User from "./routes/User";
/**配置antd */
import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import "./assets/css/index.css";

/**rem */
import "lib-flexible"; // 设置html的 font-size  宽度除10

function RouterConfig({ history, app }) {
  /**
   * history: 包含路由跳转方法的history对象
   * app: 基于dva创建的应用
   */
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
          <Switch>
            <Route path="/" exact component={IndexPage} />
            <Route path="/demo" exact component={Demo} />
            <Route path="/user" component={User} />
            <Redirect to="/"></Redirect>
          </Switch>
        </div>
      </Router>
    </ConfigProvider>
  );
}

export default RouterConfig;
