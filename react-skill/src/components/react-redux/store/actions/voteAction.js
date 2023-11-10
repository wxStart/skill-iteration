import * as TYPE from '../action-types';

// 这种语法是方便 react-redux中 mapDispatchToProps 直接使用
const voteAction = {
  support() {
    return { type: TYPE.VOTE_SUP };
  },
  oppose() {
    return { type: TYPE.VOTE_OPP };
  },
};

export default voteAction;
