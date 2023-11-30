
import {lazy} from './RouterView'

// 二级路由表
const routes = [
  {
    path: "/user",
    exact: true,
    redirect: "/user/xm",
  },
  {
    path: "/user/xm",
    exact: true,
    component: lazy(() =>
      import(/* webpackChunkName:"UserChild" */ "./routes/user/Xm")
    ),
    meta: {
      title: "小明",
    },
  },
  {
    path: "/user/xy",
    exact: true,
    component: lazy(() =>
      import(/* webpackChunkName:"UserChild" */ "./routes/user/Xy")
    ),
    meta: {
      title: "小杨",
    },
  },
];

export default routes;
