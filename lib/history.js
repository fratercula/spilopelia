"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.matchPath = exports.getPathName = exports.regex = void 0;

var _history = require("history");

var _pathToRegexp = _interopRequireDefault(require("path-to-regexp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { if (i % 2) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } else { Object.defineProperties(target, Object.getOwnPropertyDescriptors(arguments[i])); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var PREFIX = '__sub_router__';
var history = (0, _history.createHashHistory)();
var regex = new RegExp("".concat(PREFIX, "=(.*?)[?&]"));
exports.regex = regex;

var getPath = function getPath(path) {
  var _history$location = history.location,
      pathname = _history$location.pathname,
      search = _history$location.search;
  var current = "".concat(pathname).concat(search, "&");
  var match = current.match(regex);

  if (!match) {
    var sub = "".concat(PREFIX, "=").concat(path);
    return "".concat(pathname).concat(search ? "".concat(search, "&").concat(sub) : "?".concat(sub));
  }

  var result = current.replace("".concat(PREFIX, "=").concat(match[1]), "".concat(PREFIX, "=").concat(path));
  return result.substr(0, result.length - 1);
};

var _push = history.push,
    _replace = history.replace,
    location = history.location,
    rest = _objectWithoutProperties(history, ["push", "replace", "location"]);

var getHistory = _objectSpread({}, rest, {
  push: function push(path) {
    return _push(getPath(path));
  },
  replace: function replace(path) {
    return _replace(getPath(path));
  }
});

Object.defineProperty(getHistory, 'location', {
  get: function get() {
    return history.location;
  }
});

var getPathName = function getPathName() {
  var search = history.location.search;
  var match = "".concat(search, "&").match(regex);
  return match && match[1] ? match[1] : '/';
};

exports.getPathName = getPathName;

var matchPath = function matchPath(pathname, path) {
  var keys = [];
  var re = (0, _pathToRegexp["default"])(path, keys);
  var match = re.exec(pathname);

  if (!match) {
    return null;
  }

  var _match = _toArray(match),
      url = _match[0],
      values = _match.slice(1);

  var params = keys.reduce(function (memo, key, index) {
    memo[key.name] = values[index]; // eslint-disable-line no-param-reassign

    return memo;
  }, {});
  return {
    url: url,
    path: path,
    params: params
  };
};

exports.matchPath = matchPath;
var _default = getHistory;
exports["default"] = _default;