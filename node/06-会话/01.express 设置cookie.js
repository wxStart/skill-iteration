const express = require('express');

const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());

app.get('/set-cookie', (req, res) => {
  res.cookie('name', 'wxx'); // 会在浏览器关闭时候销毁
  res.cookie('name1', '10s有效期', { maxAge: 10 * 1000 }); // 10秒有效的cookie
  res.send('cookie 设置成功');
});
app.get('/remove-cookie', (req, res) => {
  res.clearCookie('name1'); // 会在浏览器关闭时候销毁
  res.send('cookie 删除陈工');
});

app.get('/get-cookie', (req, res) => {
    const cookies =  req.cookies
    res.json(cookies);
  });

app.listen(9000, () => {
  console.log('服务器启动起来了');
});
