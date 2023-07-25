import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MemberService from "../services/MemberService";


function Signup() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [selectOption, setSelectOption] = useState("1");


    const changeNameHandler = (e) => {
        setName(e.target.value);
    };

    const changeIdHandler = (e) => {
        setId(e.target.value);
    };

    const changePasswrodHandler = (e) => {
        setPassword(e.target.value);
    };

    const changeSelectOptionHandler = (e) => {
        setSelectOption(e.target.value);
    };

    const createMember = (e) => {
        e.preventDefault();
        const member = {
            name,
            id,
            password,
            selectOption,
        };
        console.log("member => " + JSON.stringify(member));
        MemberService.createMember(member).then(()=>{
            alert("가입성공!")
            navigate('/login')
        });
    }
    return (
        <section className="h-100">
            <div className="container h-100">
                <div className="row justify-content-sm-center h-100">
                    <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9" style={{ height: "88vh", marginTop: "50px" }}>
                        <div className="card shadow-lg">
                            <div className="card-body p-5">
                                <h1 className="fs-4 card-title fw-bold mb-4">회원가입</h1>
                                <form method="POST" className="needs-validation" noValidate="" autoComplete="off">
                                    <div className="mb-3">
                                        <label className="mb-2 text-muted" htmlFor="name">Name</label>
                                        <input id="name" type="text" onChange={changeNameHandler} className="form-control" name="name" value={name} />
                                        <div className="invalid-feedback">
                                            Name is required
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label className="mb-2 text-muted" htmlFor="email">E-Mail Address</label>
                                        <input id="email" type="text" onChange={changeIdHandler} className="form-control" name="id" value={id} />
                                        <div className="invalid-feedback">
                                            Email is invalid
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label className="mb-2 text-muted" htmlFor="password">Password</label>
                                        <input id="password" type="password" onChange={changePasswrodHandler} className="form-control" name="password" value={password} />
                                        <div className="invalid-feedback">
                                            Password is required
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label className="mb-2 text-muted" htmlFor="select">유형선택</label>
                                        <select class="form-select" name="select_option" onChange={changeSelectOptionHandler} value={selectOption}>
                                            <option value="1">1기</option>
                                            <option value="2">2기</option>
                                            <option value="3">3기</option>
                                            <option value="4">4기</option>
                                            <option value="5">5기</option>
                                            <option value="6">6기</option>
                                            <option value="7">7기</option>
                                            <option value="teacher">선생님</option>
                                        </select>
                                    </div>

                                    <p className="form-text text-muted mb-3">
                                        By registering you agree with our terms and condition.
                                    </p>

                                    <div className="align-items-center d-flex">
                                        <button onClick={createMember} className="btn btn-primary ms-auto">
                                            가입하기
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="card-footer py-3 border-0">
                                <div className="text-center">
                                    Already have an account? <a href="index.html" className="text-dark">Login</a>
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

export default Signup;