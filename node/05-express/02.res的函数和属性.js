const express = require('express');
const path = require('path');

const app = express();

app.get('/path/:id', (req, res) => {
  const pathname = req.path;
  const ip = req.ip;
  const params = req.params;
  res
    .status(201)
    .set('Content-Type', 'application/json; charset=utf-8')
    .set('test', ['1', '2', '3'])
    .send({ pathname, ip, params });
});

app.get('/download', (req, res) => {
  // 下载文件
  res.download(path.resolve(__dirname, './package.json'));
});

app.get('/json-file', (req, res) => {
  // 发送文件内容
  res.sendFile(path.resolve(__dirname, './package.json'));
});

app.get('/json', (req, res) => {
  console.log(req.method);
  console.log(req.url);
  console.log(req.httpVersion);
  console.log(req.headers);
  res.json({ a: '122', b: 123 });
});
app.post('/data1', (req, res) => {
  res.json({ a: '122', b: 123 });
});

app.listen(9000, () => {
  console.log('服务启动成功');
});
