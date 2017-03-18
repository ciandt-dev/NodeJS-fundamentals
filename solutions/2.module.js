var express = require('express');
var app = express();

var PORT = process.argv[2] || 8000;

app
  .get('/json/:id?', handleJsonRequest)
  .get('*', handleRequest);

app.listen(PORT, onServerUp);

function onServerUp() {
  console.log('Up and running server on port:', PORT);
}

function handleRequest(request, response) {
  var body;
  var statusCode = 200;
  switch (request.path) {
    case '/html':
      response.set('Content-Type', 'text/html');
      body = '<h1>HTML</h1>';
      break;
    case '/':
      body = 'HOME';
      break;
    default:
      response.statusCode = 404;
      body = 'Page Not Found';
  }

  response.status(statusCode).send(body);
}
function handleJsonRequest(request, response) {
  response.send({
    id: request.params.id || request.query.id || 1,
    route: 'json'
  });
}
