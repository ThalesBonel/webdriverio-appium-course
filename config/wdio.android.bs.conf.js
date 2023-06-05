
const path = require('path');
require('dotenv').config();
const {config} = require('./wdio.shared.conf');
 
//
// ==================
// BROWSERSTACK CREDENTIALS
// ==================
config.user = process.env.BROWSERSTACK_USER;
config.key = process.env.BROWSERSTACK_KEY;
//
// ==================
// SPECS
// ==================
config.specs = [
    './test/specs/android/add-note-screen*.js'
];

//
// ==================
// CAPABILITIES
// ==================
config.capabilities = [
    {
        platformName: 'Android',
        'appium:platformVersion': '12.0',
        'appium:deviceName': 'Google Pixel 6',
        'appium:automationName': 'UIAutomator2',
        'appium:app': 'bs://f0de2d7c800e7edf4475a86570bf76e9923cc506',
        'appium:autoGrantPermissions': true
    }
];

    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
    config.services = ['browserstack'];

exports.config = config;
