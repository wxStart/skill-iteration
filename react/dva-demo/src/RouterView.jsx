import { Route, Switch, Redirect } from "dva/router";

import dynamic from "dva/dynamic";
/**
    解决   window.dvaApp  直接执行时 undefined的
 */

// 手动封装 lazy函数 懒加载函数   
export const lazy = (component, models = () => []) => {
  return () =>
    dynamic({
      app: window.dvaApp,
      models: models,
      component: component,
    });
};

// 统一渲染组件  这里可以处理其他逻辑
function Element(props) {
  const { component, history, location, match } = props;
  const config = {
    history,
    location,
    match,
  };
  const Component = component();
  return <Component {...config} />;
}

// 类似view的 RouterView组件
export default function RouterView({ routes }) {
  return (
    <Switch>
      {routes.map((el, index) => {
        const { redirect, exact, path, meta } = el;

        let config = {};
        if (exact) {
          config.exact = true;
        }

        if (redirect) {
          return <Redirect key={index} from={path} to={redirect} {...config} />;
        }
        config.path = path;
        return (
          <Route
            key={index}
            {...config}
            render={(props) => {
              // 统一做一些处理
              if (meta && meta.title) {
                document.title = meta.title;
              }
              // 不直接 渲染指定组件，可以在Element里面做更复杂的操作
              return <Element {...props} {...el} />;
            }}
          />
        );
      })}
    </Switch>
  );
}
