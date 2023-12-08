/**
 * redux的部分源码
 */

export const legacy_createStore = function (reducer) {
  let state = undefined;
  const listeners = [];
  const getState = function () {
    return state;
  };
  const subscribe = function (listener) {
    if (typeof listener !== 'function') {
      throw Error('subscribe 中必须是一个函数');
    }
    if (!listeners.includes(listener)) {
      listeners.push(listener);
    }
    return function unsubscribe() {
      const index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    };
  };
  const dispatch = function (action) {
    if (action.type === undefined) {
      throw Error('action.type 缺失');
    }
    state = reducer(state, action);
    listeners.forEach(listener => {
      if (listener) {
        listener();
      }
    });
  };

  dispatch({
    type: Math.random(),
  });

  return {
    getState,
    subscribe,
    dispatch,
  };
};
