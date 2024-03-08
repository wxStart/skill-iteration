const fs = require('fs');

// 自己去建一个  08.删除.txt 文件
fs.unlink('./08.删除.txt', (err) => {
  if (err) {
    console.log('删除操作失败');
    return;
  }
});
