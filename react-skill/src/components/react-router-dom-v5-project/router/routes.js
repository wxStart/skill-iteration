/**
 * 配置路由表：数组  每一项就是每个需要配置的路由规则
 *
 *  redirect: ture 此配置是重定向
 *  from：来源地址
 *  to：重定向地址
 *  exact： 是否精准匹配
 *  path：匹配的路径
 *  component：渲染的组件
 *  name:'路由名称（命名路由）'
 *  mete： {} 路由元信息
 *  children：[]  子路由
 */

import A from '../views/A';
import B from '../views/B';
import C from '../views/C';

import aRoutes from './aRoutes';

// 一级路由
const routes = [
  {
    redirect: true,
    from: '/',
    to: '/a',
    exact: true,
  },
  {
    path: '/a',
    component: A,
    meta: {},
    children: aRoutes,
  },
  {
    path: '/b',
    component: B,
    exact: true,
    meta: {},
    children: [],
  },
  {
    path: '/b/c',
    component: C,
    meta: {},
    children: [],
  },
  {
    redirect: true,
    to: '/b',
  },
];

export default routes;
