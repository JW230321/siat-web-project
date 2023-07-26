import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NoticeService from "../notice_service/NoticeService";


function DetailNotice() {
  const navigate = useNavigate();
  const { notice_id } = useParams();
  const [getAllNotice, setGetAllNotice] = useState({});

  useEffect(() => {
    NoticeService.detailNotice(notice_id).then((res) => {
      setGetAllNotice(res.data);
    })
  }, [notice_id]);

  //삭제
  const Notice = () => {
    navigate('/noticeList')
  }
  const deleteNotice = (e) => {
    NoticeService.deleteNotice(notice_id).then((res)=>{
      navigate('/noticeList')
    })
  }

  const ModifyNotice = () => {
    navigate('/modifyNotice/' + notice_id)
  }

  return (
    <div className="container" style={{ height: "auto", marginTop: "80px" }}>
      <h2>공지사항</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>제목</th>
            <th>내용</th>
            <th>등록일</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody>
          <tr >
            <td>{getAllNotice.title}</td>
            <td>{getAllNotice.content}</td>
            <td>{new Date(getAllNotice.created_time).toLocaleDateString()}</td>
            <td>{getAllNotice.count}</td>
          </tr>
        </tbody>
      </table>
      <div>
        <button className="btn btn-outline-primary" onClick={Notice}>목록</button>
        <button className="btn btn-outline-primary" onClick={ModifyNotice}>수정</button>
        <button className="btn btn-outline-primary" onClick={deleteNotice}>삭제</button>
      </div>
    </div>
  )
}
export default DetailNotice;