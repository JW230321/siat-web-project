import axios from "axios"

const Employment_API_BASE_URL = "http://localhost:8088/api/"

function employmentGetList() {
    return axios.get(Employment_API_BASE_URL + "employment");
}

function getEmployment(employment_id) {
    return axios.get(Employment_API_BASE_URL + "employment/" + employment_id);
}

function updateEmployment(employment_id, employment) {
    return axios.post(Employment_API_BASE_URL + "updateEmployment/" + employment_id, employment);
}

function deleteEmployment(employment_id) {
    return axios.delete(Employment_API_BASE_URL + "deleteEmployment/" + employment_id);
}

const EmploymentService = {
    employmentGetList,
    getEmployment,
    updateEmployment,
    deleteEmployment
}

export default EmploymentService;