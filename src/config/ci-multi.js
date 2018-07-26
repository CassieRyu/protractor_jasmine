
'use strict';

let config = require('./default').config;

config.seleniumAddress = 'http://localhost:4444/wd/hub/';


config.multiCapabilities = [
    {
        browserName: 'chrome',
        maxInstances: 2
    },
    {
        browserName: 'firefox',
        maxInstances: 2
    }

];

config.specs = ['../specs/*.spec.js'];

exports.config = config;