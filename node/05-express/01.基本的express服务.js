const express = require('express');

const app = express();

app.get('/home', (req, res) => {
  res.send('你好呀  express');
});

app.listen(9000, () => {
  console.log('服务启动成功');
});
