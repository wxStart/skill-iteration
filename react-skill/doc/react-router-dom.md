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
