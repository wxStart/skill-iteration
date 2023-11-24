import { useSelector, useDispatch } from 'react-redux';

import * as TYPES from '../store/action-types';

function Count() {
  const { count } = useSelector(state => state.demo);
  const dispatch = useDispatch();
  return (
    <>
      <h3>计数器 saga</h3>
      <div> {count}</div>
      <button
        onClick={() => {
          dispatch({
            type: TYPES.COUNT_ADD,
            payload: 10,
          });
        }}
      >
        同步 按钮+10
      </button>
      <button
        onClick={() => {
          dispatch({
            type: TYPES.COUNT_ADD + '@SAGA@', // 异步标识自己随便加
            payload: 5,
          });
        }}
      >
        异步按钮+5
      </button>
    </>
  );
}

export default Count;
