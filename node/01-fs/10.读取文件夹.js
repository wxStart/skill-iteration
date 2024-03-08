const fs = require('fs');

fs.readdir('./', (err, files) => {
  if (err) {
    console.log('文件夹读取失败');
    return;
  }
  console.log(files);
});
