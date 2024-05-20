import { useState } from 'react';
import { GoogleMap, Marker, DirectionsRenderer } from 'react-google-maps';

const ChurchLocation = () => {
  const churchCoordinates = { lat: 37.7749, lng: -122.4194 }; // Replace with the church location coordinates
  const [directions, setDirections] = useState(null);

  const handleGetDirections = () => {
    const origin = new google.maps.LatLng(userLocation); // Get the user's location
    const destination = new google.maps.LatLng(churchCoordinates);
    const request = {
      origin,
      destination,
      travelMode: 'DRIVING',
    };
    const directionsService = new google.maps.DirectionsService();
    directionsService.route(request, (response, status) => {
      if (status === 'OK') {
        setDirections(response);
      }
    });
  };

  return (
    <GoogleMap
      center={churchCoordinates}
      zoom={12}
    >
      <Marker position={churchCoordinates} />
      {directions && (
        <DirectionsRenderer directions={directions} />
      )}
      <button onClick={handleGetDirections}>Get Directions</button>
    </GoogleMap>
  );
};

export default ChurchLocation