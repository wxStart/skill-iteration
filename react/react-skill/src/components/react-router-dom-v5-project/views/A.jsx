import { Link } from 'react-router-dom';
import routes from '../router/aRoutes';
import RouterView from '../router/index';

export default function Page() {
  return (
    <>
      <div>A页面</div>
      <div style={{ display: 'flex' }}>
        <div style={{ marginRight: '20px' }}>
          <Link to="/a/a1">A1</Link>
          <br />
          <Link to="/a/a2">A2</Link>
        </div>
        <div>
          <RouterView routes={routes}></RouterView>
          {/* <Switch>
            <Route path="/a/a1" component={A1} />
            <Route path="/a/a2" component={A2} />
            <Redirect to="/a/a1" />
          </Switch> */}
        </div>
      </div>
    </>
  );
}
