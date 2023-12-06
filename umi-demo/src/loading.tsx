/** 路由懒加载中，动态导入组件的js  在导入加载之前的Loading效果 */
import { Spin } from 'antd';
export default () => {
  return (
    <div>
      <Spin size="large"  tip="Loading" />
    </div>
  );
};
