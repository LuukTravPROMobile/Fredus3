"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _api = require("@react-google-maps/api");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const MapComponent = () => {
  const [markers, setMarkers] = (0, _react.useState)([]);
  const [selectedMarker, setSelectedMarker] = (0, _react.useState)(null);
  const handleMapClick = event => {
    const {
      lat,
      lng
    } = event.latLng.toJSON();
    const newMarker = {
      lat,
      lng,
      title: `Marker at point (${lat.toFixed(4)}, ${lng.toFixed(4)})` // Customize title as needed
    };
    setMarkers(prevMarkers => [...prevMarkers, newMarker]);
  };
  const handleMarkerClick = marker => {
    setSelectedMarker(marker);
  };
  const mapContainerStyle = {
    height: '400px',
    width: '100%'
  };
  return /*#__PURE__*/_react.default.createElement(_api.LoadScript, {
    googleMapsApiKey: "AIzaSyBpfyrBMTrgHH3YnaGHxfjEN_w7OXBJoqc"
  }, /*#__PURE__*/_react.default.createElement(_api.GoogleMap, {
    mapContainerStyle: mapContainerStyle,
    center: markers.length > 0 ? markers[0] : {
      lat: 36.14896463588831,
      lng: -115.17517089843751
    } // Center on first marker
    ,
    zoom: 13,
    onClick: handleMapClick
  }, markers.map((marker, index) => /*#__PURE__*/_react.default.createElement(_api.Marker, {
    key: index,
    position: {
      lat: marker.lat,
      lng: marker.lng
    },
    onClick: () => handleMarkerClick(marker)
  })), selectedMarker && /*#__PURE__*/_react.default.createElement(_api.InfoWindow, {
    position: {
      lat: selectedMarker.lat,
      lng: selectedMarker.lng
    },
    onCloseClick: () => setSelectedMarker(null)
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h3", null, selectedMarker.title), /*#__PURE__*/_react.default.createElement("p", null, "Coordinates: (", selectedMarker.lat.toFixed(4), ", ", selectedMarker.lng.toFixed(4), ")")))));
};
var _default = exports.default = MapComponent;