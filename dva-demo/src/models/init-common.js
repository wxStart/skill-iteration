export default {
    namespace: 'common',  // 命名空间   保证唯一性
    /**
     *  最终生成的数据
      state ={
        common: {
          token:'sg用户' 
        },
      }
     */

    state: {
        token:'sg用户' 
    }, // 公共状态
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
}