using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Andean.ApexLiveAPI.Request;
using Andean.ApexLiveAPI.Services;
using Andean.WebsocketServer;
using Andean.WebsocketServer.Controllers;
using AndeanClass.Controllers;
using Andean.AndeanClass.Services;
using Andean.WebsocketServer.Services;
using Andean.AndeanWebUI.Hubs;
using Andean.Utilities;
using Andean.Config;
using System.Diagnostics;
using AndeanSystem;

var builder = WebApplication.CreateBuilder(args);

// ✅ カスタム設定ファイル `config/config.json` を読み込み
builder.Configuration.AddJsonFile("config/config.json", optional: true, reloadOnChange: true);

// ✅ DI (依存性注入) に `CustomSettings` を登録
builder.Services.Configure<AppConfig>(builder.Configuration);


// 🚀 ログ設定: コンソール & デバッグログを有効化
builder.Logging.ClearProviders();
builder.Logging.AddConsole();
builder.Logging.AddDebug();

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddSignalR();



// 🚀 ConfigService をシングルトンで登録
builder.Services.AddSingleton<ConfigService>();

// 🚀 TimestampService をシングルトンで登録
builder.Services.AddSingleton<AndeanSystem.AndeanSystem, TimestampService>();

// 🚀 WebSocket サーバーをシングルトンとして登録
builder.Services.AddSingleton<WebSocketServer>();

// 🚀 StatisticsProcessor サーバーをシングルトンとして登録
builder.Services.AddSingleton<StatisticsProcessor>();

//🚀  ClientManagementService をシングルトンとして登録
builder.Services.AddSingleton<ClientManagementService>();

// 🚀 LobbyRequestService をシングルトンで登録
builder.Services.AddSingleton<Request>();

// 🚀 ApexPlaylistService をシングルトンで登録
builder.Services.AddSingleton<ApexPlaylistService>();

// 🚀 AndeanClassController をシングルトンで登録
builder.Services.AddSingleton<AndeanClassController>();

// ☆ UpdateManager をホストサービスとして登録
builder.Services.AddHostedService<UpdateManager>();

// 🚀 SystemShutdownService をホストサービスとして登録
builder.Services.AddSingleton<SystemShutdownService>();

// 🚀 CORS 設定: localhost:3000 からのリクエストを許可
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowLocalhost3000", policy =>
    {
        policy.WithOrigins("http://localhost:3000") // 許可するオリジン
              .AllowAnyMethod()
              .AllowAnyHeader()
              .AllowCredentials(); // 認証情報が必要な場合は true
    });
});

var app = builder.Build();

// 🚀 ロガーを取得
var logger = app.Services.GetRequiredService<ILogger<Program>>();

//app.MapGet("/", () => "Custom settings are loaded!");

app.UseMiddleware<HtmlExtensionRewriteMiddleware>();
// 静的ファイルの配信ミドルウェアを有効化
app.UseDefaultFiles();  // wwwroot/index.html などの既定ファイルを有効化
app.UseStaticFiles();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors("AllowLocalhost3000"); // 🚀 CORS を適用
app.UseAuthorization();

app.MapControllers();

// 🚀 SignalR のエンドポイントを4つに分割
app.MapHub<ControlPanelHub>("/controlPanelHub");       // コントロールパネル用
app.MapHub<OverlayHub>("/overlayHub");                 // オーバーレイ用
app.MapHub<OverlayControlPanelHub>("/overlayControlPanelHub"); // オーバーレイコントロールパネル用
app.MapHub<LiveViewHub>("/liveViewHub");


// 🚀 WebSocket サーバーをバックグラウンドで起動
try
{
    var webSocketServer = app.Services.GetRequiredService<WebSocketServer>();
    Task.Run(() => webSocketServer.StartAsync());
    logger.LogInformation("✅ WebSocket Server started successfully on ws://127.0.0.1:7777/ and ws://localhost:7777/");
}
catch (Exception ex)
{
    logger.LogError(ex, "❌ WebSocket Server failed to start.");
}


// アプリケーション起動後、ブラウザで指定URLを自動的に開く
Task.Run(async () =>
{
    // サーバーが起動するまで数秒待機（必要に応じて調整）
    await Task.Delay(1000);
    // 開きたいURLを指定（）
    var url = "https://localhost:7109/";
    Process.Start(new ProcessStartInfo(url) { UseShellExecute = true });
});


logger.LogInformation("🚀 Application started successfully.");

app.Run();
