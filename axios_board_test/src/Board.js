import { useEffect, useState } from "react";
import BoardService from "./BoardService";

function Board() {

    const [boards, setBoards] = useState([]);


    useEffect(() => {
        fetchBoards();
    }, [])

    const fetchBoards = () => {
        BoardService.getBoards().then((res) => {
            setBoards(res.data);
        })
    }



    return (
        <table border="1px">
            <thead>
            <tr>
                <th>제목</th>
                <th>내용</th>
                <th>생성 시간</th>
                <th>수정 시간</th>
                <th>조회수</th>
            </tr>
            </thead>
            <tbody>
            {
                boards.map((item, i) => {
                    return (
                        <tr key={i}>
                            <td>{boards[i].title}</td>
                            <td>{boards[i].content}</td>
                            <td>{boards[i].createTime}</td>
                            <td>{boards[i].updateTime}</td>
                            <td>{boards[i].count}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    )
}

export default Board;