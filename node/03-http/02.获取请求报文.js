const  http = require('http');


http.createServer((req,res)=>{
    console.log(req.method);
    console.log(req.url);
    console.log(req.httpVersion);
    console.log(req.headers);

}).listen(9000,()=>{
    console.log('服务启动了')
})