### JSX的底层处理机制

#### 步骤一：把我们编写的jsx语法编译成虚拟dom对象
虚拟DOM对象： React框架内部构建的一套对象体系，基于这些属性描述出我们所构建视图中的Dom节点的相关特征。        
[jsx转React.createElement](https://babeljs.io/repl)
+ 1. 基于babel-preset-react-app 把JSX编译为`React.createElement(...)`的格式

  React.createElemnet(ele,props,...children)    
  参数：    
      ele: 元素标签名或者组件名    
      props： 元素属性集合对象，没有设置过任何属性时，职位null    
      children： 第三个及以后得参数，都是当前元素的子节点
+ 2. createElement 方法执行，创建virtualDOM虚拟DOM对象    

```
  virtualDOM = {
    $$typeod: Symbol(react.element),
    ref: null,
    key: null,
    type: 标签名或者组件，
    //! 存储元素的相关属性和子节点的信息
    props：{
        children: 子节点信息（没有子节点就没有这个属性，值可能是一个值，也可以是一个值的数组）
    }
  }
```

#### 步骤二： 把构建的virtualDOM渲染成真实dom
真实dom就是页面的真实元素     



#### JSX的补充说明：   
第一次渲染页面是直接把virtualDOM --> 真实dom，后面视图更新时候，需要经过DOM-DIFF计算出补丁包PATCH（两次视图差异部分），把PATCH补丁包进行渲染


#### 函组件的渲染
```
// babel-preset-react-app

// 调用
<DomeOne title={"123"} className="box" >123</DomeOne>

React.createElement(DomeOne, {
  title: "123",
  className: "box"
}, "123");


// 虚拟Dom的type是函数

// 渲染时候 执行函数并且把虚拟dom中解析props作为参数传递给函数

```

#### props
1. 特点： 传递过来props是“只读”的只能使用不能修改
2. 作用： 提高组件的复用性，适配更多的应用场景
3. 限制类型：对prop的属性就行类型限制或者是设置默认值


#### root.render 渲染
1. type 是字符串： 创建一个标签
2. type 是普通函数：把函数执行，并且把props传给函数
3. type 是构造函数： 把构造函数new执行（实例化），同时会把解析出来的props传递过去


#### class组件的渲染 Component / pureComponent

V16版本：
##### 类组件第一次执行逻辑
1. 初始化属性和规则校验   
```
  方案一： 利用constructor
  constructor(props){
    super(props)// 这里就是把props挂载到this实例上
    console.log(tihs.props) // 可以拿到
  }
  方案二： 不在constructor中处理，或者不写constructor ，React内部也会在constructor处理完毕后吧props挂载到实例中，所以其他函数中是可以访问到this.props


```
2. 初始化状态
  ```
  state={}

  更新通过 setState，
  强制更新 forceUpdate函数
  ```
3. 执行生命周期 （componentWillMount[不安全的生命周期]）

4. 执行render方法

5. 执行生命周期 （componentDidMount）

##### 类组件更新逻辑
1. shouldComponentUpdate(nextProps,nextState)    
  返回true/false进行判断是否允许更新
2. componentWillUpdate(nextProps,nextState)[不安全的生命周期]
3. 修改状态值
4. 触发render
   按照最新的状态值和属性值把jsx编译成新的virtualDom；和上一次的virtualDom进行对比diff；把差异部分渲染为真实的dom
5. componentDidUpdate

特殊处理：
1. 如果是forceUpdate 则跳过shouldComponentUpdate直接执行componentWillUpdate后续操作
2. componentWillReceiveProps(nextProps) 是父组件传给子组件的props改变时候执行  比  shouldComponentUpdate 还提前   

##### PureComponent 和Component的区别

PureComponent会给类组件默认添加一个shouldComponentUpdate周期函数
1. 他对新老对象属性/状态做一个浅浅比较
2. 进行浅比较，如果发现变化了返回true，没变化返回false

