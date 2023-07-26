function Board1() {
    return (
        <div className="container" style={{height : "60vh", marginTop : "80px"}}>
            <h2>자유 게시판</h2>
            <table className="table table-bordered" >
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>등록일</th>
                        <th>조회수</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>제목입니다.</td>
                        <td>홍길동</td>
                        <td>2023.07.13</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>제목입니다.</td>
                        <td>홍길동</td>
                        <td>2023.07.13</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>제목입니다.</td>
                        <td>홍길동</td>
                        <td>2023.07.13</td>
                        <td>1</td>
                    </tr>
                </tbody>
            </table>
            <div>
                <button type="submit" className="btn btn-outline-primary"><a href="/boardInput">글쓰기</a></button>
            </div>
        </div>
    )
}

export default Board1;