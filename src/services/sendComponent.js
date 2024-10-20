const React = require('react');
const { renderToString } = require('react-dom/server');
const common = require('../utils/common'); // クライアントコンポーネント

function sendComponentToClients(componentName) {
  let Component;

  // コンポーネント名に基づいて動的にインポート
  try {
    Component = require(`@/app/app/view/${componentName}`); // パスは適宜変更
  } catch (error) {
    console.error(`Error loading component ${componentName}:`, error);
    return;
  }

  // SSR でコンポーネントを HTML に変換
  const componentHtml = renderToString(React.createElement(Component));

  // WebSocket で全クライアントにメッセージを送信
  common.getServerList().websocketServer_web.broadcastToAllClients(JSON.stringify({
    type: 'rendering',
    html: componentHtml, // 生成したHTMLを送信
  }));
}

module.exports = { sendComponentToClients };
