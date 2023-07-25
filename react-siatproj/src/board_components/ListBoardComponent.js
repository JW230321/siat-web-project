import React, { useEffect, useState } from 'react';
import BoardService from '../board_service/BoardService';
import { useNavigate, Link } from 'react-router-dom';

const ListBoardComponent = () => {
  const [boards, setBoards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // 한 페이지에 보여질 아이템 수
  const navigate = useNavigate();
  // 검색기능
  const [keyword, setKeyword] = useState('');
  const [searchedBoards, setSearchedBoards] = useState([]);

  // 검색 버튼을 클릭할 때 호출되는 함수
  const handleSearch = () => {
    BoardService.getSearchBoard(keyword)
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

  useEffect(() => {
    fetchBoards();
  }, []);

  const fetchBoards = () => {
    BoardService.getBoards().then((res) => {
      setBoards(res.data);
    });
  };

  const createBoard = () => {
    navigate('/create-board/');
  };

  // 페이징 처리에 필요한 변수 계산
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = boards.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container" style={{ height: "60vh", marginTop: "80px" }}>
      <h2 className="text-start"><a href='/board' style={{color:"black"}}>자유게시판</a></h2>
      <div className="row">
        <button className="btn btn-primary" onClick={createBoard}>
          글 작성
        </button>
      </div>
      <div className="row">
        <table className="table table-striped table-bordered" style={{ textAlign: 'center' }}>
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
              {searchedBoards.map((board, index) => (
                <tr key={board.board_id}>
                  <td>{index + 1 + indexOfFirstItem}</td>
                  <td>
                    <Link to={`/read-board/${board.board_id}`} >{board.title}</Link>
                  </td>
                  <td>{board.memberNo}</td>
                  <td>{board.createTime}</td>
                  <td>{board.updateTime}</td>
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
                  <td>{board.memberNo}</td>
                  <td>{board.createTime}</td>
                  <td>{board.updateTime}</td>
                  <td>{board.count}</td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
      <div className="pagination">
        <ul className="pagination">
          {Array.from({ length: Math.ceil(boards.length / itemsPerPage) }).map(
            (item, index) => (
              <li
                className={`page-item ${index + 1 === currentPage ? 'active' : ''
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
      </div>
      <div>
        {/* 검색 기능 추가 */}
        <input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
        <button onClick={handleSearch}>Search</button>
        {/* 검색 결과 출력
        {searchedBoards.length > 0 && (
          <div>
            <h3>검색 결과</h3>
            <ul>
              {searchedBoards.map((board) => (
                <li key={board.board_id}>
                  <Link to={`/read-board/${board.board_id}`}>{board.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        )} */}
      </div>
    </div>

  );
};

export default ListBoardComponent;
