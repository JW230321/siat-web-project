import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmploymentService from "../service/EmploymentService";
import '../css/EmploymentRead.css';
import { Button, Form, Modal } from "react-bootstrap";

function EmploymentRead() {
    const navigate = useNavigate();
    const { employment_id } = useParams();
    const [employment, setEmployment] = useState({});
    const [selectEmployment, setSelectedEmployment] = useState({});
    const [companyName, setCompanyName] = useState('');
    const [companyNum, setCompanyNum] = useState('');
    const [companyAddr, setCompanyAddr] = useState('');
    const [companyCall, setCompanyCall] = useState('');
    const [name, setName] = useState('');
    const [spot, setSpot] = useState('');
    const [type, setType] = useState('');
    const [work, setWork] = useState('');
    const [showModify, setShowModify] = useState(false);
    const [showDelete, setShowDelete] = useState(false);

    useEffect(() => {
        EmploymentService.getEmployment(employment_id).then((res) => {
            console.log(res.data);
            setEmployment(res.data);
        })
    }, [employment_id])

    const modifyModal = () => {
        setSelectedEmployment(employment);
        setShowModify(true);
    }

    const deleteModal = () => {
        setSelectedEmployment(employment);
        setShowDelete(true);
    }

    const closeModify = () => {
        setShowModify(false);
    }

    const closeDelete = () => {
        setShowDelete(false);
    }

    const updateModify = (e) => {
        e.preventDefault();

        const employment = {
            companyName: companyName || selectEmployment.companyName,
            companyNum: companyNum || selectEmployment.companyNum,
            companyAddr: companyAddr || selectEmployment.companyAddr,
            companyCall: companyCall || selectEmployment.companyCall,
            name: name || selectEmployment.name,
            spot: spot || selectEmployment.spot,
            type: type || selectEmployment.type,
            work: work || selectEmployment.work
        }

        console.log("updateEmployment => " + JSON.stringify(employment));
        EmploymentService.updateEmployment(employment_id, employment).then(() => {
            closeModify();
            window.location.reload();
        })
    }

    const deleteEmployment = () => {
        console.log("delete result => " + JSON.stringify(employment));
        EmploymentService.deleteEmployment(employment_id).then(() => {
            closeDelete();
            navigate('/employment');
        })
    }

    const gotoList = () => {
        navigate('/employment');
    }

    const changeCompanyNameHandler = (e) => {
        setCompanyName(e.target.value);
    }

    const changeCompanyNumHandler = (e) => {
        setCompanyNum(e.target.value);
    }

    const changeCompanyAddrHandler = (e) => {
        setCompanyAddr(e.target.value);
    }

    const changeCompanyCallHandler = (e) => {
        setCompanyCall(e.target.value);
    }

    const changeNameHandler = (e) => {
        setName(e.target.value);
    }

    const changeSpotHandler = (e) => {
        setSpot(e.target.value);
    }

    const changeTypeHandler = (e) => {
        setType(e.target.value);
    }

    const changeWorkHandler = (e) => {
        setWork(e.target.value);
    }

    return (
        <div className="content" style={{ marginBottom: 45 }}>
            <div className="container">
                <h2>구인요청 상세보기</h2>
            </div>
            <div className="container" style={{ display: "flex", textAlign: "center", alignItems: "center", justifyContent: "center", flexDirection: 'column' }}>
                <table className="table" style={{ borderBottom: '3px solid #dedede', marginBottom: 0 }}>
                    <thead>
                        <tr>
                            <th>업체 정보</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>업체 명</th>
                            <td>{employment.companyName}</td>
                            <th>사업자번호</th>
                            <td>{employment.companyNum}</td>
                        </tr>
                        <tr>
                            <th>주소</th>
                            <td>{employment.companyAddr}</td>
                        </tr>
                        <tr>
                            <th>홈페이지</th>
                            <td>{employment.companyName}@gmail.com</td>
                            <th>대표전화</th>
                            <td>{employment.companyCall}</td>
                        </tr>
                    </tbody>
                </table>
                <table className="table update" style={{ borderBottom: '3px solid #dedede', marginBottom: 0 }}>
                    <thead>
                        <tr>
                            <th>채용담당자 정보</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>이름</th>
                            <td>{employment.name}</td>
                            <th>직위</th>
                            <td>{employment.spot}</td>
                        </tr>
                        <tr>
                            <th>이메일</th>
                            <td colSpan="3">{employment.name}@gmail.com</td>
                        </tr>
                    </tbody>
                </table>
                <table className="table" style={{ borderBottom: '3px solid #dedede', marginBottom: 0 }}>
                    <thead>
                        <tr>
                            <th>채용 기본사항</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>모집분야</th>
                            <td>{employment.type}</td>
                        </tr>
                        <tr>
                            <th>담당업무</th>
                            <td>{employment.work}</td>
                        </tr>
                        <tr>
                            <th>근무지 소재</th>
                            <td>경기도 성남시</td>
                            <th>연봉</th>
                            <td>약 2500 만 원</td>
                        </tr>
                        <tr>
                            <th>요구기술</th>
                            <td>Java, Web</td>
                        </tr>
                    </tbody>
                </table>
                <table className="table" style={{ borderBottom: '3px solid #dedede', marginBottom: 0 }}>
                    <thead>
                        <tr>
                            <th>자격 요건</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>학력</th>
                            <td>고졸</td>
                            <th>성별</th>
                            <td>제한 없음</td>
                        </tr>
                        <tr>
                            <th>연령</th>
                            <td>만 20 ~ 28세</td>
                            <th>경력</th>
                            <td>0년</td>
                        </tr>
                    </tbody>
                </table>
                <table className="table" style={{ borderBottom: '3px solid #dedede', marginBottom: 0 }}>
                    <thead>
                        <tr>
                            <th>기타 사항</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>필요서류</th>
                            <td>입사지원서, 자기소개서, 포트폴리오</td>
                        </tr>
                        <tr>
                            <th>채용인원</th>
                            <td>0명</td>
                        </tr>
                        <tr>
                            <th>접수마감일</th>
                            <td>2023년 8월 31일</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div style={{ float: "right", margin: "20px 50px 50px 0" }}>
                <button onClick={() => gotoList()} type="button" className="btn btn-outline-info btn-sm" style={{ marginRight: "7px" }}>목록으로 이동</button>
                <Button onClick={() => modifyModal(employment_id)} variant="btn btn-outline-primary btn-sm" style={{ marginRight: "7px" }}>수정</Button>
                <button onClick={() => deleteModal(employment_id)} type="button" className="btn btn-outline-danger btn-sm">삭제</button>
            </div>
            <Modal show={showModify} onHide={closeModify}>
                <Modal.Header>
                    <Modal.Title>수정하기</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        selectEmployment && (
                            <Form>
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <Form.Label>업체 정보</Form.Label>
                                </div>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>업체 명</Form.Label>
                                    <Form.Control type="text" defaultValue={selectEmployment.companyName} onChange={changeCompanyNameHandler} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>사업자번호</Form.Label>
                                    <Form.Control type="text" defaultValue={selectEmployment.companyNum} onChange={changeCompanyNumHandler} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>주소</Form.Label>
                                    <Form.Control type="text" defaultValue={selectEmployment.companyAddr} onChange={changeCompanyAddrHandler} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>대표전화</Form.Label>
                                    <Form.Control type="text" defaultValue={selectEmployment.companyCall} onChange={changeCompanyCallHandler} />
                                </Form.Group>
                                <br />
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <Form.Label>채용담당자 정보</Form.Label>
                                </div>
                                <Form.Group>
                                    <Form.Label>이름</Form.Label>
                                    <Form.Control type="text" defaultValue={selectEmployment.name} onChange={changeNameHandler} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>직위</Form.Label>
                                    <Form.Control type="text" defaultValue={selectEmployment.spot} onChange={changeSpotHandler} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>모집분야</Form.Label>
                                    <Form.Control type="text" defaultValue={selectEmployment.type} onChange={changeTypeHandler} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>담당업무</Form.Label>
                                    <Form.Control type="text" defaultValue={selectEmployment.work} onChange={changeWorkHandler} />
                                </Form.Group>
                            </Form>
                        )
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={updateModify}>저장하기</Button>
                    <Button variant="secondary" onClick={closeModify}>취소</Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showDelete} onHide={closeDelete}>
                <Modal.Header>삭제하기</Modal.Header>
                <Modal.Body>정말로 삭제하시겠습니까? 삭제 후 되돌릴 수 없습니다.</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={deleteEmployment}>삭제하기</Button>
                    <Button variant="secondary" onClick={closeDelete}>취소</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default EmploymentRead;