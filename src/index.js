const { startAllServers } = require('./utils/common');

// サーバーの起動
const servers = startAllServers();
console.log("All servers are up and running:", servers);