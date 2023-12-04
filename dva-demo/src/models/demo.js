export default {
  namespace: "demo", // 模块名字

  state: {
    num: 100,
  }, // 公共状态

  subscriptions: {
    init({ dispatch, history }) {
      console.log('dispatch, history: ', dispatch, history);
      // eslint-disable-line
      console.log('demo init')
    },
    setup({ dispatch, history }) {
      // eslint-disable-line
      console.log('demo setup')
    },
  },

  effects: {},

  reducers: {
    // 同步修改状态
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
