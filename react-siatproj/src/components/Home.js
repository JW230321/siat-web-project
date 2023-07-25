import HomeBanner from "./HomeBanner";
import '../css/home.css'
function Home() {
    return (
        <>
            {/* 이미지 화면 */}
            {/* <section id="hero" className="d-flex flex-column justify-content-center align-items-center"></section> */}
            <HomeBanner />

            {/* 게시판 목록 */}
            <div className="container text-center" style={{marginTop: 40}}>
                <div className="row">
                    <div className="left_box">
                        <div className="tit">
                            <h4>공지 사항</h4>
                            <a href="#"><img src="https://www.sist.co.kr/img/main_con02_plus.png" alt="icon" /></a>
                        </div>
                        <li className="slick-slide">
                            <ul>
                                <dl style={{ display: "flex", alignItems: "center" }}>
                                    <dt>
                                        <h1>1.</h1>
                                    </dt>
                                    <dt style={{ fontSize: 18, width: 150 }}>
                                        제목입니다.
                                    </dt>
                                    <dt>
                                        <a href="#"><img src="https://www.sist.co.kr/img/main_con02_arrow02.png" /></a>
                                    </dt>
                                </dl>
                            </ul>
                            <ul>
                                <dl style={{ display: "flex", alignItems: "center" }}>
                                    <dt>
                                        <h1>1.</h1>
                                    </dt>
                                    <dt style={{ fontSize: 18, width: 150 }}>
                                        제목입니다.
                                    </dt>
                                    <dt>
                                        <a href="#"><img src="https://www.sist.co.kr/img/main_con02_arrow02.png" /></a>
                                    </dt>
                                </dl>
                            </ul>
                            <ul>
                                <dl style={{ display: "flex", alignItems: "center" }}>
                                    <dt>
                                        <h1>1.</h1>
                                    </dt>
                                    <dt style={{ fontSize: 18, width: 150 }}>
                                        제목입니다.
                                    </dt>
                                    <dt>
                                        <a href="#"><img src="https://www.sist.co.kr/img/main_con02_arrow02.png" /></a>
                                    </dt>
                                </dl>
                            </ul>
                        </li>
                    </div>
                    <div className="center_box">
                    <div className="tit">
                            <h4>공지 사항</h4>
                            <a href="#"><img src="https://www.sist.co.kr/img/main_con02_plus.png" alt="icon" /></a>
                        </div>
                        <li className="slick-slide">
                            <ul>
                                <dl style={{ display: "flex", alignItems: "center" }}>
                                    <dt>
                                        <h1>1.</h1>
                                    </dt>
                                    <dt style={{ fontSize: 18, width: 150 }}>
                                        제목입니다.
                                    </dt>
                                    <dt>
                                        <a href="#"><img src="https://www.sist.co.kr/img/main_con02_arrow02.png" /></a>
                                    </dt>
                                </dl>
                            </ul>
                            <ul>
                                <dl style={{ display: "flex", alignItems: "center" }}>
                                    <dt>
                                        <h1>1.</h1>
                                    </dt>
                                    <dt style={{ fontSize: 18, width: 150 }}>
                                        제목입니다.
                                    </dt>
                                    <dt>
                                        <a href="#"><img src="https://www.sist.co.kr/img/main_con02_arrow02.png" /></a>
                                    </dt>
                                </dl>
                            </ul>
                            <ul>
                                <dl style={{ display: "flex", alignItems: "center" }}>
                                    <dt>
                                        <h1>1.</h1>
                                    </dt>
                                    <dt style={{ fontSize: 18, width: 150 }}>
                                        제목입니다.
                                    </dt>
                                    <dt>
                                        <a href="#"><img src="https://www.sist.co.kr/img/main_con02_arrow02.png" /></a>
                                    </dt>
                                </dl>
                            </ul>
                        </li>
                    </div>
                    <div className="right_box">
                    <div className="tit">
                            <h4>공지 사항</h4>
                            <a href="#"><img src="https://www.sist.co.kr/img/main_con02_plus.png" alt="icon" /></a>
                        </div>
                        <li className="slick-slide">
                            <ul>
                                <dl style={{ display: "flex", alignItems: "center" }}>
                                    <dt>
                                        <h1>1.</h1>
                                    </dt>
                                    <dt style={{ fontSize: 18, width: 150 }}>
                                        제목입니다.
                                    </dt>
                                    <dt>
                                        <a href="#"><img src="https://www.sist.co.kr/img/main_con02_arrow02.png" /></a>
                                    </dt>
                                </dl>
                            </ul>
                            <ul>
                                <dl style={{ display: "flex", alignItems: "center" }}>
                                    <dt>
                                        <h1>1.</h1>
                                    </dt>
                                    <dt style={{ fontSize: 18, width: 150 }}>
                                        제목입니다.
                                    </dt>
                                    <dt>
                                        <a href="#"><img src="https://www.sist.co.kr/img/main_con02_arrow02.png" /></a>
                                    </dt>
                                </dl>
                            </ul>
                            <ul>
                                <dl style={{ display: "flex", alignItems: "center" }}>
                                    <dt>
                                        <h1>1.</h1>
                                    </dt>
                                    <dt style={{ fontSize: 18, width: 150 }}>
                                        제목입니다.
                                    </dt>
                                    <dt>
                                        <a href="#"><img src="https://www.sist.co.kr/img/main_con02_arrow02.png" /></a>
                                    </dt>
                                </dl>
                            </ul>
                        </li>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;