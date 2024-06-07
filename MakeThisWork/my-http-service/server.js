const http = require('http');

const requestListener = function (req, res) {
  if (req.method === 'GET' && req.url === '/hello') {
    // Handle the GET /hello request
    res.writeHead(200, {'Content-Type': 'application/json'}); // Set response headers
    res.end(JSON.stringify({ Hello: 'world' })); // Send JSON response
  } else {
    // Handle other requests (optional)
    res.writeHead(404); // Not Found
    res.end('404 Not Found');
  }
};

const port = 8888;
const server = http.createServer(requestListener);

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
