/**
 * 把各个板块action合并为一个action
 */
import voteAction from './voteAction';
import userAction from './userAction';
const action = {
  vote: voteAction,
  user: userAction,
};

export default action;
