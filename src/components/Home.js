function Home() {
    return (
        <>  
            {/* 이미지 화면 */}
            <section id="hero" className="d-flex flex-column justify-content-center align-items-center"></section>
            {/* 게시판 목록 */}
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <ul>
                            <h1>공지사항</h1>
                            <li>1. 제목입니다</li>
                            <li>2. 제목입니다</li>
                            <li>3. 제목입니다</li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul>
                            <h1>공지사항</h1>
                            <li>1. 제목입니다</li>
                            <li>2. 제목입니다</li>
                            <li>3. 제목입니다</li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul>
                            <h1>공지사항</h1>
                            <li>1. 제목입니다</li>
                            <li>2. 제목입니다</li>
                            <li>3. 제목입니다</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;