
import '../css/Input.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import RegisterService from '../register_service/RegisterService';

function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}년 ${month}월 ${day}일`;
}

function ProcessInput() {
    const navigate = useNavigate();
    const [name, setName] = useState();
    const [birth, setBirth] = useState();
    const [address, setAddress] = useState();
    const [p_number, setP_number] = useState();
    const [created_date, setCreated_date] = useState(formatDate(new Date()));
    const [job, setJob] = useState("소프트웨어 개발");
    const [scrollToTop, setScrollToTop] = useState(false);

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleBirthChange = (e) => {
        setBirth(e.target.value);
    }

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    }

    const handleP_numChange = (e) => {
        setP_number(e.target.value);
    }

    const handleCreated_date = (e) => {
        setCreated_date(e.target.value);
    }

    const handleJobChange = (e) => {
        setJob(e.target.value);
    }

    const register = (e) => {
        e.preventDefault();

        if (!name || !birth || !address || !p_number) {
            alert("필수항목을 입력하세요!");
            setScrollToTop(true);
            return;
        }

        let register = {
            name: name,
            birth: birth,
            address: address,
            p_number: p_number,
            created_date: created_date,
            job: job
        };

        console.log("register => " + JSON.stringify(register));
        RegisterService.register(register).then(() => {
            navigate('/process')
        })
    }

    if (scrollToTop) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setScrollToTop(false);
    }

    return (
        <div className="container" style={{ height: "530vh", marginTop: "100px" }}>
            <div style={{ borderRadius: 10, padding: 20, marginTop: 20, height: 4350 }}>
                <form className="form-inline" method="post" action="/input">
                    <h4>개인 정보</h4>
                    <table className="table">
                        <tbody>
                            <tr>
                                <th>
                                    <label htmlFor="job" className="mr-sm-2">희망 직무</label>
                                </th>
                                <td>
                                    <select value={job} onChange={handleJobChange} required>
                                        <option value="소프트웨어 개발">소프트웨어 개발</option>
                                        <option value="경영사무지원" disabled>경영사무지원</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <label htmlFor="name" className="mr-sm-2 ">성    명 *</label>
                                </th>
                                <td colSpan="3">
                                    <input type="text" className="form-control mb-2" placeholder="이름을 입력하세요." id="name" name='name' value={name} onChange={handleNameChange} />
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <label htmlFor="age" className="mr-sm-2 ">생년 월일 *</label>
                                </th>
                                <td colSpan="3">
                                    <input type="text" className="form-control mb-2 mr-sm-2" placeholder="6자리로 입력하세요. (예. 910101)" id="year" name='year' value={birth} onChange={handleBirthChange} />
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <label htmlFor="address" className="mr-sm-2 ">주    소 *</label>
                                </th>
                                <td colSpan="3">
                                    <input type="text" className="form-control mb-2 mr-sm-2" placeholder="주소를 입력하세요." id="address" name='address' value={address} onChange={handleAddressChange} />
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <label htmlFor="phone" className="mr-sm-2">본인연락처 *</label>
                                </th>
                                <td>
                                    <input type="text" className="form-control mb-2 mr-sm-2 " placeholder="'-'을 포함해 입력하세요." id="phone" name='phone' value={p_number} onChange={handleP_numChange} />
                                </td>
                                <th>
                                    <label htmlFor="phone" className="mr-sm-2">비상연락처</label>
                                </th>
                                <td>
                                    <input type="text" className="form-control mb-2 mr-sm-2 " placeholder="(예. 010-0000-0000)" id="Ephone" name='Ephone' />
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <label htmlFor="email" className="mr-sm-2 ">이 메 일</label>
                                </th>
                                <td colSpan="3">
                                    <input type="email" className="form-control mb-2 mr-sm-2" placeholder="이메일을 입력하세요." id="email" name='email' /><br />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>장애 상태</h4>
                    <table className="table">
                        <tbody>
                            <tr>
                                <th>
                                    <label htmlFor="category" className="mr-sm-2 ">장애 유형</label>
                                </th>
                                <td>
                                    <input type="checkbox" name='phy' value="지체" /> 지체장애
                                    <input type="checkbox" name='enc' value="뇌병변" /> 뇌병변장애
                                    <input type="checkbox" name='vis' value="시각" /> 시각장애
                                    <input type="checkbox" name='dea' value="청각" /> 청각장애<br />
                                    <input type="checkbox" name='spe' value="언어" /> 언어장애
                                    <input type="checkbox" name='int' value="지적" /> 지적장애
                                    <input type="checkbox" name='aut' value="자폐성" /> 자폐성장애
                                    <input type="checkbox" name='men' value="정신" /> 정신장애<br />
                                    <input type="checkbox" name='kid' value="신장" /> 신장장애
                                    <input type="checkbox" name='hea' value="심장" /> 심장장애
                                    <input type="checkbox" name='res' value="호흡기" /> 호흡기장애
                                    <input type="checkbox" name='liv' value="간" /> 간장애<br />
                                    <input type="checkbox" name='fac' value="안면" /> 안면장애
                                    <input type="checkbox" name='sto' value="장루요루" /> 장루요루장애
                                    <input type="checkbox" name='epi' value="뇌전증" /> 뇌전증장애
                                    <input type="checkbox" name='mer' value="상이등급" /> 상이등급
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <label htmlFor="degree" className="mr-sm-2 ">장애 정도</label>
                                </th>
                                <td>
                                    <input type="checkbox" name='severe' value="장애의 정도가 심한" /> 장애의 정도가 심한<br />
                                    <input type="checkbox" name='Nsevere' value="장애의 정도가 심하지 않은" /> 장애의 정도가 심하지 않은
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <label htmlFor="assist" className="mr-sm-2">보 장 구</label>
                                </th>
                                <td>
                                    <input type="text" className="form-control mb-2 mr-sm-2" placeholder="보장구를 가지고 있다면 입력하세요." id="assist" name='assist' />
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <label htmlFor="interpreter" className="mr-sm-2">수화통역사 필요여부</label>
                                </th>
                                <td>
                                    <input type="checkbox" name='necessary' value="필요" /> 필요<br />
                                    <input type="checkbox" name='Unecessary' value="불필요" /> 불필요
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>전공 및 자격/면허</h4>
                    <table className="table major">
                        <tbody>
                            <tr>
                                <th>
                                    <label htmlFor="grade" className="mr-sm-2 ">최종학교명</label>
                                </th>
                                <td colSpan="7">
                                    <input type="text" className="form-control mb-2 mr-sm-2" placeholder="최종학교명을 입력하세요." id="grade" name='grade' />
                                </td>
                                <td>
                                    <input type="checkbox" name='attending' value="재학" /> 재학<br />
                                    <input type="checkbox" name='graduate' value="졸업" /> 졸업(예정)
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <label htmlFor="period" className="mr-sm-2">재학 기간</label>
                                </th>
                                <td>
                                    <input type="text" className="form-control mb-2 mr-sm-2" placeholder="년(4자리)" id="Syear" name='FsYear' />
                                </td>
                                <td>
                                    년
                                </td>
                                <td>
                                    <input type="text" className="form-control mb-2 mr-sm-2" placeholder="월(2자리)" id="Smonth" name='FsMonth' />
                                </td>
                                <td>
                                    월 ~
                                </td>
                                <td>
                                    <input type="text" className="form-control mb-2 mr-sm-2" placeholder="년(4자리)" id="Syear" name='RsYear' />
                                </td>
                                <td>
                                    년
                                </td>
                                <td>
                                    <input type="text" className="form-control mb-2 mr-sm-2" placeholder="월(2자리)" id="Smonth" name='RsMonth' />
                                </td>
                                <td>
                                    월
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <label htmlFor="major" className="mr-sm-2">전   공</label>
                                </th>
                                <td colSpan="8">
                                    <input type="text" className="form-control mb-2 mr-sm-2" placeholder="전공을 입력하세요." id="major" name='major' />
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <label htmlFor="license" className="mr-sm-2 ">자격/면허</label>
                                </th>
                                <td colSpan="8">
                                    <input type="text" className="form-control mb-2 mr-sm-2" id="license" name='license' />
                                    <input type="text" className="form-control mb-2 mr-sm-2" id="license" name='license' />
                                    <input type="text" className="form-control mb-2 mr-sm-2" id="license" name='license' />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>근무 경력</h4>
                    <table className="table">
                        <tbody>
                            <tr>
                                <th>사업체 명</th>
                                <th colSpan="3">근무 기간</th>
                                <th>직무(직책)</th>
                                <th>고용 형태</th>
                                <th>퇴직 사유</th>
                            </tr>
                            <tr>
                                <td>
                                    <input type="text" className="form-control mb-2 mr-sm-2" id="Cname" name='Cname' />
                                </td>
                                <td>
                                    <input type="text" className="form-control mb-2 mr-sm-2" id="Cperiod" name='Cperiod' />
                                </td>
                                <td>
                                    ~
                                </td>
                                <td>
                                    <input type="text" className="form-control mb-2 mr-sm-2" id="Cperiod" name='Cperiod' />
                                </td>
                                <td>
                                    <input type="text" className="form-control mb-2 mr-sm-2" id="Cjob" name='Cjob' />
                                </td>
                                <td>
                                    <input type="text" className="form-control mb-2 mr-sm-2" id="Cshape" name='Cshape' />
                                </td>
                                <td>
                                    <input type="text" className="form-control mb-2 mr-sm-2" id="Creason" name='Creason' />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="text" className="form-control mb-2 mr-sm-2" id="Cname" name='Cname' />
                                </td>
                                <td>
                                    <input type="text" className="form-control mb-2 mr-sm-2" id="Cperiod" name='Cperiod' />
                                </td>
                                <td>
                                    ~
                                </td>
                                <td>
                                    <input type="text" className="form-control mb-2 mr-sm-2" id="Cperiod" name='Cperiod' />
                                </td>
                                <td>
                                    <input type="text" className="form-control mb-2 mr-sm-2" id="Cjob" name='Cjob' />
                                </td>
                                <td>
                                    <input type="text" className="form-control mb-2 mr-sm-2" id="Cshape" name='Cshape' />
                                </td>
                                <td>
                                    <input type="text" className="form-control mb-2 mr-sm-2" id="Creason" name='Creason' />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="text" className="form-control mb-2 mr-sm-2" id="Cname" name='Cname' />
                                </td>
                                <td>
                                    <input type="text" className="form-control mb-2 mr-sm-2" id="Cperiod" name='Cperiod' />
                                </td>
                                <td>
                                    ~
                                </td>
                                <td>
                                    <input type="text" className="form-control mb-2 mr-sm-2" id="Cperiod" name='Cperiod' />
                                </td>
                                <td>
                                    <input type="text" className="form-control mb-2 mr-sm-2" id="Cjob" name='Cjob' />
                                </td>
                                <td>
                                    <input type="text" className="form-control mb-2 mr-sm-2" id="Cshape" name='Cshape' />
                                </td>
                                <td>
                                    <input type="text" className="form-control mb-2 mr-sm-2" id="Creason" name='Creason' />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <br />
                    <div style={{ textAlign: "center" }}>
                        상기 본인은 위의 사항이 틀림없음을 확인하며,
                        채용 및 훈련과정에 대한 사항을 충분히 이해하고
                        대상자 선발을 위한 평가에 성실히 임할 것을 약속합니다.
                    </div>
                    <br />
                    <div style={{float: 'right'}}>
                        {created_date}<br />
                        지원자 성명 : {name} (서명)
                    </div>
                    <br />
                    <br />
                    <br />
                    <hr />
                    <h4>자기소개서</h4>
                    <table className='table'>
                        <tbody>
                            <tr>
                                <th>
                                    <label htmlFor="motivation" className="mr-sm-2">지원 동기</label>
                                </th>
                            </tr>
                            <tr>
                                <td>
                                    <textarea className="form-control" rows="5" id="motivation" name='motivation'></textarea>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <label htmlFor="motivation" className="mr-sm-2">경력 사항(경력이 없는 경우 사회 경험 사항 작성)</label>
                                </th>
                            </tr>
                            <tr>
                                <td>
                                    <textarea className="form-control" rows="5" id="career" name='career'></textarea>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <label htmlFor="motivation" className="mr-sm-2">성격의 장/단점</label>
                                </th>
                            </tr>
                            <tr>
                                <td>
                                    <textarea className="form-control" rows="5" id="personality" name='personality'></textarea>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <label htmlFor="motivation" className="mr-sm-2">훈련에 임하는 본인만의 다짐</label>
                                </th>
                            </tr>
                            <tr>
                                <td>
                                    <textarea className="form-control" rows="5" id="promise" name='promise'></textarea>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <br />
                    <div style={{ textAlign: "center" }}>
                        모든 기재사항은 사실과 다름이 없음을 확인합니다.
                    </div>
                    <br />
                    <div style={{ float: "right" }}>
                        {created_date}<br />
                        지원자 성명 : {name} (서명)
                    </div>
                    <br />
                    <br />
                    <br />
                    <hr />
                    <br />
                    <h4>개인정보 수집·이용 및 제 3자 제공 동의서</h4>
                    <br />
                    <div className="text">
                        2023년 기업연합(16개 기업)은  청년장애인 훈련을 위하여 아래와 같이 개인
                        정보를 수집·이용 및 제3자 제공하고자 합니다. 아래 내용을 자세히 읽은 후
                        동의 여부를 결정하여 주시기 바랍니다.<br />
                        <br />
                        □ 개인정보 수집‧이용에 대한 동의<br />
                        <br />
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>항 목</th>
                                    <th>수집목적</th>
                                    <th>보유기간</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>성명, 생년월일, 주소,<br />
                                        연락처, 전자우편,<br />
                                        자격/경력사항 등
                                    </td>
                                    <td>
                                        채용절차 진행 및<br />
                                        직업능력개발 지원 관리
                                    </td>
                                    <td>
                                        「채용절차의 공정화에 관한<br />
                                        법률」에 따라 채용종료 후<br />
                                        180일 까지,<br />
                                        개인정보 삭제요청 시까지
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        ※ 위의 개인정보 수집‧이용에 대한 동의를 거부할 권리가 있습니다. 다만, 동의를
                        거부할 경우 채용 제한 및 직업능력개발 관련 지원을 받으실 수 없습니다.
                    </div>
                    <br />
                    <p>☞ 위와 같이 개인정보를 수집·이용하는데 동의하십니까?</p>
                    <div className="form-check-inline" style={{ float: "right" }}>
                        <input type="radio" name="agree" value="1" /> 동의
                        <input type="radio" name="Nagree" value="2" /> 미동의
                    </div>
                    <br />
                    <br />
                    <div className="text">
                        □ 민감정보 수집‧이용에 대한 동의
                        <br />
                        <br />
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>항 목</th>
                                    <th>수집목적</th>
                                    <th>보유기간</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        장애정보, 보훈여부
                                    </td>
                                    <td>
                                        채용절차 진행 및<br />
                                        직업능력개발 지원 관리
                                    </td>
                                    <td>
                                        「채용절차의 공정화에 관한<br />
                                        법률」에 따라 채용종료 후<br />
                                        180일 까지,<br />
                                        개인정보 삭제요청 시까지
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        ※ 위의 민감정보 수집‧이용에 대한 동의를 거부할 권리가 있습니다. 다만, 동의를
                        거부할 경우 채용 제한 및 직업능력개발 관련 지원을 받으실 수 없습니다.
                    </div>
                    <br />
                    <p>☞ 위와 같이 개인정보를 수집·이용하는데 동의하십니까?</p>
                    <div className="form-check-inline" style={{ float: "right" }}>
                        <input type="radio" name="agree2" value="1" /> 동의
                        <input type="radio" name="Nagree2" value="2" /> 미동의
                    </div>
                    <br />
                    <br />
                    <div className="text">
                        □ 개인정보 제3자 제공에 대한 동의
                        <br />
                        <br />
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>제공받는 기관</th>
                                    <th>제공목적</th>
                                    <th>제공하는 항목</th>
                                    <th>보유기간</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        한국장애인고용공단
                                    </td>
                                    <td>
                                        직업능력개발훈련서비스 제공,<br />
                                        공공부조 및 사회서비스 수혜이력<br />
                                        조회, 공단 및 다른 직업훈련기관에서<br />
                                        제공한 직업 훈련 이력 조회<br />
                                        (대상자 선발을 위한 자격요건 확인)
                                    </td>
                                    <td>
                                        성명, 연락처,<br />
                                        생년월일,<br />
                                        전자우편
                                    </td>
                                    <td>
                                        목적달성시<br />
                                        즉시 파기
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        ※ 위의 개인정보 제3자 제공에 대한 동의를 거부할 권리가 있습니다. 다만, 동의를
                        거부할 경우 한국장애인고용공단에서 제공하는 취업정보 제공 및 직업능력개발
                        관련 지원을 받으실 수 없습니다.
                    </div>
                    <br />
                    <p>☞ 위와 같이 개인정보를 제3자에게 제공하는데 동의하십니까?</p>
                    <div className="form-check-inline" style={{ float: "right" }}>
                        <input type="radio" name="agree3" value="1" /> 동의
                        <input type="radio" name="Nagree3" value="2" /> 미동의
                    </div>
                    <br />
                    <br />
                    <div>
                        □ 민감정보 제3자 제공에 대한 동의<br />
                        <br />
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>제공받는 기관</th>
                                    <th>제공목적</th>
                                    <th>제공하는 항목</th>
                                    <th>보유기간</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        한국장애인고용공단
                                    </td>
                                    <td>
                                        직업능력개발훈련서비스 제공,<br />
                                        공공부조 및 사회서비스 수혜이력<br />
                                        조회, 공단 및 다른 직업훈련기관에서<br />
                                        제공한 직업 훈련 이력 조회<br />
                                        (대상자 선발을 위한 자격요건 확인)
                                    </td>
                                    <td>
                                        성명, 연락처,<br />
                                        생년월일,<br />
                                        전자우편
                                    </td>
                                    <td>
                                        목적달성시<br />
                                        즉시 파기
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        ※ 위의 개인정보 제3자 제공에 대한 동의를 거부할 권리가 있습니다. 다만, 동의를
                        거부할 경우 한국장애인고용공단에서 제공하는 취업정보 제공 및 직업능력개발
                        관련 지원을 받으실 수 없습니다.
                    </div>
                    <br />
                    <p>☞ 위와 같이 개인정보를 제3자에게 제공하는데 동의하십니까?</p>
                    <div className="form-check-inline" style={{ float: "right" }}>
                        <input type="radio" name="agree4" value="1" /> 동의
                        <input type="radio" name="Nagree4" value="2" /> 미동의
                    </div>
                    <br />
                    <br />
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        {created_date}<br />
                        본인 성명 : {name} (서명 또는 인)
                    </div>
                </form>
                <button type="submit" className="btn btn-primary mb-2" onClick={register} style={{ float: 'right', width: 150, height: 50 }}>Submit</button>
            </div>
        </div>
    );
}

export default ProcessInput;