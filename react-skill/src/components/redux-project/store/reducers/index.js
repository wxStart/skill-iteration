/**合并各个模块的reducer */
// import { combineReducers } from 'redux';
import { combineReducers } from '../myCombineReducers';

import voteReducer from './voteReducer';
import userReducer from './userReducer';

// 合并reducer

/**
 * 合并reducer
 * 
 * 
    const reducer = combineReducers({
      vote: voteReducer,
      user: userReducer,
    });
    公共的状态也会变成按照我们设置的成员名字进行模块化管理

    state={
      vote:{ // voteReducer 来管理 state.vote
        supNum: 10,
        oppNum: 6
      },
      user:{}  // userReducer 来管理 state.user
    }

 * 
 */
const reducer = combineReducers({
  vote: voteReducer,
  user: userReducer,
});

export default reducer;
