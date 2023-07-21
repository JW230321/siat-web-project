import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <h1>Axios 테스트 연습</h1>
            <Link to="/input">입력하기</Link>
            <br />
            <Link to="/board">리스트</Link>
        </>
    )
}

export default Header;