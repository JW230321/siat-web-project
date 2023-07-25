import axios from "axios";


const MEMBER_API_BASE_URL = "http://localhost:8088/api/";

class MemberService {
    getMembers() {
        return axios.get(MEMBER_API_BASE_URL + "userBoard");
    }

    createMember(member) {
        return axios.post(MEMBER_API_BASE_URL + "member", member);
    }

    updateMember(member){
        return axios.post(MEMBER_API_BASE_URL + "update", member);
    }

    login(memberId) {
        return axios.post(MEMBER_API_BASE_URL + "login", memberId);
    }

    deleteMember(member_id) {
        return axios.delete(MEMBER_API_BASE_URL + "delete/" + member_id);
    }


}

export default new MemberService();