import { useContext } from 'react';

import StoreContext from '../StoreContext.js';
import { VOTE_SUP, VOTE_OPP, USER_INFO } from '../store/action-types';

export default function VoteBody() {
  const { store } = useContext(StoreContext);
  const userInfo = store.getState().user.userInfo;
  return (
    <>
      <div>
        <button
          onClick={() => {
            store.dispatch({
              type: VOTE_OPP,
            });
          }}
        >
          反对
        </button>
        <button
          onClick={() => {
            store.dispatch({
              type: VOTE_SUP,
            });
          }}
        >
          赞成
        </button>
        <button
          onClick={() => {
            store.dispatch({
              type: USER_INFO,
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
