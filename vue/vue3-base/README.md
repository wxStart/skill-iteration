# vue3-demo

<style>
    .red{
        color:red
    }
</style>

### 推荐使用组合式（setup）

### setup 函数

setup 函数的返回值有两种

1. 对象 ，对象中的属性和方法都可以在模版中使用
2. 渲染函数： 自定的的渲染，模版就不会被渲染

setup 的参数 （props,context）

context:{
attrs,
emit(),
slots
}

<b class="red">注意点:</b>

1. setup 函数不能是一个 async 函数
2. 不要和 vue2.x 混用，vue2 中可以通过 this 访问 setup 中的属性和方法，setup 不能访问 vue2.x 中的属性和方法；定义同名的，setup 的优先级更高

### ref 函数

作用： 定义一个响应式的数据【reference 对象，ref 对象】  
在 js 中通过.value 属性进行访问，在 vue 的 template 中不需要.value，直接使用  
通常是用来处理<span class="red">基础类型</span>的数据【字符串、数字类型等】

### customRef

创建一个自定义的 ref，显式声明对其依赖追踪和更新触发的控制方式。

### reactive 函数

作用：只能定义一个<span class="red">对象类型</span>的响应式数据,返回的事一个<span class="red">代理对象【proxy 对象】</span>

### computed 函数

作用：计算属性

### watch 函数

作用：监听一个属性或者多个属性，变话执行回调函数

注意：

1. 监视 reactvie 定义的响应式数据时候，oldValue 无效了
2. 监听 reactive 数据时候，默认开启了 deep:true,deep 配置无效
3. 监听 reactive 数据的某个属性【需要使用函数返回的形式】时候，deep 配置生效
4. 需要使用 oldValue 的时候，使用 ref 去定义响应式

### watchEffect 函数

作用：接受一个函数，函数中涉及到的响应式数据都被监视了，里面的数据变化，函数就会执行

### 生命周期

vue3 中可以使用 vue2.x 的生命周期函数。有两个函数进行了改名：

- beforeDestroy ===> beforeUnmount
- destroyed ===> unmounted

#### <span class="red"> 选项式生命周期 </span> 和 <span class="red"> 组合式生命周期 </span> 的对应关系

beforeCreate ===> setup  
created ========> setup  
beforeMount ====> onBeforeMount  
mounted ========> onMounted  
beforeUpdate ===> onBeforeUpdate  
updated ========> onUpdated  
beforeUnmount ==> onBeforeUnmount  
unmounted ======> onUnmounted

### toRef 函数

也可以基于响应式对象上的一个属性，创建一个对应的 ref。这样创建的 ref 与其源属性保持同步：改变源属性的值将更新 ref 的值，反之亦然。

### toRefs 函数

将一个响应式对象转换为一个普通对象，这个普通对象的每个属性都是指向源对象相应属性的 ref。每个单独的 ref 都是使用 toRef() 创建的。每个属性值都是响应式的

### readonly 和 shallowReadonly 函数

让一个数据仅仅是可读不允许修改；shallowReadonly 是浅层次的，仅仅第一层是不可修改，深层次的嵌套的是可以修改的；readonly 是所有的都是不可修改的

### toRaw 函数

根据一个 Vue 创建的代理返回其原始对象。
toRaw() 可以返回由 reactive()、readonly()、shallowReactive() 或者 shallowReadonly() 创建的代理对应的原始对象。

### markRaw

将一个对象标记为不可被转为代理。返回该对象本身。 不会变成响应式了，可以给一个响应式对象添加一些非相应的数据

### provide 与 inject 函数

实现组件【祖孙】组件通讯

### 响应式数据的检测函数： isRef、 isReactive、 isReadonly、 isProxy

- isRef 判断是不是 ref 函数创建的对象
- isReactive 检查一个对象是否由 reactive 创建得响应式代理
- isReadonly 检查一个对象是否由 readonly 创建的只读代理
- isProxy 检测一个对象是否由 reactive 或者是 readonly 方法创建的代理

### vue3 新增的组件

- Fragment 组件 空标签，在vue3中 template模版中可以使用多个标签了，而不是需要一个根标签，vue会用Fragment主动进行包裹   

- Teleport 组件   
  它可以将一个组件内部的一部分模板“传送”到该组件的 DOM 结构外层的位置去。
+ Suspense 组件
  加载异步组件
