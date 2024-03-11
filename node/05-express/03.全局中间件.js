

// 利用全局中间件记录ip和访问url
const express = require('express');
const recordIpMiddleware = require('./03全局中间件/record-ip.js');

const app = express();

app.use(recordIpMiddleware);

app.get('/home', (req, res) => {
  res.send(`<h2>前台首页页面</h1>`);
});

app.get('/admin', (req, res) => {
  res.send(`<h2>后台管理</h1>`);
});

app.get('*', (req, res) => {
  res.send(`<h2>404 Not Found</h1>`);
});

app.listen(9000, () => {
  console.log('服务启动成功');
});
