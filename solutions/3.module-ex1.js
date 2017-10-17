var fs = require('fs');

var filepath = process.argv[2];

fs.readFile(filepath, function () {
  console.log('Success reading file "' + filepath + '"');
});
