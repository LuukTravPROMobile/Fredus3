import React from "react";
import PropTypes from "prop-types";

const MapMarker = ({ name, hoveredCardId, pageid }) => (
  <div
    style={{
      color: hoveredCardId === pageid ? "red" : "blue",
      cursor: "pointer",
    }}
    title={name}
  >
    📍
  </div>
);

MapMarker.propTypes = {
  name: PropTypes.string.isRequired,
  hoveredCardId: PropTypes.string,
  pageid: PropTypes.string.isRequired,
};

MapComponent.propTypes = {
  locations: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
      location_name: PropTypes.string.isRequired,
      pageid: PropTypes.string.isRequired,
    })
  ).isRequired,
  hoveredCardId: PropTypes.string,
  center: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }),
  zoom: PropTypes.number,
};


export default MapMarker;

