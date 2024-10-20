const common = require('./utils/common');
const httpServer = require('./server/httpServer');
const websocketServer = require('./server/websocketServer');
const websocketServer1 = require('./server/websocketServer');

// サーバーをすべて起動
common.startAllServers(httpServer, websocketServer,websocketServer1);