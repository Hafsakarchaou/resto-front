import axios from "axios";

const VILLE_BASE_REST_API_URL = 'http://localhost:8081/villes';

class VilleService{
    getAllVilles(){
        return axios.get(VILLE_BASE_REST_API_URL+"/all")
    }
    getZoneByVille(nom){
        return axios.get(VILLE_BASE_REST_API_URL+ "/" + nom +"/zones")
    }
    createVille(ville){
        return axios.post(VILLE_BASE_REST_API_URL+"/save",ville)
    }
    getVilleById(villeId){
        return axios.get(VILLE_BASE_REST_API_URL+ '/' + villeId);
    }

    updateVille(villeId,ville){
        return axios.put(VILLE_BASE_REST_API_URL + "/update/" + villeId ,ville);
    }
    deleteVille(villeId){
        return axios.delete(VILLE_BASE_REST_API_URL+ '/delete/' + villeId);
    }
    restoInVilleInZoneWithSpecailite(nomV, nomZ,specialite){
        return axios.get(VILLE_BASE_REST_API_URL+ "/"+nomV+"/zones/"+nomZ+"/"+"restaurants&specialite="+specialite);
    }
    restoInVilleInZoneWithSerie(nomV, nomZ,serie){
        return axios.get(VILLE_BASE_REST_API_URL+ "/"+nomV+"/zones/"+nomZ+"/"+"restaurants&serie="+serie);
    }
   
}
export default new VilleService();