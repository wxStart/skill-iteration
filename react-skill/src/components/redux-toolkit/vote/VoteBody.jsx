import { useSelector } from 'react-redux';
export default function VoteBody() {
  // 获取公共状态
  const state = useSelector(state => state.vote);

  return (
    <>
      <div>赞成人数：{state.supNum}</div>
      <div>反对人数：{state.oppNum}</div>
    </>
  );
}
