### react-redux

主要是让redux在react中使用比较容易。提供了Provider给提供上下文，connect函数可以快速获取到上下文中的公共状态（通过props的形式）。

1. 在react-redux内部自己创建了上下文对象，在使用组件的时候无需我们注册上下文，自己获取上下文对象中的store，可以直接获取

```
    import {Provider} from 'react-redux'
    import {store} from './store

    <Provider store={store}>
        <Com>
    <Provider>

```

2. connect(mapStatetoProps,mapDispatchToProps)(我们要渲染的组价)  
   a. mapStateToProps: 可以获取redux中的公共装填吧需要的信息作为属性传递组件

   ```
    state=>{
        return { a: state.vote.supNum} // 组件里面就通过props.a 访问
    }
   ```

   b. mapDispatchToProps

   ```
     dispatch=>{
        //dispatch: 就是store.dispatch
        return {
            support(){ // props.support()
                dispatch(action.vote.support())
            }
        }
     }
   ```
