const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    testDir: './tests',
    workers: 1,

    reporter: [
        ['list'],
        ['junit', { outputFile: 'reports/playwright.xml' }]
    ],

    use: {
        browserName: 'chromium',
        baseURL: 'http://127.0.0.1:3000',
        screenshot: 'on',
        trace: 'retain-on-failure'
    },

    webServer: {
        command: 'node server.js',
        url: 'http://127.0.0.1:3000',
        reuseExistingServer: false
    }
});