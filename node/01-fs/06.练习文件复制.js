const fs = require('fs');

const rs = fs.createReadStream('./06复制练习/源文件.txt');

const ws = fs.createWriteStream('./06复制练习/源文件1.txt');

// 3. 读取一点 写入一点
// rs.on('data', (chunk) => {
//   ws.write(chunk);
// });

// rs.on('end', () => {
//   ws.close();
// });

rs.pipe(ws); // 也是复制
