import { useContext } from 'react';

import StoreContext from '../StoreContext.js';

export default function VoteBody() {
  const { store } = useContext(StoreContext);
  const state = store.getState();
  return (
    <>
      <div>赞成人数：{state.supNum}</div>
      <div>反对人数：{state.oppNum}</div>
    </>
  );
}
