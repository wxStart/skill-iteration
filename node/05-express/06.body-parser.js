const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded(); // 会给 req挂载一个body属性

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/06.form.html');
});

app.post('/login', urlencodedParser, (req, res) => {
  console.log(req.body);
  res.send('接收到了数据')
});

app.listen(9000, () => {});
