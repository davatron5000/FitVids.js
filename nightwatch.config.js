require('dotenv').config();

module.exports = {
  "src_folders" : ["tests/e2e/specs"],
  "output_folder" : "reports",
  "custom_commands_path" : "",
  "custom_assertions_path" : "",
  "page_objects_path" : "",
  "globals_path" : "tests/e2e/globals.js",
  "selenium" : {
    "start_process" : false,
    "server_path" : "",
    "log_path" : "",
    "host" : "127.0.0.1",
    "port" : 4444,
    "cli_args" : {
      "webdriver.chrome.driver" : "",
      "webdriver.ie.driver" : ""
    }
  },
  "test_settings" : {
    "default" : {
      "launch_url" : "http://0.0.0.0:8055/tests/e2e/index.html",
      "selenium_port"  : 80,
      "selenium_host"  : "hub.crossbrowsertesting.com",
      "silent": true,
      "persist_globals": true,
      "screenshots" : {
        "enabled" : false,
        "path" : ""
      },
      "username": process.env.CBT_USERNAME,
      "access_key": process.env.CBT_PASSWORD,
      "desiredCapabilities": {
        "browser_api_name": "Chrome53x64",
        "os_api_name": "Mac10.11",
        "screen_resolution" : "1400x1050",
        "browserName": "chrome"
      }
    }
  }
};