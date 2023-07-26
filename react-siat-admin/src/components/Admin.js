import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminService from "../service/AdminService";

function Admin({onLogin}) {

    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const changeIdHandler = (e) => {
        setId(e.target.value);
    };

    const changePasswrodHandler = (e) => {
        setPassword(e.target.value);
    };
    // 로그인 기능
    const loginPass = (e) => {
        const member = {
            id,
            password,
        };
        AdminService.adminLogin(member)
            .then((response) => {
                console.log(response.data); // 서버에서 반환한 응답 데이터 처리
                // 로그인 성공 시 추가 처리를 여기에 작성
                if (response.data.id === id && response.data.password === password) {
                    console.log("성공!")
                    onLogin();
                } else {
                    console.log("실패!")
                }
            })
            .catch((error) => {
                console.error(error);
                // 로그인 실패 시 사용자에게 알림을 보여줄 수도 있음
            });
        
    }
    return (
        <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-dark text-white" style={{borderRadius: '1rem'}}>
                            <div className="card-body p-5 text-center">

                                <div className="mb-md-5 mt-md-4 pb-5">

                                    <h2 className="fw-bold mb-2 text-uppercase">Admin Login</h2>
                                    <p className="text-white-50 mb-5">Please enter your login and password!</p>

                                    <div className="form-outline form-white mb-4">
                                        <label className="form-label" htmlFor="typeEmailX" style={{float: "left"}}>ID</label>
                                        <input type="email" id="typeEmailX" onChange={changeIdHandler}  value={id} className="form-control form-control-lg" />
                                    </div>

                                    <div className="form-outline form-white mb-4">
                                        <label className="form-label" htmlFor="typePasswordX" style={{float: "left"}}>Password</label>
                                        <input type="password" id="typePasswordX" onChange={changePasswrodHandler} value={password} className="form-control form-control-lg" />
                                    </div>

                                    <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>

                                    <button onClick={loginPass} className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>

                                    <div className="d-flex justify-content-center text-center mt-4 pt-1">
                                        <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                                        <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                                        <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
                                    </div>

                                </div>

                                <div>
                                    <p className="mb-0">Don't have an account? <a href="#" className="text-white-50 fw-bold">Sign Up</a>
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Admin;