const fs = require('fs');

fs.writeFile('./01测试写入.txt', '你好，fs模块', (err) => {
  if (err) {
    console.log('写入失败', err);
    return;
  }
  console.log('写入成功');
});
