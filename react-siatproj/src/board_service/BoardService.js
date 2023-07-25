import axios from 'axios';


const BOARD_API_BASE_URL = "http://localhost:8088/siat/board"; 

class BoardService {


    getBoards() {
        return axios.get(BOARD_API_BASE_URL);
    }

    writeBoard(board) {
        return axios.post(BOARD_API_BASE_URL, board);
    }

    getOneBoard(board_id) {
        return axios.get(BOARD_API_BASE_URL + "/" + board_id);
    }

    updateBoard(board_id, board) {
        return axios.put(BOARD_API_BASE_URL + "/" + board_id, board);
    }

    deleteBoard(board_id) {
        return axios.delete(BOARD_API_BASE_URL + "/" + board_id);
    }

}

export default new BoardService();