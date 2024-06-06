import { createServer } from 'http';
import { DEFAULT_HOSTNAME, DEFAULT_PORT } from './constants.js';
import simpleServerFunction from './utilities/simpleServerFunction.js';

const server = createServer(simpleServerFunction);

server.listen(DEFAULT_PORT, DEFAULT_HOSTNAME, () => {
  console.log(`Server running at http://${DEFAULT_HOSTNAME}:${DEFAULT_PORT}/`);
});
