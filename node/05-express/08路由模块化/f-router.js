const express = require('express');

const router = express.Router();

router.get('/home', (req, res) => {
  res.send('路由模块化的首页');
});

router.get('/search', (req, res) => {
  res.send('路由模块化的搜索');
});

module.exports = router;
