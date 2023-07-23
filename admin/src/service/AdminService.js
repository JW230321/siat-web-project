import axios from "axios";


const ADMIN_API_BASE_URL = "http://localhost:8088/api/";

class MemberService {

    adminLogin(adminId) {
        return axios.post(ADMIN_API_BASE_URL + "admin", adminId);
    }



}

export default new MemberService();