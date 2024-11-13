"use strict";

var _react = _interopRequireDefault(require("react"));
var _client = _interopRequireDefault(require("react-dom/client"));
var _App = _interopRequireDefault(require("./App"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const el = document.getElementById('root');

//3) tell react to take control of that element
const root = _client.default.createRoot(el);
//4) create a component

//5) show the component on the screen 
root.render(/*#__PURE__*/_react.default.createElement(_App.default, null));