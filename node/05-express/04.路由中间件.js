/**
 *  针对/admin 和 /setting的请求url需要携带code=521参数校验
 */

const express = require('express');

const app = express();

const checkCodeMiddleware = (req, res, next) => {
  if (req.query.code == '521') {
    next();
  } else {
    res.send(`<h2>参数错误</h1>`);
  }
};

app.get('/home', (req, res) => {
  res.send(`<h2>前台首页页面</h1>`);
});

app.get('/admin', checkCodeMiddleware, (req, res) => {
  // 判断url中有没有code=521
  if (req.query.code == '521') {
    res.send(`<h2>后台管理</h1>`);
  } else {
    res.send(`<h2>参数错误</h1>`);
  }
});

app.get('/setting', checkCodeMiddleware, (req, res) => {
  res.send(`<h2>setting</h1>`);
});

app.get('*', (req, res) => {
  res.send(`<h2>404 Not Found</h1>`);
});

app.listen(9000, () => {
  console.log('服务启动成功');
});
