class PlayerManager {
    constructor() {
      this.players = [];
    }
  
    createPlayers(playerData) {
      this.players = playerData.map((data, index) => ({
        id: index,
        x: data.x || 2048,
        y: data.y || 2048,
        rotation: data.rotation || 0,
        team: data.team || 'default', 
        name: data.name || `Player ${index}`,
      }));
    }
  
    updatePlayerPosition(id, x, y, rotation) {
      const player = this.players.find(player => player.id === id);
      if (player) {
        player.x = x;
        player.y = y;
        player.rotation = rotation;
      }
    }
  
    getPlayers() {
      return this.players;
    }
  }
  
  export default PlayerManager;
  