
            (function(modules) {
                function require(fileName) {
                    const fn = modules[fileName];
        
                    const module = { exports : {} };
        
                    fn(require, module, module.exports);
        
                    return module.exports;
                }

                require('/Users/xiaohui/Desktop/myProject/simple-webpack/src/index.js');
            })({'/Users/xiaohui/Desktop/myProject/simple-webpack/src/index.js': function (require, module, exports) { "use strict";

var _utils = require("./utils.js");

document.write((0, _utils.getName)('xiaoHui')); },'./utils.js': function (require, module, exports) { "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getName = getName;
function getName(name) {
  return 'hello' + name;
} },})
        