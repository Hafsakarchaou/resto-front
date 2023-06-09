import React, { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { Box, Typography, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';
import Map from './Map';
import VilleService from '../services/VilleService';
import MyImg from '../Assets/resto.jpg';
import MyImg2 from '../Assets/restau1.jpg';


const ResultsComponent = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [restaurants, setRestaurants] = useState([]);
  const searchParams = new URLSearchParams(location.search);
  const selectedVille = searchParams.get('v');
  const selectedZone = searchParams.get('z');
  const selectedSpecialite = searchParams.get('s');
  const selectedSerie = searchParams.get('se');
  console.log("selectedSerie:", selectedSerie);

  useEffect(() => {
    if (restaurants.length === 0) {
      getAllRestaurants();
    } else {
      setLoading(true);
    }
  }, [restaurants]);

  const getAllRestaurants = () => {
    if (selectedSpecialite) {
      VilleService.restoInVilleInZoneWithSpecailite(
        selectedVille,
        selectedZone,
        selectedSpecialite
      )
        .then((response) => {
          setRestaurants(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (selectedSerie) {
      VilleService.restoInVilleInZoneWithSerie(
        selectedVille,
        selectedZone,
        selectedSerie
      )
        .then((response) => {
          setRestaurants(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("selectedSerie:", selectedSerie);
    }
  };

  const handleCardClick = (restaurant) => {
    localStorage.setItem('selectedRestaurant', JSON.stringify(restaurant));
    navigate('/itinerary');
  };

  if (!loading) {
    return "Loading";
  }

  return (
    <div className="container-xxl position-relative p-0">
      <div className="container-xxl py-5 bg-light hero-header1 mb-5">
        <div className="container my-5 py-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 text-center text-lg-start reslts1">
              <div
                className="scrollable-card-list"
                style={{ maxHeight: '500px', overflowY: 'auto' }}
              >
                {restaurants.map((restaurant) => (
                  <Card
                    elevation={6}
                    key={restaurant.id}
                    style={{ marginBottom: '10px', cursor: 'pointer' }}
                    onClick={() => handleCardClick(restaurant)}
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
                ))}
              </div>
            </div>
            <div className="col-lg-6 text-center text-lg-end overflow-hidden reslts1">
              <Map restaurants={restaurants} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsComponent;
