"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = hardwork;

var _index = require("./index.js");

var _aaa = _interopRequireDefault(require("./assets/aaa.gif"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function hardwork(a, b) {
  console.log('我是一个立即加载的模块');
  _index.div.innerHTML += "\n  <img src=\"".concat(_aaa["default"], "\">\n");
  return console.log(a + b);
}
//# sourceMappingURL=hardwork.dev.js.map
