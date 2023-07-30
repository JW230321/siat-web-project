import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NoticeService from "../service/NoticeService";


function DetailNotice() {
  const navigate = useNavigate();
  const { notice_id } = useParams();
  const [getAllNotice, setGetAllNotice] = useState({});

  useEffect(() => {
    NoticeService.detailNotice(notice_id).then((res) => {
      setGetAllNotice(res.data);
    })
  }, [notice_id]);


  const Notice = () => {
    navigate('/noticeList')
  }
  const deleteNotice = (e) => {
    NoticeService.deleteNotice(notice_id).then((res) => {
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
          <tr className="content_tr">
            <th colSpan="2" className="content_head">
              <span style={{ fontSize: "30px", margin: "10px 0" }}>{getAllNotice.title}</span>
              <span style={{ color: "#999999", float: "right", lineHeight: "4" }}>{new Date(getAllNotice.created_time).toLocaleDateString()}</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="3"><pre className="content_body">{getAllNotice.content}</pre></td>
          </tr>
        </tbody>
      </table>
      <div style={{ float: "right" }}>
        <button className="btn btn-outline-primary" onClick={Notice}>목록</button>
        <button className="btn btn-outline-primary" onClick={ModifyNotice}>수정</button>
        <button className="btn btn-outline-primary" onClick={deleteNotice}>삭제</button>
      </div>
    </div>
  )
}
export default DetailNotice;