require('dotenv').config();
const path = require('path');
const { config } = require('./wdio.shared.conf');

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
    '../test/specs/ios/ios-todo-item-screen.spec.js'
];


//
// ==================
// CAPABILITIES
// ==================
config.capabilities = [
    {
        platformName: 'ios',
        'appium:platformVersion': '14.5',
        'appium:deviceName': 'iPhone 12 Pro Novo',
        'appium:automationName': 'XCUITest',
        'appium:app': path.join(process.cwd(), 'app/ios/MVCTodo.app.zip'),
        'appium:autoGrantPermissions': true
    }
];

    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
    config.services = ['browserstack'];

exports.config = config;
