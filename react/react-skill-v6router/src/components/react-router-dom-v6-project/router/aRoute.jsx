import { Navigate } from 'react-router-dom';

import { lazy } from 'react';

// 二级路由
const aRoutes = [
  {
    path: '/a',
    component: () => <Navigate to="/a/a1" />,
  },

  {
    path: '/a/a1',
    name: 'a-a1',
    component: lazy(() => import('../views/A-A1')),
    meta: {},
  },
  {
    path: '/a/a2',
    name: 'a-a2',
    component: lazy(() => import('../views/A-A2')),
    meta: {},
  },
];

export default aRoutes;
