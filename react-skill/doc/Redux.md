### 使用

1. 创建全局公共容器：用来存储各组件需要的公共信息

   ```
       const store = createStore(reducer)
   ```

2. 在组件内部获取公共状态信息，然后渲染组件

```
    const state = store.getState()
```

3. 把让组件可以更新的方法放在公共容器的事件池中

   后期公共状态改了，事件池中的方法会按照顺序依次执行，也可以组件更新，组件更新就可以获取最新的状态

   ```
    store.subscribe(cb) // 放入事件池中
   ```

4. 更新数据 通过派发任务
   a. 创建store时候，传递reducer

   ```
       const reducer = function (state=initVal, action) {
           // state 容器中的状态
           // action :派发的行为对象 必须具备type属性

           switch(action.type){
               // 根据不同的type 修改不同的状态信息
           }
           return state;
       }
   ```

   b. 派发任务，通过reducer修改状态数据

   ```
       store.dispatch({
           type:'xxx'
       })
   ```

### 特点

1. 在创建的store容器总，存储两部分内容：  
   a. 公共状态：各组件需要共享 / 通信的信息<br/>
   b. 事件池：存放一些方法让组件可以更新的方法<br/>
   特点：当公共状态一但发生该您，会默认立即通知事件池中方法执行，这些方法执行主要是让指定的组件更新，而组件更时候，就会获取最新的公共状态信息进行渲染<br/>
2. 修改公共状态不能直接修改：  
   a. 基于dispatch派发通知reducer执行<br/>
   b. 在reducer中修改状态
