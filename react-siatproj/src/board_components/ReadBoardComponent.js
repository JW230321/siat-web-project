import React, { useEffect, useState } from "react";
import BoardService from "../board_service/BoardService";
import { useParams, useNavigate, Link } from "react-router-dom";
import '../css/readBoard.css'

const ReadBoardComponent = () => {
  const [findByMember, setFindByMember] = useState({});

  const { board_id } = useParams();
  const navigate = useNavigate();
  const [board, setBoard] = useState({});
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [commentsCount, setCommentsCount] = useState([]);

  const [imageFiles, setImageFiles] = useState([]);

  // 이미지 파일 인식하기
  const isImageFile = (fileName) => {
    const imageExtensions = ['jpg', 'jpeg', 'png', 'gif'];
    const ext = fileName.split('.').pop().toLowerCase();
    return imageExtensions.includes(ext);
  };

  useEffect(() => {
    setFindByMember(JSON.parse(localStorage.getItem("MemberData")))
    //console.log("member===>" + JSON.stringify(findByMember))
  }, [])

  useEffect(() => {
    BoardService.getOneBoard(board_id).then((res) => {
      //console.log("====>" + JSON.stringify(res.data))
      setBoard(res.data);
      setImageFiles(res.data.files)
      setComments(res.data.comments);
      setCommentsCount(res.data.comments.length);
    });
  }, [board_id]);
  //글 작성시간
  const returnDate1 = (cTime) => {
    return (
      <label>
        {formatDateTime(cTime)}
      </label>
    );
  };

  //글 수정시간
  const returnDate2 = (uTime) => {
    return (
      <label>
        <span>{formatDateTime(uTime)} <span style={{ fontSize: "13px" }}>수정</span></span>
      </label>
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
  //console.log(board.author ? board.author : "작성자 정보 없음")

  const addComment = (event) => {
    event.preventDefault();
    // 댓글 정보를 객체로 생성
    const newComment = {
      content: comment,
      board: board, // 해당 댓글이 속한 게시물 정보
      author: findByMember
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

  //날짜 분까지만 출력
  const formatDateTime = (dateTimeString) => {
    if (!dateTimeString) {
      return ''; // 처음에 글작성시 수정시간이 필요없으므로 출력되지 않는다
    }
    const dateTime = new Date(dateTimeString);
    const year = dateTime.getFullYear();
    const month = String(dateTime.getMonth() + 1).padStart(2, '0');
    const date = String(dateTime.getDate()).padStart(2, '0');
    const hours = String(dateTime.getHours()).padStart(2, '0');
    const minutes = String(dateTime.getMinutes()).padStart(2, '0');

    return `${year}. ${month}. ${date}. ${hours}:${minutes}`;
  };

  return (
    <div style={{ height: "auto", marginTop: "80px" }}>
      <div className="container" style={{ height: "auto", marginTop: "80px" }}>
        <div className="image-container">
          <div className="rounded1">게시판</div>
        </div>
        <div>
          <h2 style={{ margin: 35, fontWeight: "bold" }}>자유 게시판</h2>
        </div>

        <table className="content">
          <thead>
            <tr className="content_tr">
              <th colSpan="3" className="content_head">
                <span style={{ fontSize: "30px", margin: "10px 0" }}>
                  {board.title}
                </span>
                {board.updateTime ? (
                  <span style={{ color: "#999999" }}>
                    {board.author ? board.author.name : "작성자 정보 없음"} | {returnDate2(board.updateTime)}
                  </span>
                ) : (
                  <span style={{ color: "#999999" }}>
                    {board.author ? board.author.name : "작성자 정보 없음"} | {returnDate1(board.createTime)}</span>
                )}
              </th>
              <th className="content_count">조회수 {board.count}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="3"><pre className="content_body">{board.content}</pre></td>
            </tr>
            {/* {
              imageFiles != null ? (imageFiles.map((a, i) => {
                <img src={`/img/${imageFiles[i].originName}`} />
              })) : (<></>)
            } */}
          </tbody>
        </table>
        {
          imageFiles.length > 0 &&  // imageFiles 배열의 길이가 0보다 큰 경우에만 아래 코드 실행
          imageFiles.map((file, index) => (
            isImageFile(file.originName) && (
              <img key={index} src={`/img/${file.originName}`} alt={file.originName} />
            )
          ))
        }

        {/*       ================================================================= */}
        <div>
          <div style={{ marginBlock: "20px" }}>
            <span style={{ marginRight: "10px" }}>댓글</span>
            <span style={{ fontSize: "13px", color: "#999999" }}>총 <span>{commentsCount}</span>건</span>
          </div>
          <div className="comment_zone">
            {
              comments.map((comment, index) => (
                <div key={index}>
                  <p style={{ marginBottom: "10px" }}>
                    {comment.author ? (
                      <>
                        <span style={{ fontSize: "16px", fontWeight: "bold" }}>{comment.author.name}</span>
                        {board.author && comment.author.name === board.author.name && (
                          <span style={{ fontSize: "12px", color: "#999999", marginLeft: "5px" }}>
                            작성자
                          </span>
                        )}
                      </>
                    ) : (
                      <span>작성자 정보 없음</span>
                    )}
                  </p>
                  <div key={comment.createDate}>
                    <p style={{ marginBottom: "1px" }}>{comment.content}</p>
                    <p style={{ fontSize: "12px", color: "#999999" }}>{formatDateTime(comment.createDate)}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className="form-group">
          <form onSubmit={addComment} style={{ position: "relative" }}>
            <textarea
              className="form-control"
              value={comment}
              onChange={handleCommentChange}
              style={{ resize: "none", minHeight: "100px" }}
              placeholder="댓글을 입력하세요."
            />
            <button
              type="submit"
              className="btn btn-primary mt-2"
              style={{
                position: "absolute",
                bottom: "10px",
                right: "10px"
              }}
            >
              등록
            </button>
          </form>
        </div>

        <div className="button_box">
          <button className="content_button" onClick={goToList}>목록</button>
          <Link className="content_button" to={`/create-board/${board.board_id}`} >수정</Link>
          <button className="content_button" onClick={deleteBoard}>삭제</button>
        </div>
      </div>
    </div>
  );
};

export default ReadBoardComponent;
