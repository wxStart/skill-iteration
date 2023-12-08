export default function Page(props) {
  const { location, params, usp: param } = props;

  const state = location.state;
  console.log('param: ', param.get('a'));

  return (
    <>
      <div>C页面</div>
      <div>B页面跳转时候的参数：{JSON.stringify(state)}</div>
      <div>url上的路径参数:{JSON.stringify(params)}</div>
    </>
  );
}
