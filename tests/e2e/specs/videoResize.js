module.exports = {
    tags: ['videoresize'],
    before : function (browser) {
        browser.resizeWindow(1400, 1050);
    },
    'Video providers are present' : function (browser) {
        browser
        .url('http://0.0.0.0:8055/tests/e2e/index.html')
        .assert.elementPresent('iframe[src*="youtube"]')
        .assert.elementPresent('iframe[src*="vimeo"]')
        .assert.elementPresent('iframe[src*="kickstarter"]')
        //Get iframe size for youtube iframe
        .getElementSize('iframe[src*="youtube"]', function(result){
            this.globals.iframe_width = result.value.width;
        })
        .end();
    },
    'Videos resize after window resize' : function (browser) {
        browser
        .resizeWindow(800, 600)
        .url('http://0.0.0.0:8055/tests/e2e/index.html')
        .getElementSize('iframe[src*="youtube"]', function(result){
            this.assert.equal(result.value.width !== this.globals.iframe_width, true, 'Iframe size decreased after window resize');
        })
        .end();
    },
    after : function (browser) {
        browser.end();
    }
}