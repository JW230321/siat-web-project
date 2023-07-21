import { Route, Routes } from "react-router-dom";
import Board from "./Board";
import Input from "./Input";
import Header from "./Header";


function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path = "/board" element={<Board />}/>
        <Route path = "/input" element={<Input />}/>
      </Routes>
    </div>
  );
}

export default App;
