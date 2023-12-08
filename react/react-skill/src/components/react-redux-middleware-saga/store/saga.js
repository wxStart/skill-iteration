import {
  // 创建监听器的-start
  take,
  takeEvery,
  takeLatest,
  throttle,
  debounce,
  // 创建监听器的-end
  call,
  apply,
  fork,
  delay, // 延迟函数
  put, // 等价dispatch，
  select,
  all,
} from 'redux-saga/effects';

console.log(take, takeEvery, takeLatest, throttle, debounce, call, apply, fork, delay, put, select, all);

/**
 * 
 * 
 * 这是是哪个函数是为了处理节流防抖
  takeLatest,
  throttle,
  debounce,
 */

import * as TYPES from './action-types';

/** 创建执行函数，在任务监听后，去做异步操作[Generator] */

const workingCount = function* (action) {
  console.log('监听到了 workingCount: ');
  // action 就是派发对象
  yield delay(3000);
  yield put({
    type: TYPES.COUNT_ADD,
    payload: action.payload,
  });
};

const workingVoteSupNum = function* () {
  console.log('监听到了 workingVoteSupNum: ');
  yield delay(1000);
  yield put({
    type: TYPES.VOTE_SUP,
  });
};

const workingVoteOppNum = function* () {
  console.log('监听到了 workingVoteOppNum: ');
  yield delay(1000);
  yield put({
    type: TYPES.VOTE_OPP,
  });
};

/**
 * 创建监听器 监听派发任务 [Generator]
 */
const saga = function* () {
  // 多个监听
  yield takeLatest(TYPES.COUNT_ADD + '@SAGA@', workingCount);
  yield takeLatest(TYPES.VOTE_SUP + '@SAGA@', workingVoteSupNum);
  yield takeLatest(TYPES.VOTE_OPP + '@SAGA@', workingVoteOppNum);
};

export default saga;
