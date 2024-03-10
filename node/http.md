# http


## http结构
## http请求报文结构
结构如下   
``` 
    请求行   
    请求头   
    【空行】  
    请求体
``` 
#### 请求行
`请求方法 URL http版本号  `

#### 请求头
```
    [KEY]:[VALUE],
```
#### 请求体
`可以是任意内容【前后端约定好就行】，一般是约定的请求参数`

### http响应报文结构
结构如下   
``` 
    相应行    
    响应头    
    【空行】   
    响应体   
``` 

#### 响应行
`http版本号  响应状态码   相应状态描述`   
##### 状态码
1xx : 信息响应    
2xx : 成功响应    
3xx : 重定向响应   
4xx : 客户端错误响应   
5xx : 服务端错误响应  


## http服务器

### 创建服务器
```js
const server =   http.createServer((req,res)=>{});
server.listen(9000,()=>{})

```
### 获取请求报文【req】
1. 请求方法: req.method   
2. 请求版本: req.httpVersion   
3. 请求路径:  req.url   
4. 请求头: req.headers   
5. url路径: `require('url').parse(req.url).pathname`,url模块获取      
6. url查询字符串: `require('url').parse(req.url).query`,url模块获取   
7. 请求体： `req.on('data',(chunk)=>{}); req.on('end',()=>{})`,事件监听获取

### 返回响应报文【res】
1. 设置返回状态码
```js
    res.statusCode = 200;
```
2. 设置响应描述
```js
    res.statusMessage = '没找到';
```

3. 设置响应头
```js
    res.setHeader('content-type','text/html;chartset=utf-8');
    res.setHeader('自定义hender','任意值');
    res.setHeader('test',['1','2','3']);// 设置多个同名的相应头
```
4. 设置响应体 `[有且只有一个 end方法]`

```js
    // 方式1;
    res.write('123');
    res.write('456');
    res.end();

    // 方式2
    res.end('123456');
   
```

