import { NavLink } from "dva/router";

import routes from "../userRoutes";
import RouterView from '../RouterView'



export default function User() {
  return (
    <div>
      <h1>个人信心</h1>
      <div>
        <NavLink to="/user/xm">小明同学</NavLink>
        <NavLink to="/user/xy">小杨同学</NavLink>
      </div>
      <div>
        <h4> 下方二级路由的内容 </h4>
        <hr />
        <RouterView routes={routes} ></RouterView>
      </div>
    </div>
  );
}
