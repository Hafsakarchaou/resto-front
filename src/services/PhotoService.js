import React from 'react'
import axios from "axios";
const RESTAURANT_BASE_REST_API_URL = 'http://localhost:8081/photos';
class PhotoService {
    createPhoto(photo){
        return axios.post(RESTAURANT_BASE_REST_API_URL+"/save",photo)
    }

}

export default new PhotoService();