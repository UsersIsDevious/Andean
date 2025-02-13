const app = require('../app')
const common = require('../utils/common');

function saveConfig(body) {
    const config = app.config;
    for (const key in body) {
        config[key] = body[key];
    }
    common.saveFile('../../config.json', config);
    return config;
}


function resetConfig() {
    try {
        const config = common.readFile('../../default.config.json');
        app.config = config;
        common.saveFile('../../config.json', config);
    } catch (err) {
        console.error("[RESET CONFIG]" + err);
        return false;
    }
    return true;
}


async function makeScore() {
    return await app.calcScore();
}


function readCSV(csv) {
    return app.readCSV(csv);
}

module.exports = { makeScore, saveConfig, resetConfig, readCSV };