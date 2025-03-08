using System;

namespace Andean.WebsocketServer.Services
{
    /// <summary>
    /// クライアント管理サービス
    /// 認定済みクライアントの ID の設定・解除などを担当します。
    /// </summary>
    public class ClientManagementService
    {
        /// <summary>
        /// 認定済みクライアント ID
        /// </summary>
        public string? AuthorizedClientId { get; private set; } = null;

        /// <summary>
        /// クライアントを認定済みに設定します。
        /// </summary>
        public void SetAuthorizedClient(string clientId)
        {
            AuthorizedClientId = clientId;
            Console.WriteLine($"Authorized client set: {clientId}");
        }

        /// <summary>
        /// 認定済みクライアント設定を解除します。
        /// </summary>
        public void ClearAuthorizedClient()
        {
            AuthorizedClientId = null;
            Console.WriteLine("Authorized client cleared.");
        }
    }
}
