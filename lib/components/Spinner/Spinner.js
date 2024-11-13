"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const spinnerAnimation = `
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;
const Spinner = () => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, spinnerAnimation), " ", /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-block',
      width: '80px',
      height: '80px',
      border: '10px solid rgba(0, 0, 0, 0.1)',
      borderTop: '10px solid #3498db',
      borderRadius: '50%',
      animation: 'spin 5s linear infinite',
      color: 'black'
    }
  })));
};
var _default = exports.default = Spinner;