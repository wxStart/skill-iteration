import { history, useNavigate } from 'umi';
export default function Xm() {
  const navigate = useNavigate();
  function handle() {
    navigate('/user/xm', {
      state: { a: 1, b: 23 },
    });
  }
  function handle4() {
    history.push(
      {
        pathname: '/user/xm',
      },
      { a: 1, b: 23 },
    );
  }

  function handle2() {
    navigate({
      pathname: '/user/xm',
      search: 'a=12&b=234&c=1234',
    });
  }

  function handle3() {
    history.push({
      pathname: '/user/xm',
      //   search: 'a=121',
      // 只适合 historyWithQuery 这种方式
      query: {
        a: '12',
        b: '123',
      },
    });
  }
  return (
    <div>
      小杨的个人介绍
      <button onClick={handle}>去找小明(state传参) </button>
      <button onClick={handle4}> history 去找小明(state传参) </button>
      <button onClick={handle2}>去找小明(search传参) </button>
      <button onClick={handle3}>history 去找小明(search传参) </button>
    </div>
  );
}
