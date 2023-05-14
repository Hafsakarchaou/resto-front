import { useLocation } from 'react-router-dom';
import MyImg from '../Assets/resto.jpg';
import MyImg2 from '../Assets/restau1.jpg';

import { useEffect, useState } from "react";
import VilleService from "../services/VilleService";
//import { Loader } from "@googlemaps/js-api-loader";

const ResultsComponent = (props) => {
    const location = useLocation();
    const [restaurants, setRestaurants] = useState([]);
    const searchParams = new URLSearchParams(location.search);
    const selectedVille = searchParams.get('v');
    const selectedZone = searchParams.get('z');
    const selectedSpecialite = searchParams.get('s');
    const selectedSerie = searchParams.get('se');
    const [map, setMap] = useState(null);
    console.log("selectedSerie:", selectedSerie);
    useEffect(() => {
        getAllRestaurants();
    }, []);

    useEffect(() => {
        if (map) {
          // Add markers to the map for each restaurant
          restaurants.forEach((restaurant) => {
            const marker = new window.google.maps.Marker({
              position: { lat: restaurant.lat, lng: restaurant.lng },
              map: map,
              title: restaurant.nom,
            });
            const infoWindow = new window.google.maps.InfoWindow({
                content: `
                  <div>
                    <h5>${restaurant.nom}</h5>
                    <p>${restaurant.adresse}</p>
                  </div>
                `,
              });
              marker.addListener("click", () => {
                infoWindow.open(map, marker);
              });
            });
          }
        }, [restaurants, map]);
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
                    /*const loader = new Loader({
                        apiKey: "AIzaSyApNSMMooxbcl-W6a1KuJ7qZWMbW7U4kQU",
                        version: "weekly",
                      });
            
                      /*loader.load().then(() => {
                        const map = new window.google.maps.Map(document.getElementById("map"), {
                          center: { lat: response.data[0].lat, lng: response.data[0].lng },
                          zoom: 12,
                        });
            
                        setMap(map);
                      });*/
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

    return (
        /*<div className="container  container1">
            <div class="searchcont1">
                <div class="search">
                    <h2 className="searchRslt">Search Results</h2>
                    <Row className="searchRslt">
                        <div className="col-sm-6 rslt">
                            <h2 className="searchRslt1">Search Results</h2>
                            <div className="container">
                                <table className="table table-bordered table-striped">
                                    <thead>
                                        <th> Nom </th>
                                        <th> Adresse </th>
                                        <th> Rank </th>
                                    </thead>
                                    <tbody>
                                        {restaurants.map((restaurant) => (
                                            <tr key={restaurant.id}>
                                                <td> {restaurant.nom} </td>
                                                <td> {restaurant.adresse} </td>
                                                <td> {restaurant.ran__} </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-sm-6 rslt">
                            <h2 className="searchRslt1">Search Results</h2>
                        </div>
                    </Row>
                </div>
            </div>
        </div>*/
        <div className="container-xxl position-relative p-0">
            <div className="container-xxl py-5 bg-light hero-header1 mb-5">
                <div className="container my-5 py-5">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 text-center text-lg-start reslts1">
                            <div className="tab-content">
                                <div id="tab-1" className="tab-pane fade show p-0 active">
                                    <div className="row g-4">
                                        {restaurants.map((restaurant) => (
                                            <div className="col-lg-12">
                                                <div className="d-flex align-items-center">
                                                    <img className="flex-shrink-0 img-fluid rounded" src={MyImg} alt="" style={{ width: '80px' }} />
                                                    <div className="w-100 d-flex flex-column text-start ps-4">
                                                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                            <span>{restaurant.nom}</span>
                                                            <span className="text-primary">{restaurant.ran__}</span>
                                                        </h5>
                                                        <small className="fst-italic">{restaurant.adresse}</small>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 text-center text-lg-end overflow-hidden reslts1">
                        <div id="map" style={{ height: "400px" }}>
                            
                        </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResultsComponent;