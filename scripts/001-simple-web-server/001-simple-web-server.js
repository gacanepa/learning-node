import { createServer } from 'http';
import { DEFAULT_HOSTNAME, DEFAULT_PORT } from './constants.js';

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(DEFAULT_PORT, DEFAULT_HOSTNAME, () => {
  console.log(`Server running at http://${DEFAULT_HOSTNAME}:${DEFAULT_PORT}/`);
});
