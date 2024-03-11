const express = require('express');

const app = express();

app.use(express.static(__dirname + '/05public'));  

// app.get('/', (req, res) => {
//     res.send('首页');
//   });

app.listen(9000, () => {
  console.log('服务启动成功');
});
