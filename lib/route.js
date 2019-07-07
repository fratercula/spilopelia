"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _history = _interopRequireWildcard(require("./history"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Route(props) {
  var C = props.component,
      pathname = props.pathname,
      path = props.path;
  var match = (0, _history.matchPath)(pathname, path);

  if (!match) {
    return null;
  }

  return _react["default"].createElement(C, {
    match: match,
    location: {
      pathname: match.url
    },
    history: _history["default"]
  });
}

Route.propTypes = {
  component: _propTypes["default"].any.isRequired,
  pathname: _propTypes["default"].string.isRequired,
  path: _propTypes["default"].string.isRequired
};
var _default = Route;
exports["default"] = _default;