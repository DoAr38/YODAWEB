cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-second-webview/www/webViewPlugin.js",
        "id": "cordova-plugin-second-webview.webview",
        "pluginId": "cordova-plugin-second-webview",
        "clobbers": [
            "webview"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-plugin-second-webview": "2.11.4"
}
// BOTTOM OF METADATA
});