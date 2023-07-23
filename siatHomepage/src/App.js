import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Board1 from "./components/Board1";
import ProcessComponent from "./register_components/ProcessComponent";
import RequestComponent from "./register_components/RequestComponent";
import ProcessDetail from "./register_components/ProcessDetail";
import ProcessDetail2 from "./register_components/ProcessDetail2"
import ProcessInput from "./register_components/ProcessInput";
import ProcessInput2 from "./register_components/ProcessInput2"

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/board1" element={<Board1/>} />
        <Route path="/process" element={<ProcessComponent />} />
        <Route path="/request" element={<RequestComponent />} />
        <Route path="/detail" element={<ProcessDetail />} />
        <Route path="/detail2" element={<ProcessDetail2 />} />
        <Route path="/input" element={<ProcessInput />} />
        <Route path="/input2" element={<ProcessInput2 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
