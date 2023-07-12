const http = require('http');

// Create a server instance
const server = http.createServer((req, res) => {
  // Set the response header
  res.setHeader('Content-Type', 'text/html');
  
  // Set the response body
  res.write('<h1>Hello Node!!!!</h1>\n');
  
  // End the response
  res.end();
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log('Server running on port 3000');
});
