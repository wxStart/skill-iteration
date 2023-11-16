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

import A1 from '../views/A-A1';
import A2 from '../views/A-A2';
// 二级路由A模块
const routes = [
  {
    path: '/a/a1',
    component: A1,
    meta: {},
    children: [],
  },
  {
    path: '/a/a2',
    component: A2,
    meta: {},
    children: [],
  },

  {
    redirect: true,
    to: '/a/a1',
  },
];

export default routes;
