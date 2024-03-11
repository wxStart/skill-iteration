const express = require('express');

const app = express();

app.use((req, res, next) => {
  let referer = req.get('referer');
  if (referer) {
    let url = new URL(referer);
    if (url.hostname !== '127.0.0.1') {
      res.status(404).send('<h1>404</h1>');
      return;
    }
  }
  next();
});

app.use(express.static(__dirname + '/05public'));

app.listen(9000, () => {
  console.log('服务启动成功');
});
