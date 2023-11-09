import { useContext, useEffect, useState } from 'react';

import StoreContext from '../StoreContext.js';
import VoteBody from './VoteBody';
import VoteFooter from './VoteFooter';
export default function Vote() {
  const { store } = useContext(StoreContext);
  console.log('store: ', store);
  const state = store.getState().vote;
  console.log('state: ', state);
  const [x, setX] = useState(0);

  const update = () => {
    console.log('更新了 le ');
    setX(x + 1);
  };
  useEffect(() => {
    let unsubscribe = store.subscribe(update);
    return () => unsubscribe();
  }, [x]);
  console.log('render', x);
  return (
    <>
      <div>你觉得35岁会失业么？</div>
      <div>参与人数：{state.supNum + state.oppNum}</div>
      <VoteBody></VoteBody>
      <VoteFooter></VoteFooter>
    </>
  );
}
