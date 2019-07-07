"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _history = require("./history");

var _link = _interopRequireDefault(require("./link"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { if (i % 2) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } else { Object.defineProperties(target, Object.getOwnPropertyDescriptors(arguments[i])); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var empty = function empty() {
  return null;
};

function NavLink(props) {
  var activeClassName = props.activeClassName,
      activeStyle = props.activeStyle,
      classNames = props.className,
      isActiveFn = props.isActive,
      styles = props.style,
      to = props.to,
      rest = _objectWithoutProperties(props, ["activeClassName", "activeStyle", "className", "isActive", "style", "to"]);

  var pathname = (0, _history.getPathName)();
  var match = (0, _history.matchPath)(pathname, to);
  var isActive = isActiveFn === empty ? match : isActiveFn(match, {
    pathname: pathname
  });
  var className = isActive ? "".concat(classNames, " ").concat(activeClassName) : classNames;
  var style = isActive ? _objectSpread({}, styles, {}, activeStyle) : styles;
  return _react["default"].createElement(_link["default"], _extends({
    style: style,
    className: className,
    to: to
  }, rest));
}

NavLink.propTypes = {
  activeClassName: _propTypes["default"].string,
  activeStyle: _propTypes["default"].object,
  className: _propTypes["default"].string,
  isActive: _propTypes["default"].func,
  style: _propTypes["default"].object,
  to: _propTypes["default"].string.isRequired
};
NavLink.defaultProps = {
  activeClassName: 'active',
  className: '',
  isActive: empty,
  style: {},
  activeStyle: {}
};
var _default = NavLink;
exports["default"] = _default;