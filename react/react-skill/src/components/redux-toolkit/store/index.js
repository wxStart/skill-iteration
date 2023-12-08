/**
 *
 * reduxjs-toolkit的使用语法
 */

import { configureStore } from '@reduxjs/toolkit';
import reduxLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import reduxPromise from 'redux-promise';

import voteSliceReducer from './features/voteSlice';
import userSliceReducer from './features/userSlice';

const store = configureStore({
  // 指定reducer
  reducer: {
    // 按模块管理各个切片
    vote: voteSliceReducer,
    user: userSliceReducer,
    /**
     * state= {
     *  vote：{supNum：10, oppNum:6}
     *  user:{}// 这里不写了
     * }
     *
     */
  },

  // 使用中间件   不写默认有reduxThunk ， 写了就得全写
  middleware: [reduxLogger, reduxThunk, reduxPromise],
});

export default store;
