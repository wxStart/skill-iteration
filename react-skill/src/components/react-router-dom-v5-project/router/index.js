import { Route, Switch, Redirect } from 'react-router-dom';

const RouterView = function RouterView(props) {
  const { routes } = props;

  return (
    <Switch>
      {routes.map((item, index) => {
        const { redirect, from, to, exact, path, component } = item;
        if (redirect) {
          return <Redirect key={index} />;
        }
        return <Route key={index} />;
      })}
    </Switch>
  );
};

export default RouterView;
