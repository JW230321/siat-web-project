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
      <div className="container" style={{height : "60vh", marginTop : "80px"}}>
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">글을 수정해주세요</h3>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label> Title </label>
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
                  <label> Content </label>
                  <textarea
                    placeholder="contents"
                    name="content"
                    className="form-control"
                    defaultValue={board.content}
                    onChange={changeContentsHandler}
                  />
                </div>
                <button className="btn btn-success" onClick={updateBoard}>
                  Modify
                </button>
                <button
                  className="btn btn-danger"
                  onClick={cancel}
                  style={{ marginLeft: "10px" }}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateBoardComponent;
