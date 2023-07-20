import { Link } from "react-router-dom";
function Header() {
    return (
        <header id="header" className="fixed-top d-flex align-items-center">
            <div className="container d-flex align-items-center">
                {/* 로고 */}
                <div className="logo me-auto">
                    <h1><a href="/">Logo</a></h1>
                </div>
                {/* 메뉴 바 */}
                <nav id="navbar" className="navbar order-last order-lg-0">
                    <ul>
                        <li className="dropdown"><a href="#"><span>SIAT소개</span> <i className="bi bi-chevron-down"></i></a>
                            <ul>
                                <li><a href="#">조직안내도</a></li>
                                <li><a href="#">연혁</a></li>
                                <li><a href="#">장애인관련법</a></li>
                                <li><a href="#">찾아오는 길</a></li>
                                <li><a href="#">워크투게더</a></li>
                            </ul>
                        </li>
                    </ul>
                    <ul>
                        <li className="dropdown"><a href="#"><span>게시판</span> <i className="bi bi-chevron-down"></i></a>
                            <ul>
                                <li><Link to="/board1">자유게시판</Link></li>
                                <li><a href="#">익명게시판</a></li>
                                <li><a href="#">과제게시판</a></li>
                                <li><a href="#">자료실</a></li>
                                <li><a href="#">취업후기</a></li>
                                <li><a href="#">공략 & TIP</a></li>
                            </ul>
                        </li>
                    </ul>
                    <ul>
                        <li className="dropdown"><a href="#"><span>커뮤니티</span> <i className="bi bi-chevron-down"></i></a>
                            <ul>
                                <li><a href="#">공지사항</a></li>
                                <li><a href="#">Q&A</a></li>
                                <li><a href="#">멘토링,스터디</a></li>
                                <li><a href="#">취업뉴스</a></li>
                            </ul>
                        </li>
                    </ul>
                    <ul>
                        <li className="dropdown"><a href="#"><span>스케줄</span> <i className="bi bi-chevron-down"></i></a>
                            <ul>
                                <li><a href="#">#</a></li>
                                <li><a href="#">#</a></li>
                                <li><a href="#">#</a></li>
                                <li><a href="#">#</a></li>
                            </ul>
                        </li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>
                {/* 로그인 */}
                <div className="header-social-links d-flex align-items-center">
                    <li><a className="nav-link scrollto" href="#">마이페이지</a></li>
                    <li><a className="nav-link scrollto" href="/login">로그인</a></li>
                    <li><a className="nav-link scrollto" href="/signup">회원가입</a></li>
                </div>
            </div>
        </header>
    )
}

export default Header;