import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NoticeService from "../notice_service/NoticeService";
import '../css/notice.css'


function Notice() {
  const [getAllNotice, setGetAllNotice] = useState([]);
  const [noticeCount, setNoticeCount] = useState([]);
  const [searchOption, setSearchOption] = useState("title");
  
  // 검색기능
  const [keyword, setKeyword] = useState('');
  const [searchedNotices, setSearchedNotices] = useState([]);

  // 검색 버튼을 클릭할 때 호출되는 함수
  const handleSearchNotice = () => {
    NoticeService.getSearchNotice(keyword, searchOption) // 검색 옵션 추가
      .then((res) => {
        setSearchedNotices(res.data);
        if (res.data.length === 0) {
          alert("검색 결과가 없습니다.");
        }
      })
      .catch((error) => {
        console.error('Error while searching notices:', error);
      });
  };

  useEffect(() => {
    noticedata();
    console.log(getAllNotice)
  }, [])

  const noticedata = () => {
    NoticeService.noticeList().then((res) => {
      setGetAllNotice(res.data);
      setNoticeCount(res.data.length);
    })
  }

  const handleNotiecChange = (e) => {
    setSearchOption(e.target.value);
  }

  //날짜 분까지만 출력
  const formatDateTime = (dateTimeString) => {
    
    const dateTime = new Date(dateTimeString);
    const year = dateTime.getFullYear();
    const month = String(dateTime.getMonth() + 1).padStart(2, '0');
    const date = String(dateTime.getDate()).padStart(2, '0');
    const hours = String(dateTime.getHours()).padStart(2, '0');
    const minutes = String(dateTime.getMinutes()).padStart(2, '0');
  
    return `${year}. ${month}. ${date}. ${hours}:${minutes}`;
  };



  return (
    <div className="container" style={{ height: "auto", marginTop: "80px" }}>
      <div class="image-container">
        <div className="rounded1">커뮤니티</div>
      </div>
      <div>
        <h2 style={{ margin: 35, fontWeight: "bold" }}>공지 사항</h2>
      </div>
      <div class="search_group">
        <select class="custom_select" value={searchOption} onChange={handleNotiecChange} required>
          <option value="title" >제목</option>
          <option value="content">내용</option>
        </select>
        <div class="search_content">
          <input type="text" placeholder="검색어 입력" value={keyword} onChange={(e) => setKeyword(e.target.value)}></input>
          <button onClick={handleSearchNotice} className="search_image"></button>
        </div>
      </div>
      <div>
        <p>총 <span>{noticeCount}</span>건</p>
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
        {searchedNotices.length > 0 ? (
          <tbody>
            {searchedNotices.map((getAllNotice) => {
              return (
                <tr key={getAllNotice.notice_id}>
                  <td>{getAllNotice.notice_id}</td>
                  <td><Link to={`/detailNotice/${getAllNotice.notice_id}`} className="noticeLink">{getAllNotice.title}</Link></td>
                  <td>{formatDateTime(getAllNotice.createTime)}</td>
                  <td>{getAllNotice.count}</td>
                </tr>
              )
            })}
          </tbody>
        ) : (
          <tbody>
            {
              getAllNotice.map((getAllNotice) => {
                return (
                  <tr key={getAllNotice.notice_id}>
                    <td>{getAllNotice.notice_id}</td>
                    <td><Link to={`/detailNotice/${getAllNotice.notice_id}`} className="noticeLink">{getAllNotice.title}</Link></td>
                    <td>{formatDateTime(getAllNotice.createTime)}</td>
                    <td>{getAllNotice.count}</td>
                  </tr>
                )
              })
            }
          </tbody>
        )}
      </table>
    </div>
    
  )
}

export default Notice;