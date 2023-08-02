import axios from "axios"

const File_API_BASE_URL = "http://localhost:8088"

function downloadFile(uploadfile_id) {
    return axios.get(File_API_BASE_URL + "/download", {
        responseType : "blob",
        params : {
            uploadfile_id: uploadfile_id
        }
    });
}

const FileService = {
    downloadFile
}

export default FileService;