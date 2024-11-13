"use strict";

var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Card = _ref => {
  let {
    text,
    buttonText
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "card"
  }, /*#__PURE__*/_react.default.createElement("p", null, history), /*#__PURE__*/_react.default.createElement("button", null, buttonText));
};