import { useSelector } from 'react-redux';

// import {} from '../store/features/voteSlice';

import VoteBody from './VoteBody';
import VoteFooter from './VoteFooter';
export default function Vote() {
  // 获取公共状态
  const { oppNum, supNum } = useSelector(state => state.vote);

  return (
    <>
      <div>你觉得35岁会失业么？</div>
      <div>参与人数：{supNum + oppNum}</div>
      <VoteBody></VoteBody>
      <VoteFooter></VoteFooter>
    </>
  );
}
