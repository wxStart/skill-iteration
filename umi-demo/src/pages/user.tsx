import { NavLink,Outlet } from "umi";
export default function User() {
    return (
        <div> 
            <h1>user 测试页</h1>
            <nav>
                <NavLink to='/user/xm'>小明</NavLink>
                <NavLink to='/user/xy'>小杨</NavLink>
            </nav>
            <Outlet></Outlet>
        </div>
    );
  }
  