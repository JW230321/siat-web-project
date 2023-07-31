import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BoardService from "../service/BoardService";
import "../css/DetailBoard.css"

function DetailBoard() {
    const navigate = useNavigate();
    const { board_id } = useParams();
    const [getAllBoard, setGetAllBoard] = useState({});

    useEffect(() => {
        BoardService.getOneBoard(board_id).then((res) => {
            setGetAllBoard(res.data);
        })
    }, [board_id]);


    const Board = () => {
        navigate('/boardList')
    }
    const deleteBoard = (e) => {
        BoardService.deleteBoard(board_id).then((res) => {
            navigate('/boardList')
        })
    }

    const ModifyBoard = () => {
        navigate('/modifyBoard/' + board_id)
    }

    return (
        <div className="container" style={{ height: "auto", marginTop: "80px" }}>
            <h2>자유게시판</h2>
            <table className="table table-bordered">
                <thead>
                    <th colSpan="3" className="content_head">
                        <span style={{ fontSize: "30px", margin: "10px 0" }}>{getAllBoard.title}</span>
                        <span style={{ color: "#999999" }}>{getAllBoard.author ? getAllBoard.author.name : "작성자 정보 없음"} &nbsp;|&nbsp; {new Date(getAllBoard.createTime).toLocaleDateString()}</span>
                    </th>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan="3"><pre className="content_body">{getAllBoard.content}</pre></td>
                    </tr>
                </tbody>
            </table>
            <div style={{ float: "right" }}>
                <button className="btn btn-outline-primary" onClick={Board}>목록</button>
                <button className="btn btn-outline-primary" onClick={ModifyBoard}>수정</button>
                <button className="btn btn-outline-primary" onClick={deleteBoard}>삭제</button>
            </div>
        </div>
    )
}
export default DetailBoard;