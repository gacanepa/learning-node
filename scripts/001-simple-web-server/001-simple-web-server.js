import { createServer } from 'http';
import { DEFAULT_HOSTNAME, DEFAULT_PORT } from './constants.js';
import {
  listenFunction,
  simpleServerFunction,
 } from './utilities/index.js';

const server = createServer(simpleServerFunction);

server.listen(
  DEFAULT_PORT,
  DEFAULT_HOSTNAME,
  listenFunction({
    server: DEFAULT_HOSTNAME,
    port: DEFAULT_PORT,
  }),
);
