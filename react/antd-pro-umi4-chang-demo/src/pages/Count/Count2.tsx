import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { Button } from 'antd';
import React from 'react';
import { CountModel } from '@/models/counter';
import { useLocation, useSearchParams, useParams } from 'react-router-dom';


const Count: React.FC = () => {
  const { counter, add, minus } = useModel('counter', (ret: CountModel) => {
    return {
      add: ret.increment,
      minus: ret.decrement,
      counter: ret.counter,
    };
  });

  const state = useLocation().state;
  let [param] = useSearchParams();
  console.log('param: ', param.get('a'));
  return (
    <PageContainer>
      <div>
        <h2>Count2</h2>
        {counter}
        <Button onClick={add}>add by 1</Button>
        <Button onClick={minus}>minus by 1</Button>


        <div>页面跳转时候的参数：{JSON.stringify(state)}</div>
        <div>url上的路径参数a:{ param.get('a')}</div>
      </div>
    </PageContainer>
  );
};

export default Count;
