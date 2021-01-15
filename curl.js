const request = require('request');

module.exports = function (done, url) {
  request(url, function (err, response, body) {
    if (err) {
      throw err;
    } else {
      done(body + '\n');
    }
  });
};
