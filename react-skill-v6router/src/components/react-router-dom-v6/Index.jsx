import { HashRouter, Link, Routes, Route, Navigate } from 'react-router-dom';

import A from './views/A';
import B from './views/B';
import C from './views/C';
import A1 from './views/A-A1';
import A2 from './views/A-A2';

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
        <Routes>
          {/**
           1. 所有的匹配规则放在Routes中
           2. 每条匹配规则还是基于Route
              2.1 路由匹配成功，不在基于component/render 控制渲染组件 而是基于 element， 语法格式<Component />
              2.2 不在需要Switch，默认就是一个匹配成功就不在匹配下面的了
              2.3 不需要exact ，默认每一个都是精准匹配
           3. 原有的<Redirect  > 操作被 <Route path="/" element={<Navigate to="/a" />}></Route>代替
              3.1 遇到Navigate组件就会跳转
           4. 要求所有的路由（二级或者多级路由），不在分散到各个组件中编写，而是统一写在一起进行处理；

           */}
          <Route path="/" element={<Navigate to="/a" />}></Route>
          <Route path="/a" element={<A />}>
            {/*
            V6版本中，要求所有的路由（二级或者多级路由），不在分散到各个组件中编写，而是统一写在一起进行处理；
            此处的示例：二级路由会在A组件中定义的 <Outlet /> 组件中渲染
            */}
            <Route path="/a" element={<Navigate to="/a/a1" />}></Route>
            <Route path="/a/a1" element={<A1 />}></Route>
            <Route path="/a/a2" element={<A2 />}></Route>
          </Route>
          <Route path="/b" element={<B />} exact />
          <Route path="/c/:id?/:name?" element={<C />} />
          {/* 所有的都不匹配跳转/a */}
          <Route path="*" element={<Navigate to="/a" />}></Route>
        </Routes>
      </div>
    </HashRouter>
  );
}
