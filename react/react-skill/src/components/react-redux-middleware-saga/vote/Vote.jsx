import { connect } from 'react-redux';

import VoteBody from './VoteBody';
import VoteFooter from './VoteFooter';
function Vote(props) {
  const state = props;
  return (
    <>
      <h3> sage</h3>
      <div>你觉得35岁会失业么？</div>
      <div>参与人数：{state.supNum + state.oppNum}</div>
      <VoteBody></VoteBody>
      <VoteFooter></VoteFooter>
    </>
  );
}

export default connect(state => state.vote)(Vote);
