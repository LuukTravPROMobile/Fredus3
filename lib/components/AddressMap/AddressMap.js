"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _api = require("@react-google-maps/api");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const mapContainerStyle = {
  width: "700px",
  // height: '2000px',
  float: "left"
};
const defaultCenter = {
  lat: 36.14896463588831,
  // default latitude
  lng: -115.17517089843751 // default longitude
};
const createPositionMarker = (lat, lng) => {
  return {
    lat: Number(lat),
    lng: Number(lng)
  };
};
const AddressMap = _ref => {
  let {
    hotels
  } = _ref;
  console.log(hotels);
  return /*#__PURE__*/_react.default.createElement(_api.LoadScript, {
    googleMapsApiKey: "AIzaSyBpfyrBMTrgHH3YnaGHxfjEN_w7OXBJoqc"
  }, /*#__PURE__*/_react.default.createElement(_api.GoogleMap, {
    mapContainerStyle: mapContainerStyle,
    zoom: 10,
    center: defaultCenter
  }, hotels.map((hotel, index) => {
    // Create position marker for each hotel
    const position = createPositionMarker(hotel.latitude, hotel.longitude);
    return /*#__PURE__*/_react.default.createElement(_api.Marker, {
      key: index,
      position: position // Use position directly
      ,
      label: String(index + 1)
    });
  })));
};
var _default = exports.default = AddressMap;