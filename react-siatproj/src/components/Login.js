import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MemberService from "../services/MemberService";

function Login({handleLogin}) {
    const navigate = useNavigate();
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");



    const changeIdHandler = (e) => {
        setId(e.target.value);
    };

    const changePasswrodHandler = (e) => {
        setPassword(e.target.value);
    };

    const loginMember = (e) => {
        e.preventDefault();
        const member = {
            id,
            password,
        };
        MemberService.login(member)
            .then((response) => {
                console.log(response.data); // 서버에서 반환한 응답 데이터 처리
                const memberData = JSON.stringify(response.data);
                // 로그인 성공 시 추가 처리를 여기에 작성
                if (response.data.id === id) {
                    localStorage.setItem("MemberData",memberData)
                    alert("로그인 성공!")
                    handleLogin();
                    navigate('/');
                } else {
                    alert("아이디 또는 비밀번호가 틀립니다!")
                }
            })
            .catch((error) => {
                console.error(error);
                // 로그인 실패 시 사용자에게 알림을 보여줄 수도 있음
            });
    }
    return (
        <section className="h-100">
            <div className="container h-100">
                <div className="row justify-content-sm-center h-100">
                    <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9" style={{ height: "55vh", marginTop: "100px" }}>
                        <div className="card shadow-lg">
                            <div className="card-body p-5">
                                <h1 className="fs-4 card-title fw-bold mb-4">Login</h1>
                                <form method="POST" className="needs-validation" noValidate="" autoComplete="off">
                                    <div className="mb-3">
                                        <label className="mb-2 text-muted" htmlFor="email">E-Mail Address</label>
                                        <input id="email" type="email" onChange={changeIdHandler} className="form-control" name="email" value={id} />
                                        <div className="invalid-feedback">
                                            Email is invalid
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <div className="mb-2 w-100">
                                            <label className="text-muted" htmlFor="password">Password</label>
                                            <a href="forgot.html" className="float-end">
                                                Forgot Password?
                                            </a>
                                        </div>
                                        <input id="password" type="password" onChange={changePasswrodHandler} className="form-control" name="password" value={password} />
                                        <div className="invalid-feedback">
                                            Password is required
                                        </div>
                                    </div>

                                    <div className="d-flex align-items-center">
                                        <div className="form-check">
                                            <input type="checkbox" name="remember" id="remember" className="form-check-input" />
                                            <label htmlFor="remember" className="form-check-label">Remember Me</label>
                                        </div>
                                        <button className="btn btn-primary ms-auto" onClick={loginMember}>
                                            Login
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="card-footer py-3 border-0">
                                <div className="text-center">
                                    Don't have an account? <a href="register.html" className="text-dark">Create One</a>
                                </div>
                            </div>
                        </div>
                        <div className="text-center mt-5 text-muted">
                            Copyright &copy; 2017-2021 &mdash; Your Company
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Login;