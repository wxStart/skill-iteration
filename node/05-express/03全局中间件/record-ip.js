const fs = require('fs');
const path = require('path');

module.exports = function (req, res, next) {
  const { url, ip } = req;
  fs.appendFileSync(
    path.resolve(__dirname, 'ip.log'),
    `ip:${ip}， url:${url}, date:${Date.now()}\r\n`
  );
  next();
};
