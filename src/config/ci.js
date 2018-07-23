
'use strict';

let config = require('./default').config;

config.seleniumAddress = 'http://localhost:4444/wd/hub/';


config.capabilities = {
    browserName: 'chrome',
    chromeOptions: {
        'args': ['--start-maximized', 'disable-infobars', 'disable-gpu', 'incognito', '--headless']
    },
    shardTestFiles: true,
    maxInstances: 1
};

config.specs = ['../specs/*.spec.js'];

exports.config = config;