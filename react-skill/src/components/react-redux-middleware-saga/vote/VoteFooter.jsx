import { connect } from 'react-redux';

import action from '../store/actions/index.js';

function VoteBody(props) {
  const { userInfo, support, asyncSupport, oppose, asyncOppose, info: changeName } = props;
  console.log('props: ', props);
  return (
    <>
      <div>
        <button onClick={oppose}>反对</button>
        <button onClick={asyncOppose}>异步反对</button>
        <button onClick={support}>赞成</button>
        <button onClick={asyncSupport}>异步赞成</button>
        <button onClick={() => changeName({ name: userInfo.name ? userInfo.name + '!!' : '前端程序员' })}>
          设置用户信息：{userInfo.name}
        </button>
      </div>
    </>
  );
}

export default connect(state => ({ userInfo: state.user.userInfo }), { ...action.vote, info: action.user.info })(
  VoteBody,
);
