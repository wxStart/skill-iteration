const fs = require('fs');

fs.rename('./07移动改名练习/07.文件改名与移动.txt', './07移动改名练习/07.文件改名与移动1.txt', (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('改名成功')
});
