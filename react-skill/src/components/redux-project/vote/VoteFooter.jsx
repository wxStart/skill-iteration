import { useContext } from 'react';

import StoreContext from '../StoreContext.js';
// import { VOTE_SUP, VOTE_OPP, USER_INFO } from '../store/action-types';
import action from '../store/actions/index.js';

export default function VoteBody() {
  const { store } = useContext(StoreContext);
  const userInfo = store.getState().user.userInfo;
  return (
    <>
      <div>
        <button
          onClick={() => {
            store.dispatch(action.vote.oppose());
          }}
        >
          反对
        </button>
        <button
          onClick={() => {
            store.dispatch(action.vote.support());
          }}
        >
          赞成
        </button>
        <button
          onClick={() => {
            store.dispatch({
              ...action.user.info(),
              payload: { name: userInfo.name ? userInfo.name + '!!' : '前端程序员' },
            });
          }}
        >
          设置用户信息：{userInfo.name}
        </button>
      </div>
    </>
  );
}
