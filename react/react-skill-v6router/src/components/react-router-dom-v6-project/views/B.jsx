export default function Page(props) {
  function handleClick() {
    props.navigate(
      {
        pathname: '/c',
        search: '?a=123&b456',
      },
      { state: { a: 1234, b: 45678 } },
    );
  }

  function handleClick2() {
    props.navigate('/c/1001/wx');
  }
  return (
    <>
      <div>B页面</div>
      <button onClick={handleClick}>跳转C页面并且传递参数（state传参和search传参）</button>
      <button onClick={handleClick2}>跳转C页面传递url上：id？和：name？</button>
    </>
  );
}
