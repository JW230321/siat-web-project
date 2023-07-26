import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header({isLoggedIn,setIsLoggedIn,handleLogout}) {

    useEffect(() => {
        // 컴포넌트가 마운트될 때, 로컬 스토리지에 저장된 로그인 상태를 가져와서 설정
        const storedLoggedIn = localStorage.getItem("isLoggedIn") === "true";
        setIsLoggedIn(storedLoggedIn);
      }, []);


      const isLogOut = () => {
        alert("로그아웃 되었습니다!")
        handleLogout()
      }
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
                                <li><Link to="/process">교육과정</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <ul>
                        <li className="dropdown"><a href="#"><span>게시판</span> <i className="bi bi-chevron-down"></i></a>
                            <ul>
                                <li><Link to="/board">자유게시판</Link></li>
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
                                <li><Link to="/noticeList">공지사항</Link></li>
                                <li><a href="#">Q&A</a></li>
                                <li><a href="#">멘토링,스터디</a></li>
                                <li><a href="#">취업뉴스</a></li>
                                <li><Link to="/employment">구인요청</Link></li>
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
                    {
                        isLoggedIn ? (
                            <li>
                                <a className="nav-link scrollto" href="#" onClick={isLogOut}>로그아웃</a>
                            </li>)
                            :
                            (<li>
                                <Link className="nav-link scrollto" to="/login">로그인</Link>
                            </li>
                            )
                    }

                    <li><Link className="nav-link scrollto" to="/signup">회원가입</Link></li>
                </div>
            </div>
        </header>
    )
}

export default Header;