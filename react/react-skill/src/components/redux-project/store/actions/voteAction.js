import * as TYPE from '../action-types';

const voteAction = {
  support() {
    return { type: TYPE.VOTE_SUP };
  },
  oppose() {
    return { type: TYPE.VOTE_OPP };
  },
};

export default voteAction;
