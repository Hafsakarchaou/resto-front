import React, { Component } from 'react';

class Map extends Component {
  componentDidMount() {
    const mapOptions = {
      zoom: 12,
      center: { lat: 37.7749, lng: -122.4194 }, // San Francisco
    };
    this.map = new window.google.maps.Map(this.refs.map, mapOptions);

    // Create a marker for each restaurant
    this.props.restaurants.forEach((restaurant) => {
      const marker = new window.google.maps.Marker({
        position: { lat: restaurant.latitude, lng: restaurant.longitude },
        map: this.map,
        title: restaurant.name,
      });

      // Add an event listener to the marker
      marker.addListener('click', () => {
        // Display information about the restaurant
        console.log(restaurant);
      });
    });
  }

  render() {
    return <div ref="map" style={{ height: '500px', width: '100%' }} />;
  }
}

export default Map;