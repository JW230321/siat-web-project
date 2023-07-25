import { Route, Routes } from "react-router-dom";
import UserBoard from "./UserBoard";
import RegisterRead from "../register_components/RegisterRead";
import RegisterBoard from "./RegisterBoard";
import EmploymentBoard from "./EmploymentBoard";
import EmploymentRead from "../employment_components/EmploymentRead";

function AdHeader({ logOut }) {
    const logOutPass = (e) => {
        logOut();
    }
    return (
        <>
            <nav id="sidebar">
                <div className="p-4 pt-5">
                    <a href="#" className="img logo rounded-circle mb-5"></a>

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
                                    <a href="#">Page 3</a>
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
                    <a href="/home" onClick={logOutPass}>logout</a>
                </div>
                <Routes>
                    <Route path="/userBoard" element={<UserBoard />} />
                    <Route path="/read" element={<RegisterBoard />} />
                    <Route path="/:register_id" element={<RegisterRead />} />
                    <Route path="/employment" element={<EmploymentBoard />} />
                    <Route path="/employment/:employment_id" element={<EmploymentRead />} />
                </Routes>
            </div>
        </>
    )
}

export default AdHeader;