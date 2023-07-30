import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NoticeService from "../notice_service/NoticeService";
import '../css/noticeDetail.css'

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
  

  return (
    <div className="container" style={{ height: "auto", marginTop: "80px" }}>
      <div class="image_container">
        <div className="rounded">커뮤니티</div>
      </div>
      <div>
        <h2 style={{ margin: 35, fontWeight: "bold" }}>공지 사항</h2>
      </div>
      <table className="content">
        <thead>
          <tr className="content_tr">
            <th colSpan="2" className="content_head">
              <span style={{fontSize: "30px", margin:"10px 0" }}>{getAllNotice.title}</span>
              <span style={{ color: "#999999"}}>{new Date(getAllNotice.created_time).toLocaleDateString()}</span>
            </th>
            <th className="content_count">조회수 {getAllNotice.count}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="3"><pre className="content_body">{getAllNotice.content}</pre></td>
          </tr>
        </tbody>
      </table>
      <div className="button_box">
        <button className="content_button" onClick={Notice}>목록</button>
      </div>
    </div>
  )
}
export default DetailNotice;