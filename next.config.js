const path = require('path');
// next.config.js
module.exports = {
    reactStrictMode: true,
    webpack: (config) => {
      config.resolve.alias['@'] = path.resolve(__dirname, 'client');
      return config;
    },
  };
  