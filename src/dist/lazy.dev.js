"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = lazy;

var _index = require("./index.js");

var _BlkHo = _interopRequireDefault(require("./assets/BlkHo.gif"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function lazy(a, b) {
  console.log('我是一个懒加载的模块');
  _index.div.innerHTML += "\n  <img src=\"".concat(_BlkHo["default"], "\">\n");
  return console.log(a * b);
}
//# sourceMappingURL=lazy.dev.js.map
