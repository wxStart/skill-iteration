/**
 *  针对/admin 和 /setting的请求url需要携带code=521参数校验
 */

const express = require('express');
const fRouter = require('./08路由模块化/f-router.js');
const bRouter = require('./08路由模块化/b-router.js');
const app = express();

app.use(fRouter);
app.use(bRouter);

app.get('*', (req, res) => {
  res.send(`<h2>404 Not Found</h1>`);
});

app.listen(9000, () => {
  console.log('服务启动成功');
});
