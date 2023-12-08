import { Link, Outlet } from 'react-router-dom';
export default function Page() {
  return (
    <>
      <div>A页面</div>
      <div style={{ display: 'flex' }}>
        <div style={{ marginRight: '20px' }}>
          <Link to="/a/a1">A1 二级路由</Link>
          <br />
          <Link to="/a/a2">A2 二级路由</Link>
        </div>
        <div>
          {/* Outlet: 路由容器，用来渲染二级/多级路由匹配到的内容 */}
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
}
