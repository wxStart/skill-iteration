import { Route, Link, Switch, Redirect } from 'react-router-dom';
import A1 from './A-A1';
import A2 from './A-A2';
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
          <Switch>
            <Route path="/a/a1" component={A1} />
            <Route path="/a/a2" component={A2} />
            {/*  这里里面的 Redirect 仅对 /a/*** 生效  */}
            <Redirect to="/a/a1" />
          </Switch>
        </div>
      </div>
    </>
  );
}
