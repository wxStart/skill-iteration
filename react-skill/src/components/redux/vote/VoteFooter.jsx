import { useContext } from 'react';

import StoreContext from '../StoreContext.js';
import { VOTE_SUP, VOTE_OPP } from '../store/index';

export default function VoteBody() {
  const { store } = useContext(StoreContext);
  console.log('store: ', store);
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
      </div>
    </>
  );
}
