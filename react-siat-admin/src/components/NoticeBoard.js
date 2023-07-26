import { useEffect, useState } from "react";
import NoticeService from "../service/NoticeService";
import { Button, Form, Modal } from "react-bootstrap";



function NoticeBoard() {

  
  //데이터 불러오기
  const [notice, setNotice] = useState([]);

  //수정할 칼럼
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  //수정,삭제 버튼 클릭할때 데이터 불러오기
  const [SelectedNotice, setSelectedNotice] = useState({});

  //수정 모달
  const [show, setShow] = useState(false);

  //수정 모달 닫기
  const modalClose = () => setShow(false);

  //삭제 모달
  const [deleteShow, setDeleteShow] = useState(false);

  //삭제 모달 닫기
  const deleteModalClose = () => setDeleteShow(false);

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

  // 수정버튼 클릭시
  const handleShow = (i) => {
    setSelectedNotice(notice[i]);
    setShow(true);
  };

  //삭제 클릭시
  const deleteHandleShow = (i) => {
    setSelectedNotice(notice[i]);
    setDeleteShow(true);
  };

  //수정 함수
  const modifyNotice = (e) => {
    e.preventDefault();
    const notice = {
      notice_id: SelectedNotice.notice_id,
      title: title || SelectedNotice.title,
      content: content || SelectedNotice.content
    }; // 입력 받은 값을 객체로 만듭니다.
    console.log("notice => " + JSON.stringify(notice));
    NoticeService.modifyNotice(notice.notice_id, notice).then(() => {
      console.log("성공!");
      modalClose(); //모달닫기
      window.location.reload();//강제 새로고침
    }); // NoticeService를 통해 서버로 공지사항 추가 요청을 보냅니다.  
  };

  //삭제 함수
  const deleteNotice = (e) => {
    e.preventDefault();

    NoticeService.deleteNotice(JSON.stringify(SelectedNotice.notice_id)).then(() => {
      modalClose();
      window.location.reload();
    })
  }

  //내용이 20자 이상일시 20자까지 출력후 ...으로 표시
  const truncateContent = (content) => {
    if (content.length > 20) {
      return content.slice(0, 20) + "...";
    }
    return content;
  };

  const changeTitleHandler = (e) => {
    setTitle(e.target.value);
  };

  const changeContentHandler = (e) => {
    setContent(e.target.value);
  };


  return (
    <div id="content">
      <div className="container">
        <h2>회원 관리</h2>
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
                      <Button variant="btn btn-outline-primary btn-sm" onClick={() => handleShow(i)} style={{ marginRight: "7px" }}>수정</Button>
                      <button type="button" className="btn btn-outline-danger btn-sm" onClick={() => deleteHandleShow(i)}>삭제</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        {/*수정 클릭시 모달창 */}
        <Modal show={show} onHide={modalClose}>
          <Modal.Header closeButton>
            <Modal.Title>수정하기</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {
            SelectedNotice && (
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>제목</Form.Label>
                  <Form.Control
                    type="text"
                    defaultValue={SelectedNotice.title}
                    onChange={changeTitleHandler}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>내용</Form.Label>
                  <Form.Control
                    type="text"
                    as="textarea"
                    rows={5}
                    defaultValue={SelectedNotice.content}
                    onChange={changeContentHandler}
                  />
                </Form.Group>
              </Form>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={modalClose} >
              Close
            </Button>
            <Button variant="primary" onClick={modifyNotice}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        {/* 삭제 모달창 */}
        <Modal show={deleteShow} onhide={deleteModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={deleteModalClose}>
              Close
            </Button>
            <Button variant="primary" onClick={deleteNotice}>
              삭제하기
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  )
}

export default NoticeBoard;