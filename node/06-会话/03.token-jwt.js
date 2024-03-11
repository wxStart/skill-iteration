const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.get('/login', (req, res) => {
  if (req.query.username == 'admin' && req.query.password == 'admin') {
    // 保存session信息，后面再次访问的时候就可以直接访问这里保存的信息
    const token = jwt.sign(
      {
        username: 'admin',
        password: 'sdad',
      },
      'jiamizifu', // 加密密码
      {
        expiresIn: 60, // 有效期
      }
    );
    res.send('登录成功: token:   ' + token);
  } else {
    res.send('登录失败');
  }
});

app.get('/cart', (req, res) => {
  if (req.query.token) {
    // 保存session信息，后面再次访问的时候就可以直接访问这里保存的信息
    jwt.verify(req.query.token, 'jiamizifu', (err, data) => {
      if (err) {
        console.log('校验失败');
        return;
      }
      res.json(data);
    });
  } else {
    res.send('登录失败');
  }
});

app.listen(9000, () => {
  console.log('服务器启动起来了');
});
