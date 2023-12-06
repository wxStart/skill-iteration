import styles from '@/layouts/index.less';
import { Link, Outlet } from 'umi';

/**相当于spa页面的入口 */
export default function Layout() {
  return (
    <div className={styles.navs}>
      <ul>
        <li>
          <Link to="/">首页</Link>
        </li>
        <li>
          <Link to="/test">测试页</Link>
        </li>
        <li>
          <Link to="/test/100">测试页100</Link>
        </li>
        <li>
          <Link to="/user">个人中心</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
