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
    return null;
    app.match

    return score;
}

module.exports = { makeScore, saveConfig };