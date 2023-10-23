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