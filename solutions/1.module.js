var http = require('http');

var PORT = process.argv[2] || 8000;

var server = http
  .createServer(handleRequest)
  .listen(PORT, onServerUp);

function onServerUp() {
  console.log('Up and running server on port:', PORT);
}

function handleRequest(request, response) {
  var body;
  switch (request.url) {
    case '/json':
      response.statusCode = 200;
      response.setHeader('Content-Type', 'application/json');
      body = JSON.stringify({
        id: 1,
        name: 'Dojo'
      });
      break;
    case '/html':
      response.setHeader('Content-Type', 'text/html');
      body = '<h1>HTML</h1>';
      break;
    case '/':
      body = 'HOME';
      break;
    default:
      response.statusCode = 404;
      body = 'Page Not Found';
  }

  response.end(body);
}
