
namespace Andean.WebsocketServer.Services
{
    /// <summary>
    /// クライアント管理サービス
    /// 認定済みクライアントの ID の設定・解除などを担当します。
    /// </summary>
    public static class ClientManagementService
    {
        /// <summary>
        /// 認定済みクライアント ID
        /// </summary>
        public static string? AuthorizedClientId { get; private set; } = null;

        private static readonly object _lock = new();

        /// <summary>
        /// クライアントを認定済みに設定します。
        /// </summary>
        public static void SetAuthorizedClient(string clientId)
        {
            lock (_lock)
            {
                AuthorizedClientId = clientId;
                Console.WriteLine($"Authorized client set: {clientId}");
            }
        }

        /// <summary>
        /// 認定済みクライアント設定を解除します。
        /// </summary>
        public static void ClearAuthorizedClient()
        {
            lock (_lock)
            {
                AuthorizedClientId = null;
                Console.WriteLine("Authorized client cleared.");
            }
        }
    }
}
