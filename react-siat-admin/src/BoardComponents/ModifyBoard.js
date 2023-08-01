import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import BoardService from "../service/BoardService";


function ModifyBoard() {

  const { board_id } = useParams();
  const navigate = useNavigate();
  const [board, setBoard] = useState({});
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    BoardService.getOneBoard(board_id).then((res) => {
      setBoard(res.data);
    });
  }, [board_id]);

  const changeTitleHandler = (e) => {
    setTitle(e.target.value);
  };

  const changeContentHandler = (e) => {
    setContent(e.target.value);
  };

  const updateBoard = (e) => {
    e.preventDefault();
    let updateBoard = {
      title: title || board.title,
      content: content || board.content
    }; // 입력 받은 값을 객체로 만듭니다.
    console.log("board => " + JSON.stringify(updateBoard));
    BoardService.updateBoard(board_id, updateBoard).then((res) => {
      navigate('/boardList')
    }); // boardService 통해 서버로 공지사항 추가 요청을 보냅니다.  
  };

  const cancel = () => {
    navigate('/detailBoard/' + board_id)
  }

  return (
    <div>
      <div style={{ width: "100%" }}>
        <h3 className="text-center"> 글 수정 </h3>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label> 제목 </label>
              <input
                type="text"
                placeholder="title"
                name="title"
                className="form-control"
                defaultValue={board.title}
                onChange={changeTitleHandler}
              />
            </div>
            <div className="form-group">
              <label> 내용 </label>
              <textarea
                placeholder="contents"
                name="contents"
                className="form-control"
                rows="20"
                style={{ resize: "none" }}
                defaultValue={board.content}
                onChange={changeContentHandler}
              />
            </div>
            <div style={{ float: "right" }}>
              <button className="btn btn-info" onClick={updateBoard} style={{ marginLeft: "10px" }}>수정</button>
              <button className="btn btn-info" onClick={cancel} style={{ marginLeft: "10px" }}>취소</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default ModifyBoard;