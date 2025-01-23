const common = require('./utils/common');
const httpServer = require('./server/httpServer');
const config = require('../config.json');
const websocketServer = require('./server/websocketServer');

common.ensureFolderExists("../../log");
common.ensureFolderExists("../../output");

// サーバーをすべて起動
common.startAllServers(httpServer, new websocketServer(config.apexlegends.api_port), new websocketServer(8888));