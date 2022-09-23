import { createServer } from 'http';
import expressApp from './express.js';

const hhtpServer = createServer(expressApp);

export default hhtpServer;
