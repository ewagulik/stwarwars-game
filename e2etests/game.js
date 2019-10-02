const { byTestID } = require('./util');

module.exports = () => ({
  'Displaying always two starships on button click, changing button text': function(
    browser
  ) {
    browser
      .url('http://localhost:3000')
      .waitForElementVisible(byTestID('start-game-button'))
      .click(byTestID('start-game-button'))
      .pause(1500)
      .assert.containsText(byTestID('start-game-button'), 'NEXT ROUND')
      .expect.element('.test-starship:nth-of-type(2)').to.be.present;
    browser
      .click(byTestID('start-game-button'))
      .pause(1500)
      .expect.element('.test-starship:nth-of-type(4)').to.be.not.present;
  },
});
