const { createCanvas, registerFont } = require('canvas');
const fs = require('fs');
const path = require('path');
const common = require('../utils/common');
const { CustomMatch, Player } = require('../utils/andeanClass');

// 日本語対応フォントを登録（例：NotoSansJP-Regular.otf を使用）
// ※ ../fonts ディレクトリにフォントファイルを配置してください
registerFont(path.resolve(__dirname, '../../fonts/NotoSansJP-Regular.otf'), { family: 'NotoSansJP' });

/**
 * プレイヤーの戦績データを画像として生成するメソッド
 * @param {CustomMatch} match 
 * @param {Object} config
 * @param {Player} player 
 * @returns {boolean}
 */
function makeResultImg(match, config, player) {
    try {
        // キャンバスのサイズを設定
        const width = 800;
        const height = 1000;
        const canvas = createCanvas(width, height);
        const ctx = canvas.getContext('2d');

        // テキストのベースラインを "top" に設定して、文字が見切れないようにする
        ctx.textBaseline = 'top';

        // 背景を描画（薄いグレー）
        ctx.fillStyle = '#f0f0f0';
        ctx.fillRect(0, 0, width, height);

        // ヘッダー（タイトル）を描画
        ctx.fillStyle = '#000000';
        ctx.font = 'bold 36px "NotoSansJP"';
        ctx.fillText('戦績データ', 50, 50);

        // 各種データを描画するためのフォント設定
        ctx.font = '24px "NotoSansJP"';
        let currentY = 100;
        const lineHeight = 30;  // 各行の高さ
        const paddingBottom = 20;  // 下側の余白

        // 描画するテキスト行を配列にまとめる
        const lines = [
            `プレイヤースコア: ${player.score}`,
            `プレイヤー名: ${player.name}`,
            `チーム名: ${player.teamName} (ID: ${player.teamId})`,
            `レジェンド: ${player.legend}`,
            `キル: ${player.kills.total}`,
            `キルを受けた回数: ${player.killsReceived.total}`,
            `キルアシスト: ${player.killAssists ? player.killAssists.total : 0}`,
            `キルアシストを受けた回数: ${player.killAssistsReceived ? player.killAssistsReceived.total : 0}`,
            `ダウン: ${player.downs ? player.downs.total : 0}`,
            `ダウンさせられた回数: ${player.downsReceived ? player.downsReceived.total : 0}`,
            `総ダメージ量: ${player.damageDealt ? player.damageDealt.total : 0}`,
            `ダメージ受けた量: ${player.damageReceived.total}`
        ];

        // オプションの追加統計情報を動的に追加
        if (player.abilityUseCount) {
            lines.push(`アビリティ使用回数: ${JSON.stringify(player.abilityUseCount)}`);
        }
        if (player.ultimateUseCount) {
            lines.push(`ウルティメット使用回数: ${JSON.stringify(player.ultimateUseCount)}`);
        }
        if (typeof player.ziplineUseCount !== 'undefined') {
            lines.push(`ジップライン使用回数: ${player.ziplineUseCount}`);
        }
        if (player.grenadeUseCount) {
            lines.push(`グレネード使用回数: ${JSON.stringify(player.grenadeUseCount)}`);
        }
        if (player.blackMarket) {
            lines.push(`ブラックマーケット使用回数: ${player.blackMarket.useCount}`);
            lines.push(`ブラックマーケットアイテム: ${JSON.stringify(player.blackMarket.items)}`);
        }
        if (typeof player.wraithPortalUseCount !== 'undefined') {
            lines.push(`レイスポータル使用回数: ${player.wraithPortalUseCount}`);
        }
        if (typeof player.forgedShadowDamaged !== 'undefined') {
            lines.push(`フォージドシャドウダメージ: ${player.forgedShadowDamaged}`);
        }
        if (typeof player.warpGateUseCount !== 'undefined') {
            lines.push(`ワープゲート使用回数: ${player.warpGateUseCount}`);
        }
        if (typeof player.gibraltarShieldAbsorbed !== 'undefined') {
            lines.push(`ジブラルタルシールド吸収: ${player.gibraltarShieldAbsorbed}`);
        }
        if (typeof player.bannerCollectedCount !== 'undefined') {
            lines.push(`バナー回収数: ${player.bannerCollectedCount}`);
        }

        // 各行を描画（キャンバス下端に余白を残す）
        for (let line of lines) {
            // 次の行がキャンバスの下端を超えないか確認
            if (currentY + lineHeight + paddingBottom > height) break;
            ctx.fillText(line, 50, currentY);
            currentY += lineHeight;
        }

        // 画像を PNG として保存
        const buffer = canvas.toBuffer('image/png');
        common.ensureFolderExists(path.join(config.output, match.matchName, "PlayerResults"));
        const outputPath = path.resolve(
            __dirname, 
            config.output, 
            match.matchName, 
            "PlayerResults", 
            `${match.matchName}_${player.name}.png`
        );
        fs.writeFileSync(outputPath, buffer);
        console.log(`[makeImg] ${player.name}のリザルト画像を生成しました。`);
        return true;
    } catch (e) {
        console.error('画像の生成に失敗しました。', e);
        return false;
    }
}

module.exports = { makeResultImg };
