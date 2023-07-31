import { Route, Routes } from "react-router-dom";
import UserBoard from "./UserBoard";
import RegisterRead from "../register_components/RegisterRead";
import RegisterBoard from "./RegisterBoard";
import EmploymentBoard from "./EmploymentBoard";
import EmploymentRead from "../employment_components/EmploymentRead";
import InsertNotice from "../NoticeComponents/InsertNotice";
import NoticeBoard from "../NoticeComponents/NoticeBoard";
import DetailNotice from "../NoticeComponents/DetailNotice";
import ModifyNotice from "../NoticeComponents/ModifyNotice";
import BoardList from "../BoardComponents/BoardList";
import DetailBoard from "../BoardComponents/DetailBoard";
import ModifyBoard from "../BoardComponents/ModifyBoard";

function AdHeader({ logOut }) {
    const logOutPass = (e) => {
        logOut();
    }
    return (
        <>
            <nav id="sidebar">
                <div className="p-4">
                    <div>
                        <a href="/" className="img logo rounded-circle mb-2"></a>
                        <div className="adminUser mb-2">관리자 님 안녕하세요.</div>
                    </div>

                    <ul className="list-unstyled components mb-5">
                        <li className="active">
                            <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false"
                                className="dropdown-toggle">Home</a>
                            <ul className="collapse list-unstyled" id="homeSubmenu">
                                <li>
                                    <a href="#">Home 1</a>
                                </li>
                                <li>
                                    <a href="#">Home 2</a>
                                </li>
                                <li>
                                    <a href="#">Home 3</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false"
                                className="dropdown-toggle">관리</a>
                            <ul className="collapse list-unstyled" id="pageSubmenu">
                                <li>
                                    <a href="/userBoard">회원관리</a>
                                </li>
                                <li>
                                    <a href="/read">신청서관리</a>
                                </li>
                                <li>
                                    <a href="/employment">구인요청 관리</a>
                                </li>
                                <li>
                                    <a href="/noticeList">공지사항</a>
                                </li>
                                <li>
                                    <a href="/boardList">자유게시판</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Portfolio</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>

                </div>
            </nav>
            <div id="content">
                <div className="util-area">
                    <a href="/" onClick={logOutPass} style={{fontSize:16}}>logout</a>
                </div>
                <Routes>
                    <Route path="/userBoard" element={<UserBoard />} />
                    <Route path="/read" element={<RegisterBoard />} />
                    <Route path="/:register_id" element={<RegisterRead />} />
                    <Route path="/employment" element={<EmploymentBoard />} />
                    <Route path="/employment/:employment_id" element={<EmploymentRead />} />
                    <Route path="/noticeList" element={<NoticeBoard />} />
                    <Route path="/insertNotice" element={<InsertNotice />} />
                    <Route path="/detailNotice/:notice_id" element={<DetailNotice />} />
                    <Route path="/ModifyNotice/:notice_id" element={<ModifyNotice />} />
                    <Route path="/boardList" element={<BoardList/>} />
                    <Route path="/detailBoard/:board_id" element={<DetailBoard />} />
                    <Route path="/modifyBoard/:board_id" element={<ModifyBoard />} />
                </Routes>
            </div>
        </>
    )
}

export default AdHeader;