import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { Button } from 'antd';
import React from 'react';
import { CountModel } from '@/models/counter';
import { useNavigate } from 'react-router-dom';

const Count: React.FC = () => {
  const { counter, add, minus } = useModel('counter', (ret: CountModel) => {
    return {
      add: ret.increment,
      minus: ret.decrement,
      counter: ret.counter,
    };
  });

  const navigate = useNavigate();

  const onJump = () => {
    // });
    navigate(
      {
        pathname: '/count2',
        search: '?a=123&b456',
      },
      { state: { a: 1234, b: 45678 } },
    );
  };

  return (
    <PageContainer>
      <div>
        <h2>Count1</h2>
        {counter}
        <Button onClick={add}>add by 1</Button>
        <Button onClick={minus}>minus by 1</Button>
        <Button onClick={onJump}>去数据共享的页面 </Button>
      </div>
    </PageContainer>
  );
};

export default Count;
