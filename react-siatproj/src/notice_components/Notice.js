
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NoticeService from "../notice_service/NoticeService";
import '../css/notice.css'


function Notice() {
  const [getAllNotice, setGetAllNotice] = useState([]);
  const [noticeCount, setNoticeCount] = useState([]);

  useEffect(() => {
    noticedata();
  }, [])

  const noticedata = () => {
    NoticeService.noticeList().then((res) => {
      setGetAllNotice(res.data);
      setNoticeCount(res.data.length);
    })
  }

  const handleNotiecChange = (e) => {
    setGetAllNotice(e.target.value);
  }




  return (
    <div className="container" style={{ height: "auto", marginTop: "80px" }}>
      <div class="image-container">
        <div className="rounded">커뮤니티</div>
      </div>
      <div>
        <h2 style={{ margin: 35, fontWeight: "bold" }}>공지 사항</h2>
      </div>
      <div class="search_group">
        <select class="custom_select" value={getAllNotice} onChange={handleNotiecChange} required>
          <option value="title" >제목</option>
          <option value="content">내용</option>
        </select>
        <div class="search_content">
          <input type="text" placeholder="검색어 입력"></input>
          <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png"></img>
        </div>
      </div>
      <div>
        <p>총 <span id="noticeCount" >{noticeCount}</span>건</p>
      </div>
      <table className="table-list">
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
                  <td><Link to={`/detailNotice/${getAllNotice.notice_id}`} className="noticeLink">{getAllNotice.title}</Link></td>
                  <td>{new Date(getAllNotice.created_time).toLocaleDateString()}</td>
                  <td>{getAllNotice.count}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Notice;