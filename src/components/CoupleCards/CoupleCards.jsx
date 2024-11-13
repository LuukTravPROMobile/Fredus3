import React, { useState, useCallback } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const MapComponent = () => {
  const [selectedMarker, setSelectedMarker] = useState(null);

  const mapContainerStyle = {
    height: '400px',
    width: '100%',
  };

  const center = selectedMarker
    ? { lat: selectedMarker.lat, lng: selectedMarker.lng }
    : { lat: 36.14896463588831, lng: -115.17517089843751 };

  const handleMapClick = useCallback((event) => {
    const { lat, lng } = event.latLng.toJSON();
    setSelectedMarker({ lat, lng, title: `Marker at (${lat.toFixed(4)}, ${lng.toFixed(4)})` });
  }, []);

  return (
    <LoadScript googleMapsApiKey="AIzaSyBpfyrBMTrgHH3YnaGHxfjEN_w7OXBJoqc">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={13}
        onClick={handleMapClick}
      >
        {selectedMarker && (
          <Marker
            position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
            onClick={() => setSelectedMarker(null)} // Deselect marker on click
          />
        )}
        
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

