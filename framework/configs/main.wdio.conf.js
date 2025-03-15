import path from 'node:path';
import fs from 'fs-extra';

export const downloadDir = path.resolve('./tmp');

export const mainConfig = {
    runner: 'local',
    exclude: [
    ],
    maxInstances: 1,
    logLevel: 'warn',
    bail: 0,
    waitforTimeout: 0,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: [
                '--lang=en', // Set the browser language
                '--disable-translate', // Disable Chrome's translation popup
                '--no-first-run', // Skip the first-run prompts
                '--disable-popup-blocking',
                '--disable-infobars',
                '--disable-notifications',
                '--disable-extensions',
                '--start-maximized',
            ],
            prefs: {
                'intl.accept_languages': 'en,en_US', // Set the accepted languages for browsing
                'translate.enabled': false, // Disable translation suggestions
                "download.default_directory": downloadDir
            },
        },
    }],

    onPrepare: function () {
        fs.ensureDir(downloadDir);
    },

    after: function (result, capabilities, specs) {
        fs.emptyDir(downloadDir);
    },

    afterTest: async function (test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            await browser.takeScreenshot();
        }
    },
}
