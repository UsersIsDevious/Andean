const app = require('../app')
const common = require('../utils/common');

function saveConfig(body) {
    const config = app.config;
    for (const key in body) {
        config[key] = body[key];
    }
    common.saveFile('config.json', config);
    return config;
}


async function makeScore() {
    return await app.calcScore();
}


function readCSV(csv) {
    return app.readCSV(csv);
}

module.exports = { makeScore, saveConfig, readCSV };