"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const PopUpHeader = () => {
  const [isOpen, setIsOpen] = (0, _react.useState)(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("button", {
    onClick: togglePopup,
    style: {
      margin: "20px",
      padding: "10px",
      border: "5px solid #176fec"
    }
  }, isOpen ? "Close Menu" : "Open Menu"), isOpen && /*#__PURE__*/_react.default.createElement("div", {
    style: {
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#00072d",
      padding: "20px",
      border: "2px solid #00072D",
      borderRadius: "15px",
      zIndex: 1001
    }
  }, /*#__PURE__*/_react.default.createElement("header", {
    style: {
      backgroundColor: "#00072D",
      border: "5px solid #176fec",
      textAlign: "center",
      borderRadius: "15px",
      padding: "10px"
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "https://www.travpromobile.com/wp-content/uploads/TravPROMobile2024_logo.png",
    alt: "TravProMobile Logo",
    style: {
      width: "180px",
      height: "70px",
      margin: "10px",
      padding: "10px"
    }
  }), /*#__PURE__*/_react.default.createElement("img", {
    src: "https://www.travpromobile.com/wp-content/uploads/travpromobile-thesource-qrcode-1600x1600.png",
    alt: "TravProMobile QR Code",
    style: {
      width: "100px",
      height: "100px",
      margin: "10px",
      padding: "10px"
    }
  }), /*#__PURE__*/_react.default.createElement("p", {
    style: {
      color: "#f1620a"
    }
  }, "Find the best hotels in Las Vegas, USA!"), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("button", null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://www.travpromobile.com",
    className: "home-btn",
    style: {
      margin: "10px",
      padding: "10px"
    }
  }, "Home"), /*#__PURE__*/_react.default.createElement("a", {
    href: "https://www.travpromobile.com/about/",
    className: "About-btn",
    gggggg: true,
    style: {
      margin: "10px",
      padding: "10px"
    }
  }, "About"), /*#__PURE__*/_react.default.createElement("a", {
    href: "https://www.travpromobile.com/pro-training/",
    className: "Training-btn",
    style: {
      margin: "10px",
      padding: "10px"
    }
  }, "Training")))))));
};
var _default = exports.default = PopUpHeader;