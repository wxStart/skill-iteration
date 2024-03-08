const fs = require('fs');

fs.readFile('./03.流式文件.txt', (err, data) => {
  if (err) {
    console.log('文件读取失败');
    return;
  }
  console.log(data);
  console.log(data.toString());
});
