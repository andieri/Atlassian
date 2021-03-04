const
    seleniumUrl = '',
    path = require('path');

let browserVersion = '';

exports.config = {
    ignoreUncaughtExceptions: true,
    seleniumAddress: seleniumUrl,
    getPageTimeout: 60 * 1000,
    allScriptsTimeout: 100 * 1000,

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    SELENIUM_PROMISE_MANAGER: false,
    capabilities: {
        'browserName': (process.env.TEST_BROWSER_NAME || 'chrome'),
        'version': (process.env.TEST_BROWSER_VERSION || 'ANY'),
        'newCommandTimeout': '1000',
        'chromeOptions': {
            args: ['--disable-popup-blocking', '--use-fake-device-for-media-stream', '--use-fake-ui-for-media-stream', '--disable-gpu', '--incognito', '--window-size=1500,800', '--lang=en-US']
        },
        autoAcceptAlerts: 'true'
    },
    cucumberOpts: {
        'require-module': 'ts-node/register',
        require: [
          './src/**/step_definitions/**/*.steps.ts',
          './src/**/support/**/*.support.ts'
        ],
        format: ['progress',
          'rerun:reports/@failed_scenarios.txt',
          // 'message',
          'usage-json:reports/step-usage.json'],
        tags: ['~@Manual', '~@Ignore'],
        'format-options': JSON.stringify({
          snippetInterface: 'synchronous',
          colorsEnabled: true
        })
    },

    suites: {
        plain: ['./src/features/**/Plain*.feature'],
        google: ['./src/features/**/Google*.feature']
    },

    onPrepare: function () {
        const chai = require('chai'),
            chaiString = require('chai-string'),
            chaiAsPromised = require('chai-as-promised');
        chai.use(chaiString)
            .use(chaiAsPromised);
        global.expect = chai.expect;
        browser.driver.getCapabilities().then(function (caps) {
            browserVersion = caps.get('version');
        });
        browser.ignoreSynchronization=true;
    },

    afterLaunch: function () {
        // const reporter = require('cucumber-html-reporter');
        // // const environment = browser.params.env.toUpperCase();
        // const options = {
        //     name: 'Functional E2E Report',
        //     brandTitle: 'Atlassion Login page',
        //     theme: 'bootstrap',
        //     jsonFile: 'reports/report.json',
        //     output: 'reports/report.html',
        //     reportSuiteAsScenarios: true,
        //     launchReport: false,
        //     screenshotsDirectory: 'reports/screenshots/',
        //     storeScreenshots: true,
        //     metadata: {}
        // };
        // reporter.generate(options);
    },

    plugins: [
    //     {
    //         package: 'protractor-console-plugin',
    //         failOnWarning: false,
    //         failOnError: false,
    //         logWarnings: true
    //     }
    ]
}
;
