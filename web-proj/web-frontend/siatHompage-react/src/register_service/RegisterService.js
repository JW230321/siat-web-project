import axios from "axios";

const Register_API_BASE_URL = "http://localhost:8088/api"

function register(register) {
    return axios.post(Register_API_BASE_URL + "/input", register);
}

function register2(register) {
    return axios.post(Register_API_BASE_URL + "/input2", register);
}

const RegisterService = {
    register,
    register2
}

export default RegisterService;