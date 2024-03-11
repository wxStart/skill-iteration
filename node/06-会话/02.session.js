const express = require('express');
const session = require('express-session');

const app = express();

app.use(
  session({
    name: 'sid', // 设置cookie的名字
    secret: '123!@#', // 签名(加密的)
    saveUninitialized: false, // 是否每次请求都设置一个cookie用来存储session的id
    resave: true, // 是否每次请求重新保存session
    // store:  数据库的连接配置，
    cookie: {
      // cookie的配置
      httpOnly: true,
      maxAge: 300 * 1000, // cookie和 session的过期时间
    },
  })
);

// app.use(cookieParser());

app.get('/login', (req, res) => {
  if (req.query.username == 'admin' && req.query.password == 'admin') {
    // 保存session信息，后面再次访问的时候就可以直接访问这里保存的信息
    req.session.username = 'admin';
    req.session.uid = '1F2Eda';
    res.send('登录成功');
  } else {
    res.send('登录失败');
  }
});

app.get('/cart', (req, res) => {
  if (req.session.username) {
    res.send(`获取到用户的信息了,欢迎你${req.session.username}`);
  } else {
    res.send('用户未登录');
  }
});

app.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.send('退出登录成功');
  });
});

app.listen(9000, () => {
  console.log('服务器启动起来了');
});
