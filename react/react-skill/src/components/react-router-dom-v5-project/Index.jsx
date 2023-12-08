import { HashRouter, Link } from 'react-router-dom';
import routes from './router/routes';
import RouterView from './router/index.jsx';

/***
 *  基于HashRouter 把所有组件包裹起来，开启哈希路由
 *     Route 和Link组件都要在 HashRouter 和 BrowserRouter中使用
 *     开启后，整个页面的地址，默认会设置一个 “#”
 *
 * Link 实现路由跳转和切换
 *    最后渲染结果依旧是a标签
 *    他可以根据路由模式，自动设置切换方式  是hash 还是browser 模式
 *
 * Switch 匹配到一个就不进行匹配了
 *
 */
/***
 *
 * 路径地址匹配规则
 *   用斜杠分割的部分进行匹配
 *
 *   页面地址   路由地址   非精准匹配     精准匹配(exact)
 *    /         /          true          true
 *    /         /login     false         false
 *    /login    /          true          false
 *    /a/b      /a         true          false
 *    /a/b      /a/b       true          true
 *    /a2/b     /a         false         false
 *
 *
 * 非精准匹配
 *  + 页面地址和路由地址一样，就是匹配到了（true）
 *  + 页面地中 包含一套完整的路由地址 就匹配到了（比如页面/login 就匹配到了 /）
 * 精准匹配
 *  + 两个地址一模一样才算完全匹配到
 */
export default function RouterDom() {
  return (
    <HashRouter>
      <h2>工程级别的v5 RouterDom</h2>
      <div>
        <Link to="/">A</Link>
        ----------路由分割-------------
        <Link to="/b">B</Link>
        ----------路由分割-------------
        <Link to="/b/c">C</Link>
      </div>
      {/* 路由容器：每次页面加载或者路由切换完毕，都会根据当前的哈希值匹配使用的组件 */}
      <div>
        {/* <Switch>
          <Redirect from="/" to="/a" exact />
          <Route path="/a" component={A} />
          <Route path="/b" component={B} exact />

          <Route
            path="/b/c"
            render={() => {
              // 不写component   写个render函数
              // 当路由匹配到的时候，执行此函数，函数的返回值就是要渲染的内容
              // 在此函数中，可以处理一些事情，例如 登录校验等
              console.log(222);
              let isLogin = true;
              if (isLogin) {
                return <C></C>;
              }
              return <Redirect to="/login" />;
            }}
          />
          <Redirect to="/b" />
        </Switch> */}
        <RouterView routes={routes} />
      </div>
    </HashRouter>
  );
}

