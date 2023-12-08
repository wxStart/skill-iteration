import IndexPage from "./routes/IndexPage";

import { lazy } from "./RouterView";

import userRoutes from "./userRoutes";

// 一级路由表
const routes = [
  {
    path: "/",
    exact: true,
    component: () => IndexPage,
    meta: {
      title: "首页",
    },
  },
  {
    path: "/demo",
    exact: true,
    component: lazy(
      () => import(/* webpackChunkName:"Demo" */ "./routes/Demo"),
      () => [import(/* webpackChunkName:"Demo" */ "./models/demo")]
    ),
    meta: {
      title: "Demo页",
    },
  },
  {
    path: "/user",
    component: lazy(() =>
      import(/* webpackChunkName:"User" */ "./routes/User")
    ),
    meta: {
      title: "用户页",
    },
    children: userRoutes,
  },
  {
    path: "*",
    redirect: "/",
  },
];

export default routes;
