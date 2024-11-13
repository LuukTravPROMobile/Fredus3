"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Card = _ref => {
  let {
    bedrijfsnaam,
    city,
    state,
    phone,
    addr1,
    web_url,
    number
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "card"
  }, /*#__PURE__*/_react.default.createElement("p", null, bedrijfsnaam), /*#__PURE__*/_react.default.createElement("p", null, city), /*#__PURE__*/_react.default.createElement("p", null, state), /*#__PURE__*/_react.default.createElement("p", null, addr1), /*#__PURE__*/_react.default.createElement("button", null, web_url), /*#__PURE__*/_react.default.createElement("button", null, phone), /*#__PURE__*/_react.default.createElement("button", null, number));
};
var _default = exports.default = Card;