import React from 'react'
import { Link } from 'react-router-dom'
import VilleService from '../services/VilleService';
import ZoneService from '../services/ZoneService';
import SpecialiteService from '../services/SpecialiteService';
import RestoService from '../services/RestoService';
import { useState, useEffect } from 'react'

const HomeComponent = () => {
    const [numCities, setNumCities] = useState(0);
    const [numZones, setNumZones] = useState(0);
    const [numSpecialities, setNumSpecialities] = useState(0);
    const [numSeries, setNumSeries] = useState(0);

    useEffect(() => {
        // count the number of cities
        VilleService.getAllVilles()
            .then((response) => {
                setNumCities(response.data.length);
            })
            .catch((error) => {
                console.log(error);
            });

        // count the number of zones
        ZoneService.getAllZones()
            .then((response) => {
                setNumZones(response.data.length);
            })
            .catch((error) => {
                console.log(error);
            });

        // count the number of specialities
        SpecialiteService.getAllSpecialites()
            .then((response) => {
                setNumSpecialities(response.data.length);
            })
            .catch((error) => {
                console.log(error);
            });

        // count the number of series
        RestoService.getAllRestaurants()
            .then((response) => {
                setNumSeries(response.data.length);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <div className="container1">
            <div id="wrapper">
                <div class="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 class="h3 mb-0 text-gray-800">Hello back!</h1>
                </div>

                <div class="row">


                    <div class="col-xl-3 col-md-6 mb-4">
                        <div class="card border-left-primary shadow h-100 py-2 cards">
                            <div class="card-body cards">
                                <div class="row no-gutters align-items-center">
                                    <div class="col mr-2">
                                        <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                            Cities</div>
                                        <div class="h5 mb-0 font-weight-bold text-gray-800">{numCities}</div>
                                    </div>
                                    <div class="col-auto">
                                        <i class="fas fa-city fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="col-xl-3 col-md-6 mb-4">
                        <div class="card border-left-success shadow h-100 py-2 cards">
                            <div class="card-body cards">
                                <div class="row no-gutters align-items-center">
                                    <div class="col mr-2">
                                        <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                            Zones</div>
                                        <div class="h5 mb-0 font-weight-bold text-gray-800"> {numZones}</div>
                                    </div>
                                    <div class="col-auto">
                                        <i class="fas fa-location-arrow fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="col-xl-3 col-md-6 mb-4">
                        <div class="card border-left-info shadow h-100 py-2 ">
                            <div class="card-body cards">
                                <div class="row no-gutters align-items-center">
                                    <div class="col mr-2">
                                        <div class="text-xs font-weight-bold text-info text-uppercase mb-1">Specalites
                                        </div>
                                        <div class="row no-gutters align-items-center">
                                            <div class="col-auto">
                                                <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">{numSpecialities}</div>
                                            </div>
                                            <div class="col">


                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <i class="fas fa-money-check fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="col-xl-3 col-md-6 mb-4">
                        <div class="card border-left-warning shadow h-100 py-2 ">
                            <div class="card-body cards">
                                <div class="row no-gutters align-items-center">
                                    <div class="col mr-2">
                                        <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                            Restaurants</div>
                                        <div class="h5 mb-0 font-weight-bold text-gray-800">{numSeries}</div>
                                    </div>
                                    <div class="col-auto">
                                        <i class="fas fa-utensils fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">

                    <div class="col-xl-5 col-lg-7">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Manage the app</h6>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-6 mb-4">
                                        <Link to="/ville/add-city" className='lnk'>
                                            <div className="card bg-primary text-white shadow">
                                                <div className="card-body">
                                                    Add a city

                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-lg-6 mb-4">
                                        <Link to="/zones/add-zone" className='lnk'>
                                            <div className="card bg-success text-white shadow">
                                                <div className="card-body ">
                                                    Add a zone

                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-lg-6 mb-4">
                                        <Link to="specialites/add-specialite" className='lnk'>
                                            <div className="card bg-info text-white shadow">
                                                <div className="card-body" >
                                                    Add a speciality

                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-lg-6 mb-4">
                                        <Link to="series/add-serie" className='lnk'>
                                            <div className="card bg-warning text-white shadow">
                                                <div className="card-body">
                                                    Add a serie

                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*<canvas id="myPieChart"></canvas>*/}
                    <div class="col-xl-7 col-lg-5">
                        <div class="card shadow mb-4">
                            <div class="card-header py-3">
                                <h6 class="m-0 font-weight-bold text-primary">Add a restaurant</h6>
                            </div>
                            <div class="card-body">
                                <form class="user">
                                    <div class="form-group">
                                        <input type="text" class="form-control form-control-user" id="exampleFirstName" placeholder="Name" />
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control form-control-user" id="exampleInputPassword" placeholder="Address" />
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control form-control-user" id="exampleInputEmail" placeholder="Phone Number" />
                                    </div>
                                    <a href="#" class="btn btn-primary btn-user btn-block">Add Restaurant</a>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>



    )
}

export default HomeComponent