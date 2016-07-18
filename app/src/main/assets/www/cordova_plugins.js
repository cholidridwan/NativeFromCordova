cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.example.hello/www/hello.js",
        "id": "com.example.hello.hello",
        "clobbers": [
            "hello"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.example.hello": "0.7.0",
    "cordova-plugin-whitelist": "1.2.2"
};
// BOTTOM OF METADATA
});