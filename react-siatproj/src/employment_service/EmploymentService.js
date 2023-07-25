import axios from "axios"

const Employment_API_BASE_URL = "http://localhost:8088/api"

function insertEmployment(employment) {
    return axios.post(Employment_API_BASE_URL + "/employment", employment);
}

const EmploymentService = {
    insertEmployment
}

export default EmploymentService;