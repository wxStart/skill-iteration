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
  put, // 等价dispatch
} from 'redux-saga/effects';

console.log(take, takeEvery, takeLatest, throttle, debounce, call, apply, fork, delay, put);

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

// eslint-disable-next-line require-yield
const workingCount = function* (action) {
  // action 就是派发对象
  console.log('action: ', action); // 执行异步dispatch时候的action {type，payload}
  console.log('当前的任务被监听到了');
  yield delay(2000);
  yield put({
    type: TYPES.COUNT_ADD,
    payload: action.payload,
  });
};

/**
 * 创建监听器 监听派发任务 [Generator]
 */
const saga = function* () {
  // while (true) {
  //   let action = yield take(TYPES.COUNT_ADD + '@SAGA@'); // 这里的action 是派发对象
  //   yield workingCount(action);
  // }
  yield takeEvery(TYPES.COUNT_ADD + '@SAGA@', workingCount);
};

export default saga;
