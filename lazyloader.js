var fs = require('fs');
var path = require('path');

module.exports = function (filePath) {
    var Handler = {};
    var args = Array.prototype.slice.call(arguments, 1);
    
    var load = function(path, name) {
        if (name) {
            return require(path + name).apply(null, args);
        }
        return require(path).apply(null, args);
    };

    (function () {
        fs.readdirSync(filePath).forEach(function (filename) {
            if (!/\.js$/.test(filename)) {
                return;
            }
            var name = path.basename(filename, '.js');
            var _load = load.bind(null, filePath + '/', name);

            Handler.__defineGetter__(name, _load);
        });
    })();

    return Handler;
}
