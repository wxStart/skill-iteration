const   http = require('http');

const  server = http.createServer((req,res)=>{
    console.log('有浏览器像服务器发动了请求')
    res.setHeader('content-type','text/html;charset=utf-8'); // 设置请求头解决中文乱码
    res.end('hello  浏览器')

})

server.listen(9000,()=>{
    console.log('服务启动在9000后的回调')
})