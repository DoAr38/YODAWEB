cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-second-webview.webview",
      "file": "plugins/cordova-plugin-second-webview/www/webViewPlugin.js",
      "pluginId": "cordova-plugin-second-webview",
      "clobbers": [
        "webview"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-plugin-second-webview": "2.11.4"
  };
});