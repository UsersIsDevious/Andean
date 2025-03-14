using Andean.AndeanWebUI.Models;
using AndeanClass;

namespace Andean.AndeanWebUI.Services
{
    public static class LobbyDataConverter
    {
        // CustomMatch から各セクションのプレーヤー情報に変換する例
        public static Dictionary<string, LobbyPlayerSection> ConvertLobbyPlayers(CustomMatch customMatch)
        {
            var lobbyPlayers = new Dictionary<string, LobbyPlayerSection>();

            // customMatch のデータ構造に応じてループ処理を実施
            // 例: customMatch.PlayerSections がセクションごとのデータを持っている場合
            foreach (var section in customMatch.Players)
            {
                var sectionData = new LobbyPlayerSection
                {
                    //Name = section.SectionName,
                    //LogoUrl = section.LogoUrl,
                    //SpawnPoint = section.SpawnPoint,
                    //Players = section.Players.Select(p => new PlayerInfo
                    //{
                    // Index = p.Index,
                    //Id = p.Id,
                    //Name = p.Name
                    //}).ToList()
                };

                // セクションキー（"0", "1", ...）などで追加
                //lobbyPlayers.Add(section.SectionKey, sectionData);
            }

            return lobbyPlayers;
        }

        // CustomMatch からロビー設定に変換する例
        public static LobbySettings ConvertLobbySettings(CustomMatch customMatch)
        {
            var settings = new LobbySettings
            {
                //PlaylistName = customMatch.PlaylistName,
                //AdminChat = customMatch.AdminChat,
                //TeamRename = customMatch.TeamRename,
                //SelfAssign = customMatch.SelfAssign,
                //AimAssist = customMatch.AimAssist,
                //AnonMode = customMatch.AnonMode,
                //GameMode = customMatch.GameMode,
                //Map = customMatch.Map
            };

            return settings;
        }
    }

}
