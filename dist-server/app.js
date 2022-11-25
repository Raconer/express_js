"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _path = _interopRequireDefault(require("path"));
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
var _morgan = _interopRequireDefault(require("morgan"));
var _index = _interopRequireDefault(require("./routes/index.js"));
var _users = _interopRequireDefault(require("./routes/users.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _dirname = _path["default"].resolve();
var app = (0, _express["default"])();

// view engine setup
app.set('views', _path["default"].join(_dirname, 'views'));
app.set('view engine', 'jade');
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use((0, _cookieParser["default"])());
app.use(_express["default"]["static"](_path["default"].join(_dirname, '../public')));
app.use('/', _index["default"]);
app.use('/users', _users["default"]);
var _default = app;
exports["default"] = _default;