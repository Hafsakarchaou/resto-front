import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Box, Typography, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';
import Map2 from './Map2';
import MyImg from '../Assets/restau1.jpg';

const ItineraryComponent = () => {
  const location = useLocation();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    const selectedRestaurant = JSON.parse(localStorage.getItem('selectedRestaurant'));
    setRestaurant(selectedRestaurant);
  }, []);

  if (!restaurant) {
    return (
      <div className="container">
        <Typography variant="h6">No restaurant selected</Typography>
        <Link to="/results">Go back to results</Link>
      </div>
    );
  }

  return (
    <div className="container-xxl position-relative p-0">
      <div className="container-xxl py-5 bg-light hero-header1 mb-5">
        <div className="container my-5 py-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 text-center text-lg-start reslts1">
            <Card
                    elevation={6}
                    key={restaurant.id}
                    style={{ marginBottom: '10px', cursor: 'pointer' }}
                  >
                    <CardMedia style={{ height: 350 }} image={MyImg} title={restaurant.nom} />
                    <CardContent>
                      <Typography gutterBottom variant="h5">
                        {restaurant.nom}
                      </Typography>
                      <Box display="flex" justifyContent="space-between" my={2}>
                        <Rating name="read-only" value={restaurant.ranking} readOnly />
                      </Box>
                      <Box display="flex" justifyContent="space-between">
                        
                        <Typography gutterBottom variant="subtitle1">
                          {restaurant.nom}
                          {restaurant.location}
                        </Typography>
                      </Box>
                      <Box display="flex" justifyContent="space-between">
                        <Typography component="legend">Ranking</Typography>
                        <Typography component="legend">{restaurant.ran__}</Typography>
                        <Typography gutterBottom variant="subtitle1">
                          {restaurant.ranking}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
            </div>
            <div className="col-lg-6 text-center text-lg-end overflow-hidden reslts1">
              <Map2 restaurant={restaurant} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItineraryComponent;
