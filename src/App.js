
import { useEffect, useState } from "react";
import AdHeader from "./components/AdHeader";
import Admin from "./components/Admin";


function App() {
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
  };

  useEffect(() => {
    // 컴포넌트가 마운트될 때, 로컬 스토리지에 저장된 로그인 상태를 가져와서 설정
    const storedLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(storedLoggedIn);
  }, []);


  return (
    <>
      {
        isLoggedIn ?(
          <div className="wrapper d-flex align-items-stretch">
            < AdHeader logOut = {handleLogout}/>
          </div >) : (<Admin onLogin={handleLogin} />
          )}
    </>


  );
}

export default App;
