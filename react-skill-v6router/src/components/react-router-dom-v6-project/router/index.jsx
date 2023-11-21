import { Suspense } from 'react';

import { Routes, Route, useLocation, useNavigate, useSearchParams, useParams } from 'react-router-dom';
import routes from './routes';

// 统一渲染组件： 在这里可以做一些事情  权限校验、登录校验   传递属性
const Element = function (props) {
  const { component: Component } = props;

  // 把路由信息基于参数传递进去 只要是基于Route匹配的组件都可以获取路由信息
  const navigate = useNavigate(),
    location = useLocation(),
    params = useParams(),
    [usp] = useSearchParams();

  return <Component navigate={navigate} location={location} params={params} usp={usp} />;
};

// 递归创建Route
function createRoute(routes) {
  return (
    <>
      {routes.map((item, index) => {
        const { path, children = [] } = item;
        return (
          <Route key={index} path={path} element={<Element {...item} />}>
            {Array.isArray(children) ? createRoute(children) : null}
          </Route>
        );
      })}
    </>
  );
}

export default () => {
  return (
    <Suspense fallback={<>正在加載内容。。。</>}>
      <Routes>{createRoute(routes)}</Routes>
    </Suspense>
  );
};

export const withRouter = function (Com) {
  function Hoc(props) {
    const navigate = useNavigate(),
      location = useLocation(),
      params = useParams(),
      [usp] = useSearchParams();

    const routerProps = {
      navigate,
      location,
      params,
      usp,
    };
    return <Com {...routerProps} {...props} />;
  }
  Hoc.dispalyName = Com.dispalyName || 'WithRouter';

  return Hoc;
  //   return props => {
  //     const navigate = useNavigate(),
  //       location = useLocation(),
  //       params = useParams(),
  //       [usp] = useSearchParams();

  //     const routerProps = {
  //       navigate,
  //       location,
  //       params,
  //       usp,
  //     };
  //     return <Com {...routerProps} {...props} />;
  //   };
};
