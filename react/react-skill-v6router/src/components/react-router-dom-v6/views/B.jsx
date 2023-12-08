import { useLocation, useNavigate } from 'react-router-dom';
export default function Page() {
  console.log(useLocation());
  const navigate = useNavigate();

  function handleClick() {
    // navigate('/c', { replace: true });
    // navigate({
    //   pathname: '/c',
    //   search: '?a=123&b456',
    // });
    // navigate('/c', {
    //   state: { a: 123, b: 456 },
    // });
    navigate(
      {
        pathname: '/c',
        search: '?a=123&b456',
      },
      { state: { a: 1234, b: 45678 } },
    );
  }

  function handleClick2() {
    navigate('/c/1001/wx');
  }
  return (
    <>
      <div>B页面</div>
      <button onClick={handleClick}>跳转C页面并且传递参数（state传参和search传参）</button>
      <button onClick={handleClick2}>跳转C页面传递url上：id？和：name？</button>
    </>
  );
}
