"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.button = exports.div = void 0;

var _x = _interopRequireDefault(require("./x.js"));

var _BlkHo = _interopRequireDefault(require("./assets/BlkHo.gif"));

var _ = _interopRequireDefault(require("./assets/1.png"));

var _hardwork = _interopRequireDefault(require("./hardwork.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var div = document.getElementById('app'); // console.log('div')
// console.log(div)

exports.div = div;
div.innerHTML = "\n  <img src=\"".concat(_["default"], "\">\n");
var button = document.createElement('button');
exports.button = button;
button.innerText = '懒加载';

button.onclick = function () {
  console.log("点击了 button");
  var lazyPromise = Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./lazy.js'));
  }); // 加载时异步的 拿到的是一个 Promise对象实例

  lazyPromise.then(function (module) {
    console.log(module);
    var fn = module["default"];
    fn(2, 3);
  }, function () {
    console.log("模块加载错误");
  });
};

div.appendChild(button); // console.log(hardwork(3,2))
// hardwork(2,7)
//# sourceMappingURL=index.dev.js.map
