import React, { useEffect, useState } from 'react';
import { GoogleMap, useLoadScript, MarkerF, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';
import MyImg from '../Assets/resto.jpg';

const Map2 = ({ restaurant }) => {
  const [userPosition, setUserPosition] = useState(null);
  const [directions, setDirections] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyApNSMMooxbcl-W6a1KuJ7qZWMbW7U4kQU',
  });

  if (!isLoaded) {
    return "Loading";
  }

  const center = {
    lat: restaurant.latitude,
    lng: restaurant.longitude,
  };

  const directionsOptions = {
    destination: center,
    origin: userPosition,
    travelMode: 'DRIVING',
  };

  const directionsCallback = (response) => {
    if (response !== null) {
      if (response.status === 'OK') {
        setDirections(response);
      } else {
        console.log('Directions request failed:', response);
      }
    }
  };

  return (
    <div className="mapContainer">
      <GoogleMap mapContainerClassName="mapContainer" center={center} zoom={14}>
        {userPosition && (
          <MarkerF
            position={userPosition}
            label="Your Location"
          />
        )}
        {restaurant && (
          <MarkerF
            position={center}
            label={restaurant.nom}
          />
        )}
        {userPosition && (
          <DirectionsService
            options={directionsOptions}
            callback={directionsCallback}
          />
        )}
        {directions && (
          <DirectionsRenderer
            options={{
              directions: directions,
            }}
          />
        )}
      </GoogleMap>
    </div>
  );
};
export default Map2;