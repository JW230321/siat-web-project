import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BoardService from '../board_service/BoardService';

const WriteBoardComponent = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const changeTitleHandler = (event) => {
    setTitle(event.target.value);
  };

  const changeContentHandler = (event) => {
    setContent(event.target.value);
  };

  const writeBoard = (event) => {
    event.preventDefault();
    const board = {
      title,
      content
    };
    console.log("board => " + JSON.stringify(board));
    BoardService.writeBoard(board).then((res) => {
      navigate('/board');
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
            <h3 className="text-center">새글을 작성해주세요</h3>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label> Title </label>
                  <input
                    type="text"
                    placeholder="title"
                    name="title"
                    className="form-control"
                    value={title}
                    onChange={changeTitleHandler}
                  />
                </div>
                <div className="form-group">
                  <label> Contents </label>
                  <textarea
                    placeholder="contents"
                    name="contents"
                    className="form-control"
                    value={content}
                    onChange={changeContentHandler}
                  />
                </div>
                <button className="btn btn-success" onClick={writeBoard}>
                  Save
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

export default WriteBoardComponent;
