import { useEffect, useState } from "react";
import NoticeService from "../service/NoticeService";
import { Button, Form, Modal } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";



function NoticeBoard() {
  const navigate = useNavigate();

  //데이터 불러오기
  const [notice, setNotice] = useState([]);

  //테이블 가져오기
  useEffect(() => {
    noticedata();
  }, [])

  //NoticeService 테이블 가져오는 함수
  const noticedata = () => {
    NoticeService.noticeList().then((res) => {
      console.log(res.data);
      setNotice(res.data);
    })
  }

  // 상세보기 클릭시
  const noticeDetail = (notice_id) => {
    navigate(`/detailNotice/${notice_id}`);
  }

  //내용이 20자 이상일시 20자까지 출력후 ...으로 표시
  const truncateContent = (content) => {
    if (content.length > 20) {
      return content.slice(0, 20) + "...";
    }
    return content;
  };

  //글쓰기 버튼 클릭
  const insertNotice = () => {
    navigate('/insertNotice/')
  }




  return (
    <div id="content">
      <div className="container">
        <h2>공지 사항</h2>
      </div>
      <div className="container" style={{ display: "flex", textAlign: "center", alignItems: "center", justifyContent: "center" }}>
        <table className="table table-bordered" >
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>내용</th>
              <th>관리</th>
            </tr>
          </thead>
          <tbody>
            {
              notice.map((item, i) => {
                return (
                  <tr key={i}>
                    <td>{notice[i].notice_id}</td>
                    <td>{notice[i].title}</td>
                    <td>{truncateContent(notice[i].content)}</td>
                    <td>
                      <button type="button" className="btn btn-outline-primary" onClick={() => noticeDetail(notice[i].notice_id)}>상세보기</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
      <div className="container">
        <button style={{ float: "right" }} type="button" className="btn btn-outline-primary" onClick={insertNotice}>글쓰기</button>
      </div>
    </div>
  )
}

export default NoticeBoard;