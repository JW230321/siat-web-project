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
      //console.log("====>" + JSON.stringify(res.data))
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

    // 댓글 정보를 객체로 생성
    const newComment = {
      content: comment,
      createDate: new Date(), // 댓글 생성일시
      updateDate: new Date(), // 댓글 수정일시
      board: board, // 해당 댓글이 속한 게시물 정보
    };

    // CommentService를 이용하여 서버로 댓글 정보를 전송
    BoardService.createComment(newComment, board_id)
      .then((res) => {
        console.log("댓글 추가 성공:", JSON.stringify(res.data));
        // 새로운 댓글 목록을 가져와서 업데이트
        BoardService.getOneBoard(board_id)
          .then((res) => {
            setBoard(res.data);
            setComments(res.data.comments);
          })
          .catch((error) => {
            console.error("댓글 추가 후 게시물 정보 가져오기 실패:", error);
          });
      })
      .catch((error) => {
        console.error("댓글 추가 실패:", error);
      });

    // 댓글 입력 필드 비우기
    setComment("");
  };

  return (
    <div style={{ height: "60vh", marginTop: "80px" }}>
      <div className="card col-md-6 offset-md-3" >
        <h3 className="text-center"> 내용 보기 </h3>
        <div className="row">
          <label> 작성자 </label>: {board.author ? board.author.name : "작성자 정보 없음"}
        </div>
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
        <div>
          <h5>댓글</h5>
          {
            comments.map((a, i) => {
              return (
                <div key={i}>{comments[i].content}</div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default ReadBoardComponent;
