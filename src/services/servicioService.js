import axios from "axios";

const SERVICIO_BASE_REST_API_URL = "http://127.0.0.1:8000/api/v1/servicios";

class ServicioService {
    getAllServicios() {
        return axios.get(SERVICIO_BASE_REST_API_URL + "/");
    }

    createServicios(servicio) {
        return axios.post(SERVICIO_BASE_REST_API_URL + "/", servicio);
    }

    getServicioById(servicioId) {
        return axios.get(`${SERVICIO_BASE_REST_API_URL}/${servicioId}/`);
    }

    updateServicio(servicioId, servicio) {
        return axios.put(`${SERVICIO_BASE_REST_API_URL}/${servicioId}/`, servicio);
    }

    deleteServicio(servicioId) {
        return axios.delete(`${SERVICIO_BASE_REST_API_URL}/${servicioId}/`);
    }
}

const servicioService = new ServicioService();
export default servicioService;
