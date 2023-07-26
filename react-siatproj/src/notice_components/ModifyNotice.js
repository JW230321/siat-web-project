import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NoticeService from "../notice_service/NoticeService";


function ModifyNotice() {

  const { notice_id } = useParams();
  const navigate = useNavigate();
  const [notice, setNotice] = useState({});
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    NoticeService.detailNotice(notice_id).then((res) => {
      const data = res.data;
      setNotice({
        title: data.title,
        content: data.content
      });
    });
  }, [notice_id]);

  const changeTitleHandler = (e) => {
    setTitle(e.target.value);
  };

  const changeContentHandler = (e) => {
    setContent(e.target.value);
  };

  const updateNotice = (e) => {
    e.preventDefault();
    let updateNotice = {
      title: title || notice.title,
      content: content || notice.content
    }; // 입력 받은 값을 객체로 만듭니다.
    console.log("notice => " + JSON.stringify(updateNotice));
    NoticeService.modifyNotice(notice_id, updateNotice).then((res) => {
      navigate('/noticeList')
    }); // NoticeService를 통해 서버로 공지사항 추가 요청을 보냅니다.  
  };

  const cancel = () => {
    navigate('/detailNotice/' + notice_id)
  }

  return (
    <div className="container" style={{height : "auto", marginTop : "80px"}}>
      <div className="card col-md-6 offset-md-3">
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
                defaultValue={notice.title}
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
                defaultValue={notice.content}
                onChange={changeContentHandler}
              />
            </div>
            <button className="btn btn-info" onClick={updateNotice} style={{ marginLeft: "10px" }}>수정</button>
            <button className="btn btn-info" onClick={cancel} style={{ marginLeft: "10px" }}>취소</button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default ModifyNotice;