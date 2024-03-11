# express


## express的使用
### 创建服务
```js
    const express = require('express');
    const app = express();
    app.listen(9000,()=>{})
```

## express 路由

### 使用路徑

一个路由有`请求方法`、`路由`、`回调函数`组成；
```js

    // 只匹配 /home
    app.get('/home',(req,res)=>{});
    app.get('/about',(req,res)=>{})
```

### 获取请求参数

```js
  app.get('/request',(req,res)=>{
    const pathname = req.path;
    const query = req.query;

    const ip = req.ip;

    // 获取请求头的参数
    const  host = req.get('host')
  });
```
### 获取路由参数
`req.params`上保存着路由参数；   

```js
  app.get('/detail/:id/:name',(req, res) => {
    const id = req.params.id;
    const name = req.params.name;
  });
```

### 返回响应设置
`res.status`返回响应状态码，`set`方法是设置响应头的，`send`方法相当于原来的end方法；
`res.status(200).set('header','aaa').send('返回值')`    

```js
  app.get('/detail/:id/:name',(req, res) => {
    const id = req.params.id;
    const name = req.params.name;
    res.status(200);
    res.set('my-header','aaa');
    res.send('返回的值')
  });
```
### 其他相应方法
`res.redirect('http://123.com')`: 重定向      
`res.download('文件的绝对路径')`: 下载相应    
`res.json(json内容)`: 相应json    
`res.sendFile(__dirname+'/home.txt')`: 响应文件内容   



## express中间件
+ 中间件本质上是一个回调函数， 中间件函数可以向回调函数一样的去访问`请求对象`和`响应对象`
+ 中间件使用函数封装公共操作，简化代码
### 中间件分类
+ 全局中间件: 访问-->全局-->路由
+ 路由中间件：匹配到路由才会访问中间件
```js
// 全局中间件  recordIpMiddleware
app.use(recordIpMiddleware);

// 路由中间件  checkCodeMiddleware  约束路由的
app.get('/setting', checkCodeMiddleware, (req, res) => {
  res.send(`<h2>setting</h1>`);
});

```
### 模块化路由
```js
  const express = require('express');

  const router = express.Router();

  router.get('/home', (req, res) => {
    res.send('路由模块化的首页');
  });

  router.get('/search', (req, res) => {
    res.send('路由模块化的搜索');
  });
  module.exports = router;

```

### 常用的中间件
1. 静态资源目录： express内置了中间件 `express.static(静态资源目录)`
2. 获取请求体数据： body-parser
3. 处理cookie：cookie-parser
4. session操作：express-session

## express-generator  工程模版生成器