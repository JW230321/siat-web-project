import React, { useEffect, useState } from "react";
import BoardService from "../board_service/BoardService";
import { useParams, useNavigate, Link } from "react-router-dom";

const ReadBoardComponent = () => {
  const { board_id } = useParams();
  const navigate = useNavigate();
  const [board, setBoard] = useState({});
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    BoardService.getOneBoard(board_id).then((res) => {
        console.log("====>" + res.data)
      setBoard(res.data);
      setComments(res.data.comments);
    });

  }, [board_id]);

  const returnDate = (cTime, uTime) => {
    return (
      <div className="row">
        <label>
          생성일 : [ {cTime} ] / 최종 수정일 : [ {uTime} ]
        </label>
      </div>
    );
  };

  const goToList = () => {
    navigate("/board");
  };

  const deleteBoard = (event) => {
    event.preventDefault();
    BoardService.deleteBoard(board_id).then((res) => {
      navigate("/board");
    });
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const addComment = (event) => {
    event.preventDefault();
    if (comment.trim() === "") {
      return;
    }
    const newComment = {
      content: comment,
      boardNo: board.no,
    };
    BoardService.addComment(newComment).then((res) => {
      setComment("");
      setComments([...comments, res.data]);
    });
  };

  return (
    <div style={{height : "60vh", marginTop : "80px"}}>
      <div className="card col-md-6 offset-md-3" >
        <h3 className="text-center"> 내용 보기 </h3>
        <div className="row">
          <label> Title </label>: {board.title}
        </div>
        <div className="row">
          <label> Contents </label>: <br />
          <textarea value={board.content} readOnly />
        </div>
        {returnDate(board.createTime, board.updateTime)}
        <button
          className="btn btn-primary"
          onClick={goToList}
          style={{ marginLeft: "10px" }}
        >
          글 목록으로 이동
        </button>
        <Link
          className="btn btn-info"
          style={{ marginLeft: "10px" }}
          to={`/create-board/${board.board_id}`}
        >
          수정하기
        </Link>
        <button
          className="btn btn-danger"
          onClick={deleteBoard}
          style={{ marginLeft: "10px" }}
        >
          삭제
        </button>
        <div className="mt-4">
          <h5>댓글 작성</h5>
          <form onSubmit={addComment}>
            <textarea
              value={comment}
              onChange={handleCommentChange}
              placeholder="댓글을 입력하세요."
            />
            <button type="submit" className="btn btn-primary mt-2">
              작성
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReadBoardComponent;
