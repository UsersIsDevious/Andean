namespace AndeanClass.Services.Utilities
{
    public static class MatchUtilities
    {
        /// <summary>
        /// Packetのデータに含まれていないプレイヤーをチェックする
        /// </summary>
        /// <param name="packet">Packetクラスのインスタンス</param>
        /// <param name="playerData">プレイヤーデータ（キー：プレイヤーID、値：Playerオブジェクト）</param>
        /// <returns>正常に処理できた場合はtrue、例外発生時はfalse</returns>
        public static bool CheckPacketData(Packet packet, Dictionary<string, EventPlayer> playerData)
        {
            try
            {
                // packet.Dataに含まれる各プレイヤーのIDをリストとして取得
                var includedPlayers = packet.Data.Select(player => player.id).ToList();

                // Dictionary内を変更するため、ToList()でキーと値のペアをコピーしてループ
                foreach (var kvp in playerData.ToList())
                {
                    string playerId = kvp.Key;
                    EventPlayer playerValue = kvp.Value;

                    // packetに該当プレイヤーが含まれていない場合は追加
                    if (!includedPlayers.Contains(playerId))
                    {
                        packet.AddData(playerValue);
                    }
                    else
                    {
                        // 含まれている場合は、packet.Dataから該当するプレイヤーを取得して更新
                        var foundPlayer = packet.Data.FirstOrDefault(player => player.id == playerId);
                        if (foundPlayer != null)
                        {
                            playerData[playerId] = foundPlayer;
                        }
                    }
                }
                return true;
            }
            catch (Exception ex)
            {
                Console.Error.WriteLine("[CHECK PACKET DATA] Error: " + ex.Message);
                return false;
            }
        }
    }
}
