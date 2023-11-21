### V5

#### Route 中利用component渲染组件

会给组件传递是哪个props属性

1. history （编程时导航使用）
2. location
3. match

#### Route 中利用 render 渲染组件

会给render函数中传入的属性

#### 只要在 HashRouter 或者BorwserRouter 中的渲染的组件

就可以通过 `useHistory, useLocation, useRouteMatch` hooks获取三个对象信息；
对于类组件可以使用 `withRouter`或者自己使用高阶组件去包一层

### V6

变动点：<br/>

1. Switch组件被移除，由 `Routes`
2. Redirect组件被移除，由`Navigate`替代
3. withRouter组件被移除，自己写高级组件代替

4. 所有的匹配规则放在Routes中2. 每条匹配规则还是基于Route<br/>
   4.1 路由匹配成功，不在基于component/render 控制渲染组件 而是基于 `element`属性， 语法格式`<Component />` <br/>  
   4.2 不在需要Switch，默认就是一个匹配成功就不在匹配下面的了<br/>
   4.3 不需要exact ，默认每一个都是精准匹配 <br/>
5. 原有的`<Redirect  > `操作被` <Route path="/" element={<Navigate to="/a" />}></Route>`代替 <br/>  
   5.1 遇到Navigate组件就会跳转4. 要求所有的路由（二级或者多级路由），不在分散到各个组件中编写，而是统一写在一起进行处理；<br/>
