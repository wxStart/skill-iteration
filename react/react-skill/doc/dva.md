## 项目配置
### antd 按需导入

+ antd 4.x 不支持按需导入 [按需](https://dvajs.com/guide/getting-started.html#%E4%BD%BF%E7%94%A8-antd)

```
    "antd": "^4.24.7",
    "antd-icons": "^0.1.0-alpha.1"
    "babel-plugin-import": "^1.13.5"
```
### `.webpackrc.js` webpack的相关配置
[参考](https://github.com/sorrycc/roadhog#)

### 移动端适配
+ 依赖包
```
    "lib-flexible": "^0.3.2",
    "postcss-pxtorem": "^5.1.1"
```
## dva/router
+  react-router-dom v5版本中的所有api
+  react-router-redux 中的对象, 并且都挂在`routerRedux`对象下面
## dva/dynamic
+ 路由懒加载
```

    import dynamic from "dva/dynamic";
    /**
      window.dvaApp = dva() // 在入口的地方设置的
     */
    
    const LazyXy = dynamic({
        app: window.dvaApp,
        models: () => [],
        component: () => import(/* webpackChunkName: "xy" */ "./user/Xy"),
    });

```


## 一般处理路由
+ 1. 语法
+ 2. 懒加载
+ 3. 路由表创建路由



## model的处理
1. 所有模块的M，odel，我们一般都放在src/models目录下
2. 关于Model的加载
    2.1 全部打包到主js中，页面一加载就把Models都准备好
       2.1.1 所有模块的都准备好了
       2.1.2 model很多导致主js会很大
    2.2 我们可以把不需要再第一次加载完就处理的model，只有进入相关组件才需要处理的，可有通过dynamic懒加载路由时候加载model 
    ```
         dynamic({
            app: window.dvaApp,
            models: models, // 加载模块的公共数据
            component: component,
        });
    ```
