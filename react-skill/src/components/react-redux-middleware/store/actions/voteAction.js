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
  // async support() {
  //   // 点击支持的时候 需要异步获取一个数据

  //   // 使用async 包装就返回了一个promise  所有拿到的dispatch拿到的是promise<pending>实例 而不是 {type:'XXX'}
  //   await delay();
  //   return { type: TYPE.VOTE_SUP };
  // },
  /** redux-thunk中间件的语法 */
  support() {
    return async dispatch => {
      await delay();
      // 异步操作 后手动派发
      dispatch({ type: TYPE.VOTE_SUP });
    };
  },
  // oppose() {
  //   return { type: TYPE.VOTE_OPP };
  // },

  /** redux-promise 的语法   //! 写着真爽*/
  async oppose() {
    await delay();
    return { type: TYPE.VOTE_OPP };
  },
};

export default voteAction;
