import { legacy_createStore } from 'redux';

const initival = {
  supNum: 10,
  oppNum: 6,
};

export const VOTE_SUP = 'VOTE_SUP';
export const VOTE_OPP = 'VOTE_OPP';
const reducer = function (state = initival, action) {
  const { type } = action;
  console.log('type: ', type);
  const nextState = { ...state };

  switch (type) {
    case VOTE_SUP:
      nextState.supNum++;
      break;
    case VOTE_OPP:
      nextState.oppNum++;
      break;
    default:
      break;
  }

  return nextState;
};

const store = legacy_createStore(reducer);

export default store;
