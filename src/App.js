
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Board1 from "./components/Board1";
import Login from "./components/Login";
import Signup from "./components/Signup";


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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
