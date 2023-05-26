import axios from "axios";

const SPECIALITE_BASE_REST_API_URL = 'http://localhost:8081/specialites';

class SpecialitesService{

    getAllSpecialites(){
        return axios.get(SPECIALITE_BASE_REST_API_URL+"/all")
    }
    createSpecialites(specialite){
        return axios.post(SPECIALITE_BASE_REST_API_URL+"/save",specialite)
    }
    getSpecialiteById(specialiteId){
        return axios.get(SPECIALITE_BASE_REST_API_URL+ '/' + specialiteId);
    }

    updateSpecialite(specialiteId,specialite){
        return axios.put(SPECIALITE_BASE_REST_API_URL + "/update/" + specialiteId ,specialite);
    }
    deleteSpecialite(specialiteId){
        return axios.delete(SPECIALITE_BASE_REST_API_URL+ '/delete/' + specialiteId);
    }
   
}

export default new SpecialitesService();