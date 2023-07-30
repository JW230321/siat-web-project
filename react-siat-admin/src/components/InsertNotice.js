import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NoticeService from "../service/NoticeService";


function InsertNotice() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");


  const changeTitleHandler = (e) => {
    setTitle(e.target.value);
  };

  const changeContentHandler = (e) => {
    setContent(e.target.value);
  };

  const createNotice = (e) => {
    e.preventDefault();
    let notice = { title: title, content: content }; // 입력 받은 값을 객체로 만듭니다.
    NoticeService.insertNotice(notice).then(() => {
      navigate('/noticeList')
    }) // NoticeService를 통해 서버로 공지사항 추가 요청을 보냅니다.

  }

  const cancel = () => {
    navigate("/noticeList"); // 취소 버튼을 클릭하면 공지사항 목록 페이지로 이동합니다.
  };

  return (
    <div className="container" style={{ height: "auto", marginTop: "80px" }}>
      <div style={{ width: "100%" }}>
        <h3 className="text-center">공지사항 글쓰기</h3>
        <div className="card-body">
          <form>
            <div className="form-group" style={{ marginBottom: 15 }}>
              <input type="text" placeholder="제목을 입력하세요" name="title" className="form-control" value={title} onChange={changeTitleHandler} />
            </div>
            <div className="form-group">
              <textarea
                placeholder="내용을 입력하세요"
                name="content"
                className="form-control"
                rows="20"
                style={{ resize: "none" }}
                value={content}
                onChange={changeContentHandler}
              />
            </div>
            <div style={{ float: "right" }}>
              <button className="btn btn-success" onClick={createNotice}>
                쓰기
              </button>
              <button
                className="btn btn-success"
                onClick={cancel}
                style={{ marginLeft: "10px" }}
              >
                취소
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default InsertNotice;