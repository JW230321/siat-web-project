import { useEffect, useState } from "react";
import NoticeService from "../service/NoticeService";
import { Button, Form, Modal } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import BoardService from "../service/BoardService";



function BoardList() {
  const navigate = useNavigate();

  //데이터 불러오기
  const [board, setBoard] = useState([]);

  useEffect(() => {
    fetchBoards();
  }, []);

  const fetchBoards = () => {
    BoardService.getBoards().then((res) => {
      if (res.data && res.data.length > 0) {
        // 'author' 속성을 추가하여 boards 배열을 업데이트합니다.
        const boardsWithAuthor = res.data.map(board => ({
          ...board,
          author: board.author ? { name: board.author.name } : null,
        }));
        setBoard(boardsWithAuthor);
        console.log(boardsWithAuthor);
      } else {
        setBoard([]);
        console.log("res.data is empty");
      }
    });
  };


  // 상세보기 클릭시
  const boardDetail = (board_id) => {
    navigate(`/detailBoard/${board_id}`);
  }

  //내용이 20자 이상일시 20자까지 출력후 ...으로 표시
  const truncateContent = (content) => {
    if (content.length > 20) {
      return content.slice(0, 20) + "...";
    }
    return content;
  };

  //글쓰기 버튼 클릭
  const insertNotice = () => {
    navigate('/insertNotice')
  }




  return (
    <div id="content">
      <div className="container">
        <h2>자유게시판</h2>
      </div>
      <div className="container" style={{ display: "flex", textAlign: "center", alignItems: "center", justifyContent: "center" }}>
        <table className="table table-bordered" >
          <thead>
            <tr>
              <th>글 번호</th>
              <th>작성자</th>
              <th>제목</th>
              <th>내용</th>
              <th>작성일</th>
              <th>갱신일</th>
              <th>조회수</th>
              <th>관리</th>
            </tr>
          </thead>
          <tbody>
            {
              board.map((item, i) => {
                return (
                  <tr key={i}>
                    <td>{board[i].board_id}</td>
                    <td>{board[i].author && board[i].author.name}</td>
                    <td>{board[i].title}</td>
                    <td>{truncateContent(board[i].content)}</td>
                    <td>{board[i].createTime}</td>
                    <td>{board[i].updateTime}</td>
                    <td>{board[i].count}</td> 
                    <td>
                      <button type="button" className="btn btn-outline-primary" onClick={() => boardDetail(board[i].board_id)}>상세보기</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default BoardList;