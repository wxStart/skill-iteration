import * as TYPE from '../action-types';

const delay = (time = 1000) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(10);
    }, time);
  });
};

// 这种语法是方便 react-redux中 mapDispatchToProps 直接使用
const voteAction = {
  support() {
    return { type: TYPE.VOTE_SUP };
  },

  /** redux-thunk中间件的语法 */
  asyncSupport() {
    return async dispatch => {
      await delay();
      // 异步操作 后手动派发
      dispatch({ type: TYPE.VOTE_SUP });
    };
  },
  oppose() {
    return { type: TYPE.VOTE_OPP };
  },

  /** redux-promise 的语法   //! 写着真爽*/
  async asyncOppose() {
    await delay();
    return { type: TYPE.VOTE_OPP };
  },
};

export default voteAction;
