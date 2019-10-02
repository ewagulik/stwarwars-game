const { byTestID } = require('./util');

module.exports = () => ({
  'Setting the category': function(browser) {
    browser
      .url('http://localhost:3000')
      .waitForElementVisible(byTestID('category-dropdown'))
      .setValue(byTestID('category-dropdown'), 'crew')
      .assert.containsText(byTestID('category-heading'), 'Crew')
      .pause(500)
      .expect.element('.test-starship').to.be.not.present;
  },
});
