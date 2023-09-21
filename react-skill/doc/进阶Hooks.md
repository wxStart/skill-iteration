### Hooks

#### useRef

1. 包裹一个基础变量的值，通过`.current`
2. `forwardRef` 转发 让父组件可以访问到子组件
3. `useImperativeHandle` 子组件自定义暴露的对象结合`forwardRef`一起使用


#### useEffect 副作用的处理

1. 接受一个函数，以及一个依赖项（可以有可无）
2. 函数中返回一个函数，会在effect再次执行之前执行


####  useLayoutEffect 同步执行状态更新  

useEffect 是在渲染被绘制到屏幕之后执行的，是异步的； useLayoutEffect 是在渲染之后但在屏幕更新之前，是同步的

####  Context 向组件深层传递数据 垮组件传值

#### memo
允许props不变化的情况下不对组件重新渲染，进行优化用的



