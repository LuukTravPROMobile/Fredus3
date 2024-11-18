import React from "react";
import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";
import MapMarker from "./MapMarker";
const defaultCenter = {
  lat: 36.14896463588831, // default latitude
  lng: -115.17517089843751, // default longitude
};

const MapComponent = ({
  locations,
  hoveredCardId,
  center = defaultCenter,
  zoom = 10,
}) => (
  <div style={{ width: "100%", height: "100%" }}>
    <GoogleMapReact
      bootstrapURLKeys={{
        key: "AIzaSyBpfyrBMTrgHH3YnaGHxfjEN_w7OXBJoqc",
        v: "3.31",
      }}
      defaultCenter={center}
      defaultZoom={zoom}
      options={{
        fullscreenControl: false,
        mapTypeControl: false,
        panControl: false,
        streetViewControl: false,
        zoomControl: true,
        gestureHandling: "greedy",
      }}
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

export default MapComponent;
