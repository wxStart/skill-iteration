import * as TYPE from '../action-types';

const userAction = {
  token() {
    return { type: TYPE.USER_TOKEN };
  },
  info(payload) {
    console.log('payload: ', payload);
    return { type: TYPE.USER_INFO, payload };
  },
};

export default userAction;
