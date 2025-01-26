const app = require('../app')
const common = require('../utils/common');

function saveConfig(body) {
    const config = app.config;
    for (const key in body) {
        config[key] = body[key];
    }
    common.saveConfig('./config.json', config);
    return config;
}


function makeScore() {
    let scoreBoard = "";
    const config = app.config;
    if (!match) { return false; }
    app.match.setScoreSettings(config.score_setting);
    const killPoint = config.score_setting.kill_point;
    const maxKill = config.score_setting.max_kill;
    for (let i = 2; i < app.match.maxTeams + 2; i++) {
        const teamScore = 0;
        const team = app.match.getTeam(i);
        // Teamが存在し、かつプレイヤーがいる場合
        if (team != null && team.players.length > 0) {
            const rankPoint = config.score_setting.rank_points[team.rank];
            for (const playerId of team.players) {
                const kill = app.match.getPlayer(playerId).kills.total;
                if (kill > maxKill) {
                    teamScore += maxKill * killPoint;
                } else {
                    teamScore += kill * killPoint;
                }
            }
            team.score = teamScore + rankPoint;
        }
        scoreBoard += `${team.rank}  ${team.totalKills}  ${team.score}\n`;
    }
    return scoreBoard;
}

module.exports = { makeScore, saveConfig };