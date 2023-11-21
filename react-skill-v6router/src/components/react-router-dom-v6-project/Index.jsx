import { HashRouter, Link } from 'react-router-dom';

import RouterView from './router/index';

export default function RouterDom() {
  return (
    <HashRouter>
      <div>
        <Link to="/a">A</Link>
        ----------路由分割-------------
        <Link to="/b">B</Link>
        ----------路由分割-------------
        <Link to="/c">C</Link>
      </div>
      <div>
        <RouterView></RouterView>
      </div>
    </HashRouter>
  );
}

// 下方是useRoutes创建路由表
// import { HashRouter, Link, useRoutes, Navigate } from 'react-router-dom';

// import A from './views/A';
// import A1 from './views/A-A1';
// import A2 from './views/A-A2';
// const RouterView = function () {
//   const element = useRoutes([
//     { path: '/', element: <Navigate to="/a" /> },
//     {
//       path: '/a',
//       element: <A />,
//       children: [
//         {
//           path: 'a1',
//           element: <A1 />,
//         },
//         {
//           path: 'a2',
//           element: <A2 />,
//         },
//       ],
//     },
//   ]);
//   return element;
// };

// export default function RouterDom() {
//   return (
//     <HashRouter>
//       <div>
//         <Link to="/a">A</Link>
//         ----------路由分割-------------
//         <Link to="/b">B</Link>
//         ----------路由分割-------------
//         <Link to="/c">C</Link>
//       </div>
//       <div>
//         <RouterView></RouterView>
//       </div>
//     </HashRouter>
//   );
// }
