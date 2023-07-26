
function BoardInput() {
    return (

        <div className="container" role="main" style={{ paddingTop: "100px", paddingBottom: "30px" }}>
            <h2>자유게시판</h2>
            <form name="form" id="form" role="form" method="post" action="/board/saveBoard">
                <div className="mb-3">
                    <label for="title">제목</label>
                    <input type="text" className="form-control" name="title" id="title" placeholder="제목을 입력해 주세요" />
                </div>

                <div className="mb-3">
                    <label for="reg_id">작성자</label>
                    <input type="text" className="form-control" name="reg_id" id="reg_id" value="홍길동" readOnly="true" />
                </div>

                <div className="mb-3">
                    <label for="content">내용</label>
                    <textarea className="form-control" rows="5" name="content" id="content"
                        placeholder="내용을 입력해 주세요"></textarea>
                </div>

                <div className="mb-3">
                    <label for="formFile" className="form-label">Default file input example</label>
                    <input className="form-control" type="file" id="formFile" multiple />
                </div>
            </form>
            <div>
                <button type="button" className="btn btn-sm btn-primary" id="btnSave">저장</button>
                <button type="button" className="btn btn-sm btn-primary" id="btnList">목록</button>
            </div>
        </div>

    )
}

export default BoardInput;

