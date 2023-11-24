// 这里打算使用saga进行处理  不需要创建actions
import { COUNT_ADD } from '../action-types';

const initial = {
  count: 10,
};

export default function coutReducer(state = initial, action) {
  console.log('coutReducer: ');
  const nextState = { ...state };

  switch (action.type) {
    case COUNT_ADD:
      console.log(11);
      nextState.count += action.payload || 1;
      break;
    default:
      break;
  }

  return nextState;
}
