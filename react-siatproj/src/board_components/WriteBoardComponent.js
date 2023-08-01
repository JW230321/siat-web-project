import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BoardService from '../board_service/BoardService';

const WriteBoardComponent = () => {
  const [findByMember, setFindByMember] = useState({});

  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  //console.log(localStorage.getItem("MemberData"))


  useEffect(() => {
    setFindByMember(JSON.parse(localStorage.getItem("MemberData")))

  }, [])
  console.log(findByMember)

  // const fatchMembers = () => {
  //   MemberService.getMembers().then((res) => {
  //     console.log(res.data);
  //     setMembers(res.data);
  //   })
  // }

  const changeTitleHandler = (event) => {
    setTitle(event.target.value);
  };

  const changeContentHandler = (event) => {
    setContent(event.target.value);
  };

  // 저장 기능
  const writeBoard = (event) => {
    event.preventDefault();
    const board = {
      title,
      content,
    };
    console.log("board => " + JSON.stringify(board));

    const memberId = findByMember.member_id; // 멤버 아이디값
    BoardService.writeBoard(board, memberId).then((res) => {
      navigate('/board');
    });
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
        <div className="card-body">
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
            <div className="button_box">
              <button className="content_button" style={{marginLeft:"10px"}} onClick={cancel}>취소</button>
              <button className="content_button" onClick={writeBoard}>쓰기</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WriteBoardComponent;
