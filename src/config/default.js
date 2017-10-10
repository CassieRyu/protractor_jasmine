'use strict'

const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
const FailFast = require('jasmine-fail-fast');

exports.config = {

  seleniumAddress: 'http://localhost:4444/wd/hub',

  specs: ['../specs/**/*.spec.js'],

  suites: {
    userJourney: ['../specs/userJourney/**/*.spec.js'],
    techError: ['../specs/techError/**/*.spec.js']
  },

  framework: 'jasmine2'

//  multiCapabilities = [
//      {
//        browserName: 'chrome',
//        chromeOptions: {
//            'args': ['--start-maximized', 'disable-gpu', 'incognito']
//        },
//        shareTestFiles: true,
//        maxInstances: 2
//      }
//  ]
};
