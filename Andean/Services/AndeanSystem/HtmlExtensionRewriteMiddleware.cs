using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;

namespace Andean
{
    /// <summary>
    /// URL に拡張子が含まれていない場合、自動で ".html" を付与するミドルウェア
    /// </summary>
    public class HtmlExtensionRewriteMiddleware
    {
        private readonly RequestDelegate _next;

        public HtmlExtensionRewriteMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            // GET リクエストのみ対象
            if (context.Request.Method == "GET")
            {
                var path = context.Request.Path.Value;
                // ルート（"/"）は既定ファイルとして処理されるのでスキップ
                if (!string.IsNullOrEmpty(path) && path != "/" && !path.Contains('.'))
                {
                    // .html を付与したパスを設定
                    context.Request.Path = path + ".html";
                }
            }
            await _next(context);
        }
    }
}
