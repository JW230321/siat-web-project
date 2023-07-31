import React, { useEffect, useState } from 'react';
import BoardService from '../board_service/BoardService';
import { useNavigate, Link } from 'react-router-dom';

const ListBoardComponent = () => {
  const [boards, setBoards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // 한 페이지에 보여질 아이템 수
  const [boardCount, setBoardCount] = useState([]); //게시글수 표시
  const navigate = useNavigate();
  // 검색기능
  const [searchOption, setSearchOption] = useState("title");
  const [keyword, setKeyword] = useState('');
  const [searchedBoards, setSearchedBoards] = useState([]);



  // 검색 버튼을 클릭할 때 호출되는 함수
  const handleSearch = () => {
    BoardService.getSearchBoard(keyword, searchedBoards)
      .then((res) => {
        setSearchedBoards(res.data);
        if (res.data.length === 0) {
          alert("검색 결과가 없습니다.");
        }
      })
      .catch((error) => {
        console.error('Error while searching boards:', error);
      });
  };

  const handleOptionChange = (e) => {
    setSearchOption(e.target.value);
  }

  useEffect(() => {
    fetchBoards();
  }, []);

  const fetchBoards = () => {
    BoardService.getBoards().then((res) => {
      setBoardCount(res.data.length);
      if (res.data && res.data.length > 0) {
        // 'author' 속성을 추가하여 boards 배열을 업데이트합니다.
        const boardsWithAuthor = res.data.map(board => ({
          ...board,
          author: board.author ? { name: board.author.name } : null,
        }));
        setBoards(boardsWithAuthor);
        console.log(boardsWithAuthor);
      } else {
        setBoards([]);
        console.log("res.data is empty");
      }
    });
  };

  const createBoard = () => {
    navigate('/create-board/');
  };

  const handleBoardChange = (e) => {
    setSearchedBoards(e.target.value);
  }

  // 페이징 처리에 필요한 변수 계산
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = boards.slice(indexOfFirstItem, indexOfLastItem);
  const currentSearchItems = searchedBoards.slice(indexOfFirstItem, indexOfLastItem)

  const paginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= Math.ceil(boards.length / itemsPerPage)) {
      setCurrentPage(pageNumber);
    }
  };


  //날짜 분까지만 출력
  const formatDateTime = (dateTimeString) => {
    if (!dateTimeString) {
      return ''; // 처음에 글작성시 수정시간이 필요없으므로 출력되지 않는다
    }
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
      <div className="image-container">
        <div className="rounded1">게시판</div>
      </div>
      <div>
        <h2 style={{ margin: 35, fontWeight: "bold" }}>자유 게시판</h2>
      </div>
      <div className="search_group">
        <select className="custom_select" value={searchOption} onChange={handleOptionChange} required>
          <option value="title" >제목</option>
          <option value="content">내용</option>
        </select>
        <div className="search_content">
          <input type="text" placeholder="검색어 입력" value={keyword} onChange={(e) => setKeyword(e.target.value)}></input>
          <button onClick={handleSearch} className="search_image"></button>
        </div>
      </div>
      <div>
        <p>총 <span>{boardCount}</span>건</p>
      </div>
      <div>
        <table className="table-list">
          <thead>
            <tr>
              <th>글 번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
              <th>갱신일</th>
              <th>조회수</th>
            </tr>
          </thead>
          {searchedBoards.length > 0 ? (
            <tbody>
              {currentSearchItems.map((board, index) => (
                <tr key={board.board_id}>
                  <td>{index + 1 + indexOfFirstItem}</td>
                  <td>
                    <Link to={`/read-board/${board.board_id}`} >{board.title}</Link>
                  </td>
                  <td>{board.author && board.author.name}</td>
                  <td>{formatDateTime(board.createTime)}</td>
                  <td>{formatDateTime(board.updateTime)}</td>
                  <td>{board.count}</td>
                </tr>
              ))}
            </tbody>
          ) : (
            <tbody>
              {currentItems.map((board, index) => (
                <tr key={board.board_id}>
                  <td>{index + 1 + indexOfFirstItem}</td>
                  <td>
                    <Link to={`/read-board/${board.board_id}`} >{board.title}</Link>
                  </td>
                  <td>{board.author && board.author.name}</td>
                  <td>{formatDateTime(board.createTime)}</td>
                  <td>{formatDateTime(board.updateTime)}</td>
                  <td>{board.count}</td>
                </tr>
              ))}
            </tbody>
          )}
        </table>

        {searchedBoards.length > 0 ? (
          <div className="pagination">
            <button
              className="page-link"
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
            >
              이전
            </button>
            <ul className="pagination">
              {Array.from({ length: Math.ceil(searchedBoards.length / itemsPerPage) }).map(
                (item, index) => (
                  <li
                    className={`page-item ${index + 1 === currentPage ? "active" : ""
                      }`}
                    key={index}
                  >
                    <button
                      className="page-link"
                      onClick={() => paginate(index + 1)}
                    >
                      {index + 1}
                    </button>
                  </li>
                )
              )}
            </ul>
            <button
              className="page-link"
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === Math.ceil(searchedBoards.length / itemsPerPage)}
            >
              다음
            </button>
          </div>
        ) : (
          <div className="pagination">
            <button
              className="page-link"
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
            >
              이전
            </button>
            <ul className="pagination">
              {Array.from({ length: Math.ceil(boards.length / itemsPerPage) }).map(
                (item, index) => (
                  <li
                    className={`page-item ${index + 1 === currentPage ? "active" : ""
                      }`}
                    key={index}
                  >
                    <button
                      className="page-link"
                      onClick={() => paginate(index + 1)}
                    >
                      {index + 1}
                    </button>
                  </li>
                )
              )}
            </ul>
            <button
              className="page-link"
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === Math.ceil(boards.length / itemsPerPage)}
            >
              다음
            </button>
          </div>
        )}

        {/* Button */}
        <div className="button_box">
          <button className="content_button" onClick={createBoard}>글쓰기</button>
        </div>


      </div>



    </div>

  );
};

export default ListBoardComponent;
