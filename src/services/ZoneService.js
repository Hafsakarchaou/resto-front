import axios from "axios";

const ZONE_BASE_REST_API_URL = 'http://localhost:8084/zones';

class ZoneService{
    getAllZones(){
        const params = { expand: "ville" };
        return axios.get(ZONE_BASE_REST_API_URL+"/all");
    }
    createZone(zone){
        return axios.post(ZONE_BASE_REST_API_URL+"/save",zone)
    }
    getZoneById(zoneId){
        return axios.get(ZONE_BASE_REST_API_URL+ '/' + zoneId);
    }

    updateZone(zoneId,zone){
        return axios.put(ZONE_BASE_REST_API_URL+ "/update/" + zoneId ,zone);
    }
    deleteZone(zoneId){
        return axios.delete(ZONE_BASE_REST_API_URL+ '/delete/' + zoneId);
    }
}
export default new ZoneService();