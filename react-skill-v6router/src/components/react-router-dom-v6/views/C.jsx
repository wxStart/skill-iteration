import { useLocation, useSearchParams, useParams } from 'react-router-dom';
export default function Page() {
  console.log(useLocation());

  const state = useLocation().state;
  let [param] = useSearchParams();
  console.log('param: ', param.get('a'));

  // const match = useMatche(); 还需要传路径，这里不写了 有问题 基本不用
  const params = useParams();
  return (
    <>
      <div>C页面</div>
      <div>B页面跳转时候的参数：{JSON.stringify(state)}</div>
      <div>url上的路径参数:{JSON.stringify(params)}</div>
    </>
  );
}
