const express = require('express');

const router = express.Router();

router.get('/admin', (req, res) => {
  res.send(`<h2>后台管理</h1>`);
});

router.get('/setting', (req, res) => {
  res.send(`<h2>setting</h1>`);
});
module.exports = router;
