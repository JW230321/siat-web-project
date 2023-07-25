
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import NoticeService from "../services/NoticeService";



function Notice() {
  const navigate = useNavigate();
  const [getAllNotice, setGetAllNotice] = useState([]);

  useEffect(() => {
    noticedata();
  }, [])

  const noticedata = () => {
    NoticeService.noticeList().then((res) => {
      setGetAllNotice(res.data);
    })
  }

  const insertNotice = () => {
    navigate('/insertNotice/')
  }



  return (
    <div className="container" style={{ height: "auto", marginTop: "80px" }}>
      <h2>공지사항</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>등록일</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody>
          {
            getAllNotice.map((getAllNotice) => {
              return (
                <tr key={getAllNotice.notice_id}>
                  <td>{getAllNotice.notice_id}</td>
                  <td><Link to={`/detailNotice/${getAllNotice.notice_id}`} >{getAllNotice.title}</Link></td>
                  <td>{new Date(getAllNotice.created_time).toLocaleDateString()}</td>
                  <td>{getAllNotice.count}</td>
                </tr>
              )
            })
          }

        </tbody>
      </table>
      <div>
        <button className="btn btn-outline-primary" onClick={insertNotice}>글쓰기</button>
      </div>
    </div>
  )
}

export default Notice;