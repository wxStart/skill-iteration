import { Navigate } from 'react-router-dom';

import { lazy } from 'react';
import A from '../views/A';

// 二级路由
import aRoute from './aRoute';

// 一级路由
const routes = [
  {
    path: '/',
    component: () => <Navigate to="/a" />,
  },
  {
    path: '/a',
    name: 'a',
    component: A,
    meta: {},
    children: aRoute,
  },
  {
    path: '/b',
    name: 'b',
    component: lazy(() => import('../views/B')), // import(/*webpackChunkName："Common"  */ '../views/B')
    meta: {},
    children: [],
  },
  {
    path: '/c/:id?/:name?',
    name: 'c',
    component: lazy(() => import('../views/C')),
    meta: {},
    children: [],
  },
  {
    path: '*',
    component: () => <Navigate to="/a" />,
  },
];

export default routes;
