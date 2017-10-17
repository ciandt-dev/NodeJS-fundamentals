var fs = require('fs');
var util = require('util');

// util.promisify requer Node v8.0.0 ou superior
var readFile = util.promisify(fs.readFile);
var filepaths = process.argv[2].split(',');
var successFiles = [];
var errorFiles = [];
var allPromisses = [];

filepaths.forEach(function (file) {
  var promisse = readFile(file)
    .then(function () {
      successFiles.push(file);
    })
    .catch(function (err) {
      errorFiles.push(file);
    });

  allPromisses.push(promisse)
});

Promise.all(allPromisses)
  .then(function () {
    if (successFiles.length > 0) {
      console.log('Success reading file(s): ' + successFiles.join(','));
    }

    if (errorFiles.length > 0) {
      console.log('Fail reading file(s): ' + errorFiles.join(','));
    }
  });
