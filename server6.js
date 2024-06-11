const http = require('http');

const PORT = 9006;

const server = http.createServer();
server.listen(PORT, 'localhost', () => {
  console.log('Server listening on: ', PORT);
});

server.on('request', (proxyRequest, serverResponse) => {
  console.log('Request received on PORT: ', PORT);
  
  console.log(proxyRequest.method, proxyRequest.url);
  console.log(proxyRequest.headers);
  
  proxyRequest.on('data', chunk => {
    console.log('Data Received');
  });
  
  proxyRequest.on('error', error => {
    serverResponse.write('Error: ', error);
  })
  
  serverResponse.end(`Request Processed, Response ------------, ${PORT}`);
});
