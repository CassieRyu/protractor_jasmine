'use strict';

let config = require('./default').config;


config.capabilities = {
    browserName: 'chrome',
    chromeOptions: {
        'args': ['--start-maximized', 'disable-infobars', 'disable-gpu', 'incognito']
    }
};

config.directConnect = true;

config.specs = ['../specs/*.spec.js'];

exports.config = config;