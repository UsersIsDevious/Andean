using Andean.AndeanClass;
using Rtech.Liveapi;

namespace Andean.AndeanClass.Services
{
    public interface ILobbyService
    {
        void HandleLobbyPlayers(CustomMatch_LobbyPlayers lobbyPlayersMsg);
    }
}
