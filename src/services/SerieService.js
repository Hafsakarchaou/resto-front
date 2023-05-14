import axios from "axios";

const SERIE_BASE_REST_API_URL = 'http://localhost:8084/series';

class SerieService{

    getAllSeries(){
        return axios.get(SERIE_BASE_REST_API_URL+"/all")
    }
    createSeries(serie){
        return axios.post(SERIE_BASE_REST_API_URL+"/save",serie)
    }
    getSerieById(serieId){
        return axios.get(SERIE_BASE_REST_API_URL+ '/' + serieId);
    }

    updateSpecialite(serieId,serie){
        return axios.put(SERIE_BASE_REST_API_URL + "/update/" + serieId ,serie);
    }
    deleteSerie(serieId){
        return axios.delete(SERIE_BASE_REST_API_URL+ '/delete/' + serieId);
    }
   
}

export default new SerieService();