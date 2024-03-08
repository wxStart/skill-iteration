const fs = require('fs');

// 如果有这个文件夹 先删除
fs.mkdir('./html', (err) => {
  if (err) {
    console.log('创建失败');
    return;
  }

  console.log('创建文件夹成功');
});

// 递归创建目录

fs.mkdir(
  './a/b/c', // a文件夹下  b文件夹下  c文件夹
  {
    recursive: true, //递归创建目录
  },
  (err) => {
    if (err) {
      console.log('创建失败');
      return;
    }

    console.log('创建文件夹成功');
  }
);
