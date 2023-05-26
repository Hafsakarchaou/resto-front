import { useLocation } from 'react-router-dom';
import MyImg from '../Assets/resto.jpg';
import MyImg2 from '../Assets/restau1.jpg';
import Map from './Map';
import { useState, useEffect } from 'react';
import { Button, Modal, Row } from 'react-bootstrap';
import VilleService from '../services/VilleService';
import { Link } from 'react-router-dom';
import { Box, Typography, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

const ResultsComponent = (props) => {
    const location = useLocation();
    const [loading,setLoading]=useState(false);
    const [restaurants, setRestaurants] = useState([]);
    const searchParams = new URLSearchParams(location.search);
    const selectedVille = searchParams.get('v');
    const selectedZone = searchParams.get('z');
    const selectedSpecialite = searchParams.get('s');
    const selectedSerie = searchParams.get('se');
    console.log("selectedSerie:", selectedSerie);

    useEffect(() => {
        if (restaurants.length===0){
            getAllRestaurants();
        }
        else{
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
        if (!loading){
            return "Loading";
        }
    return (
        <div className="container-xxl position-relative p-0">
            <div className="container-xxl py-5 bg-light hero-header1 mb-5">
                <div className="container my-5 py-5">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 text-center text-lg-start reslts1">
                            <div className="scrollable-card-list" style={{ maxHeight: '500px', overflowY: 'auto' }}>
                                {restaurants.map((restaurant) => (
                                    <Card elevation={6} key={restaurant.id} style={{ marginBottom: '10px' }}>
                                        <CardMedia style={{ height: 350 }} image={MyImg} title={restaurant.nom} />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5">
                                                {restaurant.nom}
                                            </Typography>
                                            <Box display="flex" justifyContent="space-between" my={2}>
                                                <Rating name="read-only" value={restaurant.ran__} readOnly />
                                            </Box>
                                            <Box display="flex" justifyContent="space-between">
                                                <Typography component="legend">Price</Typography>
                                                <Typography gutterBottom variant="subtitle1">
                                                    {restaurant.nom}
                                                    {restaurant.latitude}
                                                </Typography>
                                            </Box>
                                            <Box display="flex" justifyContent="space-between">
                                                <Typography component="legend">Ranking</Typography>
                                                <Typography gutterBottom variant="subtitle1">
                                                    {restaurant.ran__}
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
