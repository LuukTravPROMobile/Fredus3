import React from "react";
import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";
import MapMarker from "./MapMarker.js";

cons olidatedMap = () => {
render() {
    const { locations, hoveredCardId } = this.props;
  
    const mapMarkers = locations.map((location) => (
      <MapMarker
        key={location.id}
        lat={location.lat}
        lng={location.lng}
        name={location.location_name}
        pageid={location.pageid}
        hoveredCardId={hoveredCardId}
      />
    ));
  
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
            v: "3.31",
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          options={createMapOptions}
        >
          {mapMarkers}
        </GoogleMapReact>
      </div>
    );
  }
  


    return (
        <div style={{ width: "100%", height: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key:"AIzaSyBpfyrBMTrgHH3YnaGHxfjEN_w7OXBJoqc",// Secure the API key
              v: "3.31",
            }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            hoverDistance={10} // Adjusted for clarity
            options={createMapOptions}
          >
            {mapMarkers}
          </GoogleMapReact>
        </div>
      );

MapAndMarkers.propTypes = {
  classes: PropTypes.object.isRequired
};
}

export default olidatedMap(styles)(MapAndMarkers);