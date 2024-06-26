### Hooks

#### useRef

1. 包裹一个基础变量的值，通过`.current`
2. `forwardRef` 转发 让父组件可以访问到子组件
3. `useImperativeHandle` 子组件自定义暴露的对象结合`forwardRef`一起使用

#### useEffect 副作用的处理

1. 接受一个函数，以及一个依赖项（可以有可无）
2. 函数中返回一个函数，会在effect再次执行之前执行

#### useLayoutEffect 同步执行状态更新

useEffect 是在渲染被绘制到屏幕之后执行的，是异步的； useLayoutEffect 是在渲染之后但在屏幕更新之前，是同步的

#### Context 向组件深层传递数据 垮组件传值

#### memo 【平时都不怎么用 主要是根据真实情况才会使用】

允许props不变化的情况下不对组件重新渲染，进行优化用的
`memo(function C() {  return <>哈哈是： {Math.random()}</>; });`

#### useMemo 【平时都不怎么用 主要是根据真实情况才会使用】

主要是 通过函数 对一个固定的非原始类型数据进行包装，使每次返回的是原来的数据而不是新数据，比如 {}!={}
` const lists = useMemo(() => [message.toLocaleUpperCase()], [message])`

```
/**
 * let xx =  useMemo(callback,[dependencies])
 * 1. 第一次组件执行时候，会执行callback 并且返回callback的返回值
 * 2. 只有依赖的状态值发生改变，callback 才会再次执行
 * 类似vue中的计算属性
 */

```

#### useCallback

对就函数进行优化，依赖不变返回原来的函数，而不是生成一个新的函数

```
/**
 * let xx = useCallback(calllback,deps)
 * 1. 第一次渲染的时候创建一个函数callback给xx，
 * 2. 仅依赖项重新创建了才会从新创建一个新的callback函数给xx；
 * 3. 解决函数组件中每次更新会创建函数
 * 4. 尽量不要使用useCallback，虽然减少了堆内存的开辟，但是useCallback本身也有逻辑缓存机制，也是需要消耗时间
 * 5. 使用场景： 父组件把一个内部的函数基于属性传递给子组件，此时传递的这个方法，我们基于useCallback处理一下更好，只要这个方法没变就不希望子组件从新渲染(配合PureComponent 或者 memo一起使用)
 */

```

#### statTransition 以及并发模式

1. react18 之前渲染是一个单一的、不间断的、同步的事务，一旦渲染开始，就不能被中断
2. react18引入并发模式，它允许你将标记更新作为一个transitions，这会告诉React他们可以被中断执行。这样可以吧紧急的任务先更新，不紧急的任务后更新

##### useTransition

useTransition 是一个任你搞在不阻塞UI的情况下来更新状态的，返回一个状态

##### useDeferredValue

接受一个值，并返回该值的副本，该副本将推迟到更紧致的更新之后

#### 自定义hooks

自定义hook是一个函数，函数内部调用其他hooks，且以use开头命名，主要作用是对逻辑功能进行封装处理，达到复用能力

#### 第三方hooks

1. ahooks
