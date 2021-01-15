const fs = require('fs');

module.exports = function (done, fileName) {
  const filePath = './' + fileName;
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      throw err;
    } else {
      done(data + '\n');
    }
  });
};
