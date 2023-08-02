import axios from "axios";


const MEMBER_API_BASE_URL = "http://localhost:8088/api/";

class MemberService {
    getBoards() {
        return axios.get(MEMBER_API_BASE_URL + "member");
    }

    createMember(member) {
        return axios.post(MEMBER_API_BASE_URL + "member", member);
    }

    login(memberId) {
        return axios.post(MEMBER_API_BASE_URL + "login", memberId);
    }

    getMembers() {
        return axios.get(MEMBER_API_BASE_URL + "memberList");
    }

}

export default new MemberService();