// components/MessageComponent.js
export default function MessageComponent({ message }) {
    // メッセージのtypeによって動作や表示内容を切り替える
    switch (message.type) {
      case "ini":
        return (
          <div>
            <h2>Initialization Data</h2>
            <p>Players: {message.players.length}</p>
            <p>Map Image: <img src={message.mapimage} alt="Map" /></p>
          </div>
        );
  
      case "update":
        return (
          <div>
            <h2>Update Data</h2>
            <p>Player Position: {message.playerPosition}</p>
            <p>Player Status: {message.playerStatus}</p>
          </div>
        );
  
      case "notification":
        return (
          <div>
            <h2>Notification</h2>
            <p>{message.content}</p>
          </div>
        );
  
      default:
        return <p>Unknown message type</p>;
    }
  }
  