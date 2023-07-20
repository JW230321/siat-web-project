import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Board1 from "./components/Board1";


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/board1" element={<Board1/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
