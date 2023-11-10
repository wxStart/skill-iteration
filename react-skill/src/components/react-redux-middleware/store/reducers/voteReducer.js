import { VOTE_SUP, VOTE_OPP } from '../action-types';

const initial = {
  supNum: 10,
  oppNum: 6,
};

export default function voteReducer(state = initial, action) {
  const { type } = action;
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
}
