const app = require('../app')

function saveConfig(req, res) {
    const config = app.config;
    const body = JSON.parse(req.body);
    for (const key in Object.keys(body)) {
        config[key] = body[key];
    }
    common.saveConfig(config);
}


function makeScore() {
    app.match

    return score;
}

module.exports = { saveConfig };