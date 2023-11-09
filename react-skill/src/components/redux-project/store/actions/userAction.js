import * as TYPE from '../action-types';

const userAction = {
  token() {
    return { type: TYPE.USER_TOKEN };
  },
  info() {
    return { type: TYPE.USER_INFO };
  },
};

export default userAction;
