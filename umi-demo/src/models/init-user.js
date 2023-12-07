const delay = (time = 1000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(10);
    }, time);
  });
};
/**
 *
 * reducers 和  effects 中的方法不允许同名
 * 派发的时候会分不清楚的
 */
export default {
  namespace: "user", // 模块名字
  state: {
    // 公共状态
    name: "wxx",
    age: 31,
    dream: "共同富裕",
  },
  //  subscriptions 页面加载就立即被注册
  /**
    subscriptions中写的方法,都是普通函数，在页面初始化时候，会把函数执行
     参数 ：包含dispatch和history的两个对象
   如果页面一加载，我们就向执行，修改模块的数据.
  */
  subscriptions: {
    // 页面加载 按照顺序由 上往下执行  只会执行一次，路由切换也不会执行了
    init({ dispatch, history }) {
      console.log("init");
      dispatch({
        type: "save",
        payload: { name: "我是第一次被执行的修改的name" },
      });
    },
    async setup({ dispatch, history }) {
      // eslint-disable-line
      console.log("setup");
      const result = await delay(2000);
      dispatch({
        type: "save",
        payload: { age: result },
      });
    },
    a() {
      console.log("a");
    },

    // 需求改变一下： 我们希望，在页面第一次/重新记载时候，只有进入User组件时候，我们写的方法才可以执行。  进入页面刷新数据
    inter({ dispatch, history }) {
      console.log("inter: ", 1);

      // 返回值  unListen 移除此监听器的操作
      let unListen = history.listen((location) => {
        if (location.pathname === "/user/xy") {
          console.log(" 进入到了 /user/xy", location);
          dispatch({
            type: "save",
            payload: { age: 100 },
          });
        } else {
          dispatch({
            type: "save",
            payload: { age: 101 },
          });
        }
      });
    },
  },

  effects: {
    /**
     redux-saga 中我们基于take/takeLatest/takeEvery等方式创建监听器，此处写成一个Generator函数就行，默认是用takeEvery监听的

      方法名字就是监听器的名字 方法就是执行working
      这里的函数名字不要和 reducers中的函数名字同名

     */
    // *changDreamAsync(action, { call, put, select }) {
    //   const state = yield select(); // 获取所有模块的信息
    //   console.log("state: ", state);
    //   const data = yield call(delay, 3000);
    //   console.log("data: ", data);
    //   yield put({
    //     type: "changDream",
    //     payload: action.payload,
    //   });
    // },
    // 设置不同类型的监听器

    changDreamAsync: [
      // working
      function* ({ payload }, { call, put, select }) {
        const state = yield select(); // 获取所有模块的信息
        console.log("state: ", state);
        const data = yield call(delay, 3000);
        console.log("data: ", data);
        yield put({
          type: "changDream", // 感觉还可以调用其他模块的  模块名字/reducers
          payload: payload,
        });
        yield put({
          type: "common/save", // 修改common
          payload: { token: "token123" },
        });
      },
      {
        // type:"takeLatest"
        type: "throttle",
        ms: 500,
      },
    ],
  },

  reducers: {
    // 同步修改状态

    /**
    把原有的reducer函数中的switch/case 情况都写成了单独的方法（纯函数）
    state：本模块的state；
    action: 派发时候传递的action对象，包含type和传递的其他值（一般基于payload传递）
    */
    save(state, action) {
      // 只是当前板块的state
      return { ...state, ...action.payload };
    },

    /**
    dispatch({
      type: "user/changDream",
      payload: "共同富裕时间" + Date.now(),
    });
     */
    changDream(state, action) {
      return { ...state, dream: action.payload };
    },
  },
};
