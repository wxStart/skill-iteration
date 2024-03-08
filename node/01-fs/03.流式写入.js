const fs = require('fs');

//1. 创建写入流对象
const ws = fs.createWriteStream('03.流式文件.txt', {
  flags: 'a', // 追加，不写就是覆盖
});

// 类似打电话
//2 write
ws.write('窗前明月光\r\n');
ws.write('雪花女神龙\r\n');
ws.write('倚天不出谁与争锋\r\n');

ws.end();
