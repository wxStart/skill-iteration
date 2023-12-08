
export default {

    namespace: 'demo',  // 模块名字
  
    state: {}, // 公共状态
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
        
      },
    },
  
    effects: {
     
    },
  
    reducers: { // 同步修改状态
      save(state, action) {
        return { ...state, ...action.payload };
      },
    },
  
  };
  