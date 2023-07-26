import { useState } from "react";
import EmploymentService from "../employment_service/EmploymentService";
import { useNavigate } from "react-router-dom";

function EmploymentInput() {
    const navigate = useNavigate();
    const [companyName, setCompanyName] = useState();
    const [companyNum, setCompanyNum] = useState();
    const [companyAddr, setCompanyAddr] = useState();
    const [companyCall, setCompanyCall] = useState();
    const [name, setName] = useState();
    const [spot, setSpot] = useState();
    const [type, setType] = useState();
    const [work, setWork] = useState();
    const [scrollToTop, setScrollToTop] = useState(false);

    const changeCNameHandler = e => {
        setCompanyName(e.target.value);
    }

    const changeCNumHandler = e => {
        setCompanyNum(e.target.value);
    }

    const changeCAddrHandler = e => {
        setCompanyAddr(e.target.value);
    }

    const changeCCallHandler = e => {
        setCompanyCall(e.target.value);
    }

    const changeNameHandler = e => {
        setName(e.target.value);
    }

    const changeSpotHandler = e => {
        setSpot(e.target.value);
    }

    const changeTypeHandler = e => {
        setType(e.target.value);
    }

    const changeWorkHandler = e => {
        setWork(e.target.value);
    }

    const insertEmployment = (e) => {
        e.preventDefault();

        if(!companyName || !companyNum || !companyAddr || !companyCall || !name || !spot || !type || !work) {
            alert("필수항목을 입력하세요!");
            setScrollToTop(true);
            return;
        }

        let employment = {
            companyName: companyName,
            companyNum: companyNum,
            companyAddr: companyAddr,
            companyCall: companyCall,
            name: name,
            spot: spot,
            type: type,
            work: work
        }

        console.log("employment => " + JSON.stringify(employment));
        EmploymentService.insertEmployment(employment).then(() => {
            navigate('/');
        })
    }

    if (scrollToTop) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setScrollToTop(false);
    }

    return (
        <div className="container" style={{ height: "150vh", marginTop: "80px" }}>
            <div style={{ padding: 20, marginTop: 20 }}>
                <form method="post" action="/employment">
                    <h4>업체 정보</h4>
                    <table className="table">
                        <tbody>
                            <tr>
                                <th>
                                    <label htmlFor="companyName" className="mr-sm-2 ">업체 명 *</label>
                                </th>
                                <td>
                                    <input value={companyName} onChange={changeCNameHandler} type="text" className="form-control mb-2" id="companyName" name='companyName' />
                                </td>
                                <th>
                                    <label htmlFor="companyNum" className="mr-sm-2 ">사업자번호 *</label>
                                </th>
                                <td>
                                    <input value={companyNum} onChange={changeCNumHandler} type="text" className="form-control mb-2" id="companyNum" name='companyNum' />
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <label htmlFor="companyAddr" className="mr-sm-2 ">주소 *</label>
                                </th>
                                <td colSpan="3">
                                    <input value={companyAddr} onChange={changeCAddrHandler} type="text" className="form-control mb-2" id="companyAddr" name='companyAddr' />
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <label htmlFor="companyName" className="mr-sm-2 ">홈페이지</label>
                                </th>
                                <td>
                                    <input type="text" className="form-control mb-2" id="companyName" name='companyName' />
                                </td>
                                <th>
                                    <label htmlFor="companyCall" className="mr-sm-2 ">대표전화 *</label>
                                </th>
                                <td>
                                    <input value={companyCall} onChange={changeCCallHandler} type="text" className="form-control mb-2" id="companyCall" name='companyCall' />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <br />
                    <h4>채용담당자 정보</h4>
                    <table className="table">
                        <tbody>
                            <tr>
                                <th>
                                    <label htmlFor="name" className="mr-sm-2 ">이름 *</label>
                                </th>
                                <td>
                                    <input value={name} onChange={changeNameHandler} type="text" className="form-control mb-2" id="name" name='name' />
                                </td>
                                <th>
                                    <label htmlFor="spot" className="mr-sm-2 ">직위 *</label>
                                </th>
                                <td>
                                    <input value={spot} onChange={changeSpotHandler} type="text" className="form-control mb-2" id="spot" name='spot' />
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <label htmlFor="email" className="mr-sm-2 ">이메일</label>
                                </th>
                                <td colSpan="3">
                                    <input type="text" className="form-control mb-2" id="email" name='email' />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <br />
                    <h4>채용 기본사항</h4>
                    <table className="table">
                        <tbody>
                            <tr>
                                <th>
                                    <label htmlFor="type" className="mr-sm-2 ">모집분야 *</label>
                                </th>
                                <td colSpan="5">
                                    <input value={type} onChange={changeTypeHandler} type="text" className="form-control mb-2" id="type" name='type' />
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <label htmlFor="work" className="mr-sm-2 ">담당업무 *</label>
                                </th>
                                <td colSpan="5">
                                    <input value={work} onChange={changeWorkHandler} type="text" className="form-control mb-2" id="work" name='work' />
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <label htmlFor="workAddr" className="mr-sm-2 ">근무지 소재</label>
                                </th>
                                <td>
                                    <input type="text" className="form-control mb-2" id="workAddr" name='workAddr' />
                                </td>
                                <th>
                                    <label htmlFor="money" className="mr-sm-2 ">연봉</label>
                                </th>
                                <td>
                                    약
                                </td>
                                <td>
                                    <input type="text" className="form-control mb-2" id="money" name='money' />
                                </td>
                                <td>
                                    만 원
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <label htmlFor="tech" className="mr-sm-2 ">요구기술</label>
                                </th>
                                <td colSpan="5">
                                    <textarea className="form-control" rows="5" id="tech" name='tech'></textarea>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <br />
                    <h4>자격 요건</h4>
                    <table className="table">
                        <tbody>
                            <tr>
                                <th colSpan="2">
                                    <label htmlFor="edu" className="mr-sm-2 ">학력</label>
                                </th>
                                <td colSpan="3">
                                    <select required>
                                        <option>제한 없음</option>
                                        <option>고졸</option>
                                        <option>대졸</option>
                                    </select>
                                </td>
                                <th colSpan="2">
                                    <label htmlFor="gender" className="mr-sm-2 ">성별</label>
                                </th>
                                <td colSpan="2">
                                    <select required>
                                        <option>제한 없음</option>
                                        <option>남성</option>
                                        <option>여성</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <label htmlFor="age" className="mr-sm-2 ">연령</label>
                                </th>
                                <td>
                                    만
                                </td>
                                <td>
                                    <input type="text" className="form-control mb-2" id="age" name='age' />
                                </td>
                                <td>
                                    ~
                                </td>
                                <td>
                                    <input type="text" className="form-control mb-2" id="age" name='age' />
                                </td>
                                <td>
                                    세
                                </td>
                                <th>
                                    <label htmlFor="career" className="mr-sm-2 ">경력</label>
                                </th>
                                <td>
                                    <input type="text" className="form-control mb-2" id="career" name='career' />
                                </td>
                                <td>
                                    년
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <br />
                    <h4>기타 사항</h4>
                    <table className="table">
                        <tbody>
                            <tr>
                                <th>
                                    <label htmlFor="docu" className="mr-sm-2 ">필요서류</label>
                                </th>
                                <td colSpan="9">
                                    <input type="text" className="form-control mb-2" id="docu" name='docu' />
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <label htmlFor="count" className="mr-sm-2 ">채용인원</label>
                                </th>
                                <td colSpan="5">
                                    <input type="text" className="form-control mb-2" id="count" name='count' />
                                </td>
                                <td>
                                    명(숫자)
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <label htmlFor="period" className="mr-sm-2 ">접수마감일</label>
                                </th>
                                <td>
                                    <input type="text" className="form-control mb-2" id="year" name='year' />
                                </td>
                                <td>
                                    년
                                </td>
                                <td>
                                    <input type="text" className="form-control mb-2" id="month" name='month' />
                                </td>
                                <td>
                                    월
                                </td>
                                <td>
                                    <input type="text" className="form-control mb-2" id="day" name='day' />
                                </td>
                                <td>
                                    일
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
                <button onClick={insertEmployment} type="submit" className="btn btn-primary mb-2" style={{ float: 'right', width: 150, height: 50 }}>Submit</button>
            </div>
        </div>
    )                         
}

export default EmploymentInput;