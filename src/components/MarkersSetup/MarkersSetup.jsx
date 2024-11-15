import React from "react";
import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";
import MapMarker from "./MapMarker";

const createMapOptions = () => ({
  fullscreenControl: false,
  mapTypeControl: false,
  panControl: false,
  streetViewControl: false,
  zoomControl: true,
  gestureHandling: "greedy",
});

const defaultCenter = {
  lat: 36.14896463588831, // default latitude
  lng: -115.17517089843751, // default longitude
}) => (
  <div style={{ width: "100%", height: "100%" }}>
    <GoogleMapReact
      bootstrapURLKeys={{
        key: "AIzaSyBpfyrBMTrgHH3YnaGHxfjEN_w7OXBJoqc",
        v: "3.31",
      }}
      defaultCenter={center}
      defaultZoom={zoom}
      options={createMapOptions}
    >
      {locations.map((location) => (
        <MapMarker
          key={location.id}
          lat={location.lat}
          lng={location.lng}
          name={location.location_name}
          pageid={location.pageid}
          hoveredCardId={hoveredCardId}
        />
      ))}
    </GoogleMapReact>
  </div>
);

ConsolidatedMap.propTypes = {
  locations: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
      location_name: PropTypes.string,
      pageid: PropTypes.string,
    })
  ).isRequired,
  hoveredCardId: PropTypes.string,
  center: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }),
  zoom: PropTypes.number,
};

export default ConsolidatedMap;
