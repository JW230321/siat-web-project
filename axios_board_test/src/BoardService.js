import axios from "axios";


const BOARD_API_BASE_URL = "http://localhost:8081/siat/board";

class BoardService {
    getBoards() {
        return axios.get(BOARD_API_BASE_URL);
    }

    createBoard(board) {
        return axios.post(BOARD_API_BASE_URL, board);
    }

    getOneBoard(board_id) {
        return axios.get(BOARD_API_BASE_URL + "/" + board_id);
    }

    updateBoard(board_id, board) {
        return axios.put(BOARD_API_BASE_URL + "/" + board_id, board);
    }
}

export default new BoardService();