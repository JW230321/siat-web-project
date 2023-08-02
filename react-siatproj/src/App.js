
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProcessComponent from "./register_components/ProcessComponent";
import ProcessDetail from "./register_components/ProcessDetail";
import ProcessDetail2 from "./register_components/ProcessDetail2"
import ProcessInput from "./register_components/ProcessInput";
import ProcessInput2 from "./register_components/ProcessInput2"
import { useEffect, useState } from "react";
import ReadBoardComponent from "./board_components/ReadBoardComponent";
import WriteBoardComponent from "./board_components/WriteBoardComponent";
import UpdateBoardComponent from "./board_components/UpdateBoardComponent";
import ListBoardComponent from "./board_components/ListBoardComponent";
import EmploymentInput from "./employment_components/EmploymentInput";
import Notice from "./notice_components/Notice";
import InsertNotice from "./notice_components/InsertNotice";
import DetailNotice from "./notice_components/DetailNotice";
import ModifyNotice from "./notice_components/ModifyNotice";
import Zoom from "./components/Zoom";
import Road from "./components/Road";

function App() {

  const [zoomLevel, setZoomLevel] = useState(100);
  const location = useLocation();

  // 로그인 상태를 로컬 스토리지에서 가져와서 초기 상태 설정
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  // 로그인이 완료되면 로컬 스토리지에 로그인 상태를 저장
  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
  };

  // 로그아웃이 완료되면 로컬 스토리지에서 로그인 상태를 삭제
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("MemberData");
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth"});
  }, [location]);

  return (
    <div>
      <Header isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn} handleLogout = {handleLogout} />
      <Zoom zoomLevel={zoomLevel} setZoomLevel={setZoomLevel}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/road" element={<Road zoomLevel={zoomLevel} />} />
        <Route path="/board" element={<ListBoardComponent />} />
        {/* <Route path="/board1" element={<Board1 />} /> */}
        <Route path = "/read-board/:board_id" element = {<ReadBoardComponent />}></Route>
        <Route path = "/create-board" element = {<WriteBoardComponent />}></Route>
        <Route path = "/create-board/:board_id" element = {<UpdateBoardComponent />}></Route>
        <Route path="/login" element={<Login handleLogin = {handleLogin}/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/process" element={<ProcessComponent zoomLevel={zoomLevel}/>} />
        <Route path="/employment" element={<EmploymentInput />} />
        <Route path="/detail" element={<ProcessDetail zoomLevel={zoomLevel} />} />
        <Route path="/detail2" element={<ProcessDetail2 zoomLevel={zoomLevel} />} />
        <Route path="/input" element={<ProcessInput />} />
        <Route path="/input2" element={<ProcessInput2 />} />
        <Route path="/noticeList" element={<Notice />} />
        <Route path="/insertNotice" element={<InsertNotice />} />
        <Route path="/detailNotice/:notice_id" element={<DetailNotice  />} />
        <Route path="/modifyNotice/:notice_id" element={<ModifyNotice />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
