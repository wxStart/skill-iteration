const fs = require('fs');

//1. 创建读取流对象
const rs = fs.createReadStream('./03.流式文件.txt');

//2 绑定data事件

rs.on('data', (chunk) => {
  console.log(chunk.length); // 每次读取 65536字节 =>64kB
});


