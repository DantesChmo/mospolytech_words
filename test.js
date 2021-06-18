const fs = require('fs');
const path = require('path');

fs.readdir(path.resolve(__dirname, './src/static/entries'), (err, files) => {
  console.log(files);
});