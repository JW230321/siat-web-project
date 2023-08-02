import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BoardService from '../board_service/BoardService';

const WriteBoardComponent = () => {
  const [findByMember, setFindByMember] = useState({});

  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const [selectedFile, setSelectedFile] = useState([]);

  useEffect(() => {
    console.log(selectedFile);
    // selectedFile이 변경될 때마다 boardData 업데이트
    const boardData = {
      title,
      content,
      fils: selectedFile,
    };
    console.log("boardData => ", JSON.stringify(boardData));
  }, [selectedFile]); // selectedFile이 변경될 때만 이펙트 실행


  useEffect(() => {
    setFindByMember(JSON.parse(localStorage.getItem("MemberData")))

  }, [])
  console.log(findByMember)


  const changeTitleHandler = (event) => {
    setTitle(event.target.value);
  };

  const changeContentHandler = (event) => {
    setContent(event.target.value);
  };

  // 파일 선택시 호출되는 함수
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files);
  };

  // 저장 기능
  const writeBoard = (event) => {

    event.preventDefault();
    const boardFileData = {
      title,
      content,
      fils: selectedFile,
    };

    const boardData = {
      title,
      content,
    };
    console.log("boardData => " + JSON.stringify(boardData));

    const memberId = findByMember.member_id; // 멤버 아이디값

    // // 단일 객체와 멀티파트 폼 데이터를 분리해서 전송
    // BoardService.writeBoard(boardData, selectedFile, memberId).then((res) => {
    //     navigate('/board');
    // });
    // selectedFile이 있을 경우 writeBoard를 실행하고, 없을 경우 writeDefaltBoard를 실행
    if (selectedFile && selectedFile.length > 0) {
      BoardService.writeBoard(boardFileData, selectedFile, memberId).then((res) => {
        navigate('/board');
      });
    } else {
      BoardService.writeDefaltBoard(boardData, memberId).then((res) => {
        navigate('/board');
      });
    }
  };




  const cancel = () => {
    navigate('/board');
  };

  return (
    <div>
      <div className="container" style={{ height: "auto", marginTop: "80px" }}>
        <div className="image-container">
          <div className="rounded1">게시판</div>
        </div>
        <div>
          <h2 style={{ margin: 35, fontWeight: "bold" }}>자유 게시판</h2>
        </div>
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
          <div className="form-group">
            <label htmlFor="file">파일 선택:</label>
            <input type="file" id="file" name="files" onChange={handleFileChange} multiple />
          </div>
          <div className="button_box">
            <button className="content_button" style={{ marginLeft: "10px" }} onClick={cancel}>취소</button>
            <button className="content_button" onClick={writeBoard}>쓰기</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WriteBoardComponent;
