export function combineReducers(reducerMap) {
  const reducerKeys = Reflect.ownKeys(reducerMap);

  // 返回合并的reducer
  //  + dispatch 都是执行 这个返回的
  //  + state 公共数据
  //  +
  return function reducer(state = {}, action) {
    // 每个reducer返回的结果就是当前模块的state ，直接替换当前的state
    reducerKeys.forEach(key => {
      state[key] = reducerMap[key](state[key], action);
    });
    console.log('state: ', state);

    return state;
  };
}
