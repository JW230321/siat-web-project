import axios from "axios";


const ADMIN_API_BASE_URL = "http://localhost:8088/api/";

class AdminService {

    adminLogin(adminId) {
        return axios.post(ADMIN_API_BASE_URL + "admin", adminId);
    }



}

export default new AdminService();