"use strict";

var _react = _interopRequireDefault(require("react"));
var _client = _interopRequireDefault(require("react-dom/client"));
var _App = _interopRequireDefault(require("./App"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const el = document.getElementById("root");

// Ensure the 'root' element exists before trying to use it
if (el) {
  const root = _client.default.createRoot(el);
  root.render(/*#__PURE__*/_react.default.createElement(_react.default.StrictMode, null, /*#__PURE__*/_react.default.createElement(_App.default, null)));
} else {
  console.error("Root element not found");
}