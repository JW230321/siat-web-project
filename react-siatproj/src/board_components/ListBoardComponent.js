import React, { useEffect, useState } from 'react';
import BoardService from '../board_service/BoardService';
import { useNavigate, Link } from 'react-router-dom';

const ListBoardComponent = () => {
  const [boards, setBoards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // 한 페이지에 보여질 아이템 수
  const navigate = useNavigate();

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
    <div className="container" style={{height : "60vh", marginTop : "80px"}}>
      <h2 className="text-center">자유게시판</h2>
      <div className="row">
        <button className="btn btn-primary" onClick={createBoard}>
          글 작성
        </button>
      </div>
      <div className="row">
        <table className="table table-striped table-bordered" style={{textAlign:'center'}}>
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
        </table>
      </div>
      <div className="pagination">
        <ul className="pagination">
          {Array.from({ length: Math.ceil(boards.length / itemsPerPage) }).map(
            (item, index) => (
              <li
                className={`page-item ${
                  index + 1 === currentPage ? 'active' : ''
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
    </div>
  );
};

export default ListBoardComponent;
