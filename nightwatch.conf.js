module.exports = {
  src_folders: ['tests'],

  webdriver: {
    start_process: true,
    server_path: 'node_modules/.bin/chromedriver',
    port: 9515,
  },

  test_settings: {
    end_session_on_fail: false,
    default: {
      launch_url: 'http://localhost:3000',
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          w3c: false,
        },
      },
    },
  },
};
