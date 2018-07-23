'use strict';

const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
const FailFast = require('jasmine-fail-fast');
const BeautifulReporter = require('protractor-beautiful-reporter');
let path = require('path');

exports.config = {

  seleniumAddress: 'http://localhost:4444/wd/hub',

  specs: ['../specs/**/*.spec.js'],

  suites: {
    userJourney: ['../specs/userJourney/**/*.spec.js'],
    techError: ['../specs/techError/**/*.spec.js']
  },

  framework: 'jasmine2',

   onPrepare: () => {
    browser.ignoreSynchronization = true;
    browser.manage().timeouts().implicitlyWait(4000);

    global.EC = protractor.ExpectedConditions;
    global.BrowserActions = require('../lib/browserActions');

    let env = jasmine.getEnv();
    env.addReporter(FailFast.init());
    env.addReporter(new SpecReporter({
        spec: {
            displayStacktrace: 'none',
            displayFailuresSummary: false,
            displayPendingSummary: false,
            displayPendingSpec: true,
            displaySpecDuration: true
        }
    }));

    env.addReporter(new BeautifulReporter({
        preserveDirectory: false,
        takeScreenShotsOnlyForFailedSpecs: true,
        screenShotsSubfolder: 'image',
        jsonsSubfolder: 'jsons',
        baseDirectory: './src/report',
        pathBuilder: function pathBuilder(spec, descriptions, results, capabilities) {
            var currentDate = new Date(),
                day = currentDate.getDate(),
                month = currentDate.getMonth() + 1,
                year = currentDate.getFullYear();

            var validDescriptions = descriptions.map(function (description) {
                return description.replace('/', '@');
            });

            return path.join(
                day + "-" + month + "-" + year,
                validDescriptions.join('-')
            );
        }
    }).getJasmine2Reporter());
    },

    allScriptsTimeout: 600 * 1000,
        jasmineNodeOpts: {
            isVerbose: false,
            showColors: true,
            includeStackTrace: false,
            defaultTimeoutInterval: 900000
        }

};
