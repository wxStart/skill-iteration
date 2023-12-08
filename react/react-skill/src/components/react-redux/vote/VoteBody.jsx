// import { connect } from 'react-redux';
import { connect } from '../myReactRedux';

function VoteBody(props) {
  const state = props;
  return (
    <>
      <div>赞成人数：{state.supNum}</div>
      <div>反对人数：{state.oppNum}</div>
    </>
  );
}
export default connect(state => ({ ...state.vote, userInfo: state.user.userInfo }))(VoteBody);
