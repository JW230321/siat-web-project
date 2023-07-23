import axios from "axios";

const Register_API_BASE_URL = "http://localhost:8088/api/"

function getRegisterList() {
    return axios.get(Register_API_BASE_URL + "read");
}

function getRegister(register_id) {
    return axios.get(Register_API_BASE_URL + "read/" + register_id);
}

function updateRegister(register_id, register) {
    return axios.post(Register_API_BASE_URL + "update/" + register_id, register);
}

function deleteRegister(register_id) {
    return axios.delete(Register_API_BASE_URL + register_id);
}

const RegisterService = {
    getRegisterList,
    getRegister,
    updateRegister,
    deleteRegister
}

export default RegisterService;