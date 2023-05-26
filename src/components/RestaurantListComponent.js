import React, { useState, useEffect } from 'react'
import RestoService from '../services/RestoService'
import { Link } from 'react-router-dom'

const RestaurantListComponent = () => {
    const [restaurant, setRestaurant] = useState([])


    useEffect(() => {

        getAllRestaurants();
    }, [])

    const getAllRestaurants = () => {
        RestoService.getAllRestaurants().then((response) => {
            setRestaurant(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }
    const deleteRestaurant = (restaurantId) => {
        RestoService.deleteRestaurant(restaurantId).then((response) => {
            getAllRestaurants();

        }).catch(error => {
            console.log(error);
        })

    }
    return (
        <div class="container-xl container1">
            <div class="table-responsive">
                <div class="table-wrapper">
                    <div class="table-title">
                        <div class="row">
                            <div class="col-sm-5">
                                <h2><b>Restaurants</b></h2>
                            </div>
                            <div class="col-sm-7">
                                <Link to="add-restaurant" className="btn btn-primary mb-2"> <a href="#" class="btn btn-secondary"><i class="material-icons">&#xE147;</i> <span>Add New Restaurant</span></a></Link>
                            </div>
                        </div>
                    </div>
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Adresse</th>
                                <th>Rank</th>
                                <th>Ouverture</th>
                                <th>Fermeture</th>
                                <th> Actions </th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                restaurant.map(
                                    restaurant =>
                                        <tr key={restaurant.id}>
                                            <td> {restaurant.id} </td>
                                            <td> {restaurant.nom} </td>
                                            <td> {restaurant.adresse} </td>
                                            <td> {restaurant.ran__} </td>
                                            <td> {restaurant.heure_ouverture} </td>
                                            <td> {restaurant.heure_fermeture} </td>
                                            <td>
                                                
                                                <a href="#" class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons" onClick={() => deleteRestaurant(restaurant.id)}>&#xE5C9;</i></a>
                                                <Link to={`/admin/edit-restaurant/${restaurant.id}`} ><a href="#" class="settings" title="Settings" data-toggle="tooltip"><i class="material-icons">&#xE8B8;</i></a></Link>

                                               
                                                
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default RestaurantListComponent