### Hooks

#### useRef

1. 包裹一个基础变量的值，通过`.current`
2. `forwardRef` 转发 让父组件可以访问到子组件
3. `useImperativeHandle` 子组件自定义暴露的对象结合`forwardRef`一起使用


#### useEffect 副作用的处理

1. 接受一个函数，以及一个依赖项（可以有可无）
2. 函数中返回一个函数，会在effect再次执行之前执行
