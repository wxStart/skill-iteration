import { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

const RouterView = function RouterView(props) {
  const { routes } = props;

  return (
    <Switch>
      {routes.map((item, index) => {
        const { redirect, from, to, exact, path, component: Component } = item;
        let config = {};

        if (redirect) {
          config = { to };
          if (from) {
            config.from = from;
          }
          if (exact) {
            config.exact = true;
          }
          return <Redirect key={index} {...config} />;
        }

        config = {
          path: path,
        };
        if (exact) {
          config.exact = true;
        }
        return (
          <Route
            key={index}
            {...config}
            render={props => {
              console.log('props: ', props);
              // props中是路由传递过来的参数  history  location  match
              // 统一基于render 进行处理  这样就可以进行其他的处理
              return (
                <Suspense fallback={'正在加载组件。。。'}>
                  <Component {...props} />
                </Suspense>
              );
            }}
          />
        );
      })}
    </Switch>
  );
};

export default RouterView;
