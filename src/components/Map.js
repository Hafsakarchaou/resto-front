import React, { useState } from 'react';
import { GoogleMap, useLoadScript,MarkerF } from "@react-google-maps/api";
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import { Rating } from '@material-ui/lab';
import MyImg from '../Assets/resto.jpg';

const Map = ({ restaurants }) => {
  const matches = useMediaQuery('(min-width:600px)');

  // Calculate the average latitude and longitude for centering the map
  const totalRestaurants = restaurants.length;
  const [markerPositions, setMarerPositions]=useState(restaurants);
  const centerLat = restaurants.reduce((sum, restaurant) => sum + restaurant.latitude, 0) / totalRestaurants;
  const centerLng = restaurants.reduce((sum, restaurant) => sum + restaurant.longitude, 0) / totalRestaurants;
  const handleMapChange = ({ center }) => {
    const updatedmarkers=markerPositions.map((marker) => { 
      return {
        ...marker,
        latitude: marker.latitude,
        longitude: marker.longitude,
      }

      
    });
    console.log(updatedmarkers);
    console.log(markerPositions);
    setMarerPositions(updatedmarkers);
  };
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyApNSMMooxbcl-W6a1KuJ7qZWMbW7U4kQU',
  });
  if(!isLoaded)
  {
    return "loading";
  }
  return (
    <div className="mapContainer">
      <GoogleMap 
      mapContainerClassName='mapContainer'
        center={{ lat: centerLat, lng: centerLng }}
        zoom={14}
      >
        {markerPositions.map((restaurant) => (
          <MarkerF /*icon={{
            url: MyImg, // Assign the restaurant image as the marker icon
            scaledSize: new window.google.maps.Size(40, 40), // Set the size of the marker icon
          }}*/ key={restaurant.id} position={{lat:restaurant.latitude,lng:restaurant.longitude}} label={restaurant.nom}/>
        ))}
      </GoogleMap>
    </div>
  );
};

export default Map;
