
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Board1 from "./components/Board1";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Notice from "./noticeComponents/Notice";
import InsertNotice from "./noticeComponents/InsertNotice";
import DetailNotice from "./noticeComponents/DetailNotice";
import ModifyNotice from "./noticeComponents/ModifyNotice";




function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/board1" element={<Board1/>} />
        <Route path="/admin" element={<Board1/>} />
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/noticeList" element={<Notice/>} />
        <Route path="/insertNotice" element={<InsertNotice />} />
        <Route path="/detailNotice/:notice_id" element={<DetailNotice  />} />
        <Route path="/modifyNotice/:notice_id" element={<ModifyNotice />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
