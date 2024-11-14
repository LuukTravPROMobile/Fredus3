import React, { useEffect, useRef } from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

const GoogleMap = ({ googlePointer, googleZoom }) => {
  const mapRef = useRef(null); // Reference to the map DOM element

  useEffect(() => {
    if (!window.google) {
      console.error("Google Maps JavaScript API library is not loaded.");
      return;
    }

    // Initialize the Geocoder
    const geocoder = new window.google.maps.Geocoder();

    // Geocode the provided address
    geocoder.geocode({ address: googlePointer }, (results, status) => {
      if (status === window.google.maps.GeocoderStatus.OK) {
        // Options for the map
        const mapOptions = {
          zoom: parseInt(googleZoom, 10),
          center: results[0].geometry.location,
          mapTypeId: window.google.maps.MapTypeId.ROADMAP,
        };

        // Initialize the map
        const map = new window.google.maps.Map(mapRef.current, mapOptions);

        // Place a marker on the map
        new window.google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
          title: googlePointer,
        });
      } else {
        console.log("Geocode was not successful for the following reason: " + status);
      }
    });
  }, [googlePointer, googleZoom]); // Re-run if googlePointer or googleZoom changes

  return (
    <div
      ref={mapRef}
      style={{ width: "100%", height: "500px" }} // Set map dimensions
      id="map_canvas"
    />
  );
};

export default GoogleMap;
