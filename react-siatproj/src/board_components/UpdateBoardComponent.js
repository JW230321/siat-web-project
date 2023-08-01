import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BoardService from '../board_service/BoardService';

const UpdateBoardComponent = () => {
  const { board_id } = useParams();
  const navigate = useNavigate();
  const [board, setBoard] = useState({
  });

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    BoardService.getOneBoard(board_id).then((res) => {
      const data = res.data;
      setBoard({
        title: data.title,
        content: data.content,
      });
    });
  }, [board_id]);

  const changeTitleHandler = (event) => {
    setTitle(event.target.value);
  };

  const changeContentsHandler = (event) => {
    setContent(event.target.value);
  };

  const updateBoard = (event) => {
    event.preventDefault();
    const updatedBoard = {
      title: title || board.title,
      content: content || board.content
    };
    console.log("board => " + JSON.stringify(updatedBoard));
    BoardService.updateBoard(board_id, updatedBoard).then((res) => {
      navigate(`/read-board/${board_id}`);
    });
  };

  const cancel = () => {
    navigate('/board');
  };

  return (
    <div>
      <div className="container" style={{ height: "auto", marginTop: "80px" }}>
        <div className="image-container">
          <div className="rounded1">게시판</div>
        </div>
        <div>
          <h2 style={{ margin: 35, fontWeight: "bold" }}>자유 게시판</h2>
        </div>
        <form>
          <div className="form-group" style={{ marginBottom: 15 }}>
            <input
              type="text"
              placeholder="title"
              name="title"
              className="form-control"
              defaultValue={board.title}
              onChange={changeTitleHandler} />
          </div>
          <div className="form-group">
            <textarea
              placeholder="contents"
              name="content"
              className="form-control"
              rows="20"
              style={{ resize: "none" }}
              defaultValue={board.content}
              onChange={changeContentsHandler}
            />
          </div>
          <div className="button_box">
            <button className="content_button" style={{ marginLeft: "10px" }} onClick={cancel}>취소</button>
            <button className="content_button" onClick={updateBoard}>쓰기</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateBoardComponent;
