const fs = require('fs');

fs.appendFile('01测试写入.txt', '\r\n我是appendFile追加的内容', (err) => {
  if (err) {
    console.log('追加失败');
    return;
  }

  console.log('追加成功');
});

fs.writeFile(
  './01测试写入.txt',
  '\r\n我是writeFile追加的内容',
  {
    flag: 'a', // 追加写入
  },
  (err) => {
    if (err) {
      console.log('写入失败', err);
      return;
    }
    console.log('写入成功');
  }
);
