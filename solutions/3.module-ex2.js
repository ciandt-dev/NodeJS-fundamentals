var fs = require('fs');
var util = require('util');

// util.promisify requer Node v8.0.0 ou superior
var readFile = util.promisify(fs.readFile);
var filepath = process.argv[2];

readFile(filepath)
  .then(function () {
    console.log('Success reading file "' + filepath + '"');
  });
