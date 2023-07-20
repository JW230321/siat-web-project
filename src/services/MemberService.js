import axios from "axios";


const BOARD_API_BASE_URL = "http://localhost:8088/api/";

class MemberService {
    getBoards() {
        return axios.get(BOARD_API_BASE_URL + "member");
    }

    createMember(member) {
        return axios.post(BOARD_API_BASE_URL + "member", member);
    }

    login(memberId) {
        return axios.post(BOARD_API_BASE_URL + "login", memberId);
    }

}

export default new MemberService();