const common = require('./utils/common');
const httpServer = require('./server/httpServer');
const websocketServer = require('./server/websocketServer');

common.ensureFolderExists("../../log");
common.ensureFolderExists("../../output");

// サーバーをすべて起動
common.startAllServers(httpServer, new websocketServer(7777), new websocketServer(8888));