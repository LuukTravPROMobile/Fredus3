import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const MapComponent = () => {
  const [markers, setMarkers] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);

  const handleMapClick = (event) => {
    const { lat, lng } = event.latLng.toJSON();
    const newMarker = {
      lat,
      lng,
      title: `Marker at point (${lat.toFixed(4)}, ${lng.toFixed(4)})`, // Customize title as needed
    };
    setMarkers((prevMarkers) => [...prevMarkers, newMarker]);
  };

  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
  };

  const mapContainerStyle = {
    height: '400px',
    width: '100%',
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyBpfyrBMTrgHH3YnaGHxfjEN_w7OXBJoqc">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={markers.length > 0 ? markers[0] : { lat: 36.14896463588831, lng: -115.17517089843751 }} // Center on first marker
        zoom={13}
        onClick={handleMapClick}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={{ lat: marker.lat, lng: marker.lng }}
            onClick={() => handleMarkerClick(marker)}
          />
        ))}

        {selectedMarker && (
          <InfoWindow
            position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
            onCloseClick={() => setSelectedMarker(null)}
          >
            <div>
              <h3>{selectedMarker.title}</h3>
              <p>Coordinates: ({selectedMarker.lat.toFixed(4)}, {selectedMarker.lng.toFixed(4)})</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
