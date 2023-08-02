import axios from 'axios';


const BOARD_API_BASE_URL = "http://localhost:8088/siat/board";

class BoardService {

    getBoards() {
        return axios.get(BOARD_API_BASE_URL);
    }


    writeDefaltBoard(board, memberId) {
        return axios.post(`${BOARD_API_BASE_URL}/defalut?memberId=${memberId}`, board);
    }

    writeBoard(board, files, memberId) {
        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        };
        const url = `${BOARD_API_BASE_URL}?memberId=${memberId}`;
        const data = new FormData();
        data.append("board", JSON.stringify(board));
    
        // 각 파일들을 별도의 파라미터로 추가
        for (let i = 0; i < files.length; i++) {
            data.append("files", files[i]);
        }
    
        return axios.post(url, data, config);
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

    getSearchBoard(kw) {
        return axios.get(BOARD_API_BASE_URL + '/search', { params: { kw } });
    }

    createComment(comment, boardId) {
        return axios.post(`${BOARD_API_BASE_URL}/${boardId}/comments`, comment);
    }

}

export default new BoardService();