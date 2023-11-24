### saga 使用时候注意

1. 在组件中基于dispatc派发的时候，派发的action对象中的type属性,它的命名上需要注意一个细节<br/>
   因为：每一次派发，一定会把reducer执行仪表，再去saga中间件中，判断此任务是否被监听<br />

   如果打算进行“同步派发”：<br />
   ---- 则我们派发的行为标识需要和reducer中做判断的行为标识一致！！！<br />
   ---- 并且在saga中 不要在对这个标识进行监听了！！！<br />
   ---- 这样的标识，我们可以在“action-types”中进行统一管理!!<br />
   如果打算进行“异步派发”<br />
   ---- 我们派发的标识，“一定不能”和reducer中的做判断的标识一样<br />
   ---- 需要saga中对这个标识进行监听！，监听到派发后，进行异步操作处理<br />
   ---- 我们可以在正常的标识后面加 “-SAGA”【规范：我在自己定义的】，故saga中的标识都是带特殊的前/后缀<br />
   ---- 当异步操作结束，我们基于 yield put进行派发时候，设置的派发标识，要和reducer中做判断的标识一样

2. `yield take('异步标识')`：创建监听器，监听派发指定标识的任务

   - 单纯这样写，只会被监听一次，我们要特殊处理一下

   ```
       while (true) {
            yield take(TYPES.COUNT_ADD + '@SAGA@');
           ......
         }
   ```

   - 改造版 使用takeEvery， 等价上方使用while（true）<br/>
     yield takeEvery('异步标识',要执行的方法)

3. `yield takeEvery('异步标识',要执行的方法)`

   - 等价 yield take('异步标识')使用while（true）<br/>

4. `yield takeLatest('异步标识',要执行的方法)`！！！！重点 防抖

   - 每次都会被监听到，都会把要执行的方法执行<br/>
   - 只不过，在执行方法执勤啊，会把当前任务之前正在运行的任务都结束掉，只保留当前最新执行的任务<br/>
   - 对异步派发任务的防抖处理（每次执行的方法都会执行，但是最终的异步执行一次）

5. `yield throttle(ms,'异步标识',要执行的方法)`

   - 节流处理 在短时间内不会相应第二次操作，对异步检测做的节流，在这段时间内再次点击不会执行 要执行的方法

6. `yield debounce(ms,'异步标识',要执行的方法)`

   - 防抖处理，和takeLatest差不多，但是执行的方法不会多次执行，只会识别一次，takeLatest会每次都会执行要执行的方法，但是派发只执行一次

### working工作区中使用EffectsAPI

1. ` yield delay(ms)` delay延迟函数ms
2. ` yield put(action)`put 等价于dispatch
3. ` yield select(mapStateToProps)` select用来获取那某个模块的公共信息
   - 示例： ` const demo = yield select(state => state.demo);`<br />
4. `const result =  yield call(fn,param1,param2,...)` 调用普通函数（一般异步获取数据），然后传入参数
   - 基于call方法，把指定的fn执行，并且把实参一个一个传入进去
   - 真实项目中一般是用来获取数据的
   - result 是异步获取的数据
5. `const result =  yield apply(this，fn,[param1,param2,...])` 调用普通函数，然后传入参数

   - 需要改变this的时候 使用apply

6. `const task = yield fork(fn, param1,param2,...)` 网络请求 非阻塞形式执行fn

7. `const {data1,data2} = yield all({data1:call(fn1),data2:call(fn2)  })`
   - 并行网络请求执行 函数fn1和fn2
