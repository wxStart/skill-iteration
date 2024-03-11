const express = require('express');
const formidable = require('formidable');

const app = express();

app.use(express.static(__dirname + '/10文件上传'));

app.post('/file', (req, res, next) => {
  const form = formidable({
    multiples: true,
    uploadDir: __dirname + '/10文件上传/file',
    keepExtensions: true,
  });

  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    res.json({ filename: `/file/${files.filename.newFilename}` });
  });
});

app.listen(9000, () => {
  console.log('服务启动成功');
});
