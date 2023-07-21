import React from 'react';

function BoardList({ paging, kw }) {
  const handlePageClick = (page) => {
    document.getElementById('page').value = page;
    document.getElementById('searchForm').submit();
  };

  const handleSearch = () => {
    document.getElementById('kw').value = document.getElementById('search_kw').value;
    document.getElementById('page').value = 0;
    document.getElementById('searchForm').submit();
  };

  return (
    <div className="container my-3">
      <div className="row my-3">
        <div className="col-6">
          <a href="/question/create" className="btn btn-primary">질문 등록하기</a>
        </div>
        <div className="col-6">
          <div className="input-group">
            <input type="text" id="search_kw" className="form-control" value={kw} />
            <button className="btn btn-outline-secondary" type="button" id="btn_search" onClick={handleSearch}>찾기</button>
          </div>
        </div>
      </div>
      <table className="table">
        <thead className="table-dark">
          <tr className="text-center">
            <th>번호</th>
            <th style={{ width: '50%' }}>제목</th>
            <th>글쓴이</th>
            <th>작성일시</th>
          </tr>
        </thead>
        <tbody>
          {paging.map((question, index) => (
            <tr className="text-center" key={index}>
              <td>{paging.getTotalElements - (paging.number * paging.size) - index}</td>
              <td className="text-start">
                <a href={`/question/detail/${question.id}`}>{question.subject}</a>
                <span className="text-danger small ms-2">
                  {question.answerList.length > 0 && question.answerList.length}
                </span>
              </td>
              <td><span>{question.author != null && question.author.username}</span></td>
              <td>{question.createDate.format('yyyy-MM-dd HH:mm')}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={!paging.isEmpty() ? '' : 'd-none'}>
        <ul className="pagination justify-content-center">
          <li className={`page-item ${!paging.hasPrevious ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => handlePageClick(paging.number - 1)}>
              이전
            </button>
          </li>
          {Array.from({ length: paging.totalPages }, (_, index) => {
            if (index >= paging.number - 5 && index <= paging.number + 5) {
              return (
                <li key={index} className={`page-item ${index === paging.number ? 'active' : ''}`}>
                  <button className="page-link" onClick={() => handlePageClick(index)}>
                    {index}
                  </button>
                </li>
              );
            }
            return null;
          })}
          <li className={`page-item ${!paging.hasNext ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => handlePageClick(paging.number + 1)}>
              다음
            </button>
          </li>
        </ul>
      </div>
      <form action="/question/list" method="get" id="searchForm">
        <input type="hidden" id="kw" name="kw" value={kw} />
        <input type="hidden" id="page" name="page" value={paging.number} />
      </form>
    </div>
  );
}

export default BoardList;
