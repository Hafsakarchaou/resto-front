import React from 'react'
import axios from "axios";
const RESTAURANT_BASE_REST_API_URL = 'http://localhost:8081/restaurants';
class RestoService {
    getAllRestaurants(){
        return axios.get(RESTAURANT_BASE_REST_API_URL+"/all")
    }
    createRestaurants(restaurant){
        return axios.post(RESTAURANT_BASE_REST_API_URL+"/save",restaurant)
    }
    getRestaurantById(restaurantId){
        return axios.get(RESTAURANT_BASE_REST_API_URL+ '/' + restaurantId);
    }

    updateRestaurant(restaurantId,restaurant){
        return axios.put(RESTAURANT_BASE_REST_API_URL + "/update/" + restaurantId ,restaurant);
    }
    deleteRestaurant(restaurantId){
        return axios.delete(RESTAURANT_BASE_REST_API_URL+ '/delete/' + restaurantId);
    }
}

export default new RestoService();