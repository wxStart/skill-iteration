import { USER_TOKEN, USER_INFO } from '../action-types';

const initial = {
  userInfo: {},
  token: '',
};

export default function voteReducer(state = initial, action) {
  const nextState = { ...state };
  switch (action.type) {
    case USER_TOKEN:
      nextState.token = action.payload;
      break;
    case USER_INFO:
      nextState.userInfo = action.payload;
      break;
    default:
      break;
  }
  return nextState;
}
