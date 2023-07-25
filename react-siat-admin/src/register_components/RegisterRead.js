import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RegisterService from "../service/RegisterService";
import '../css/RegisterRead.css';
import { Button, Form, Modal } from "react-bootstrap";

function RegisterRead() {
    const navigate = useNavigate();
    const { register_id } = useParams();
    const [register, setRegister] = useState({});
    const [selectedRegister, setSelectedRegister] = useState({});
    const [job, setJob] = useState('');
    const [name, setName] = useState('');
    const [birth, setBirth] = useState('');
    const [address, setAddress] = useState('');
    const [p_number, setP_number] =useState('');

    const [modifyShow, setModifyShow] = useState(false);
    const modifyClose = () => setModifyShow(false);

    useEffect(() => {
        RegisterService.getRegister(register_id).then(res => {
            setRegister(res.data);
        })
    }, [register_id])

    const modify = () => {
        setSelectedRegister(register);
        setModifyShow(true);
    }

    const updateModify = (e) => {
        e.preventDefault();
        const register = {
            register_id: selectedRegister.register_id,
            job: job || selectedRegister.job,
            name: name || selectedRegister.name,
            birth: birth || selectedRegister.birth,
            address: address || selectedRegister.address,
            p_number: p_number || selectedRegister.p_number
        }

        console.log("register => " + JSON.stringify(register));
        RegisterService.updateRegister(register_id, register).then(() => {
            modifyClose();
            window.location.reload();
        })
    }

    const deleteRegister = (e) => {
        // e.preventDefault();

        console.log("delete result => " + JSON.stringify(register));
        RegisterService.deleteRegister(register_id).then(() => {
            modifyClose();
            navigate('/read');
        })
    }

    const gotoList = () => {
        navigate('/read');
    }

    const changeJobHandler = e => {
        setJob(e.target.value);
    }

    const changeNameHandler = (e) => {
        setName(e.target.value);
    }

    const changeBirthHandler = (e) => {
        setBirth(e.target.value);
    }

    const changeAddressHandler = (e) => {
        setAddress(e.target.value);
    }

    const changeP_numberHandler = (e) => {
        setP_number(e.target.value);
    }

    return (
        <div className="content" style={{ marginBottom: 45 }}>
            <div className="container">
                <h2>신청서 상세보기</h2>
            </div>
            <div className="container" style={{ display: "flex", textAlign: "center", alignItems: "center", justifyContent: "center", flexDirection: 'column' }}>
                <table className="table" style={{ borderBottom: '3px solid #dedede', marginBottom: 0 }}>
                    <thead>
                        <th>개인 정보</th>
                    </thead>
                    <tbody>
                        <tr>
                            <th>희망 직무</th>
                            <td>{register.job}</td>
                        </tr>
                        <tr>
                            <th>이름</th>
                            <td>{register.name}</td>
                        </tr>
                        <tr>
                            <th>생년월일</th>
                            <td>{register.birth}</td>
                        </tr>
                        <tr>
                            <th>주소</th>
                            <td>{register.address}</td>
                        </tr>
                        <tr>
                            <th>본인연락처</th>
                            <td>{register.p_number}</td>
                            <th>비상연락처</th>
                            <td>010-0000-0000</td>
                        </tr>
                        <tr>
                            <th>이메일</th>
                            <td>k3@naver.com</td>
                        </tr>
                    </tbody>
                </table>
                <table className="table updateRow" style={{ borderBottom: '3px solid #dedede', marginBottom: 0 }}>
                    <thead>
                        <th>장애 상태</th>
                    </thead>
                    <tbody>
                        <tr>
                            <th>장애유형</th>
                            <td>지체장애</td>
                        </tr>
                        <tr>
                            <th>장애정도</th>
                            <td>장애의 정도가 심하지 않은</td>
                        </tr>
                        <tr>
                            <th>보장구</th>
                            <td></td>
                        </tr>
                        <tr>
                            <th>수화통역사 필요여부</th>
                            <td>불필요</td>
                        </tr>
                    </tbody>
                </table>
                <table className="table" style={{ borderBottom: '3px solid #dedede', marginBottom: 0 }}>
                    <thead>
                        <th>전공 및 자격/면허</th>
                    </thead>
                    <tbody>
                        <tr>
                            <th>최종학교 명</th>
                            <td>대한대학교</td>
                            <td>졸업(예정)</td>
                            <th>재학기간</th>
                            <td>2014.04.01~2018.02.10</td>
                            <th>전공</th>
                            <td>컴퓨터공학</td>
                        </tr>
                        <tr>
                            <th>자격/면허</th>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <table className="table" style={{ borderBottom: '3px solid #dedede' }}>
                    <thead>
                        <th>근무 경력</th>
                    </thead>
                    <tbody>
                        <tr>
                            <th>사업체 명</th>
                            <th>근무 기간</th>
                            <th>직무(직책)</th>
                            <th>고용 형태</th>
                            <th>퇴직 사유</th>
                        </tr>
                        <tr>
                            <td></td>
                            <td> ~ </td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td> ~ </td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td> ~ </td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="container">
                <h4>자기소개서</h4>
            </div>
            <div className="container">
                <table className="table modifyText">
                    <tbody>
                        <tr>
                            <th>지원동기</th>
                        </tr>
                        <tr>
                            <td>전공을 살려서 취업을 하고 싶은데 졸업 후 사고를 당해 많은 시간을 허비하게 되어 알고 있던 것을 점검하고, 새 기술 등 배워야 할 것들은 배우고 싶어서 지원하게 되었습니다!</td>
                        </tr>
                        <tr>
                            <th>경력사항(경력이 없는 경우 사회경험 사항 작성)</th>
                        </tr>
                        <tr>
                            <td>학교 친구들과 프로젝트를 진행할 때 html, css 등 프론트 쪽의 구현을 도맡아 했습니다. 웬만한 기능들을 다 구현할 수 있으나 리액트, 자바스크립트 등 부족한 부분이 아쉬웠던 경험이 있습니다.</td>
                        </tr>
                        <tr>
                            <th>성격의 장/단점</th>
                        </tr>
                        <tr>
                            <td>저는 쾌활하고 시원한 성격입니다. 덕분에 친구들과의 관계도 원만하고 친구들 사이에서 중심이 되는 경우가 많습니다. 하지만 저를 싫어하는 친구들이 있을 때에는 상처를 받지 않기 위해 그 친구들과 거리를 두는 경향이 있는데 무리에서 중심이 되곤 하니 다른 친구들도 그 친구들을 멀리하게 되어 사이가 소원해지는 단점을 가지고 있습니다.</td>
                        </tr>
                        <tr>
                            <th>훈련에 임하는 본인만의 다짐</th>
                        </tr>
                        <tr>
                            <td>프론트 엔드 쪽 뿐만 아니라 백 엔드 쪽도 열심히 공부해서 풀스택 개발자가 되는 것이 꿈입니다! 꿈에 가까워질 수 있도록 항상 노력하고 최선을 다하겠습니다.</td>
                        </tr>
                    </tbody>
                </table>
                <div style={{float: "right", marginBottom: 50}}>
                    <button type="button" className="btn btn-outline-info btn-sm" style={{ marginRight: "7px" }} onClick={() => {gotoList()}}>목록으로 이동</button>
                    <Button variant="btn btn-outline-primary btn-sm" style={{ marginRight: "7px" }} onClick={() => {modify(register_id)}}>수정</Button>
                    <button type="button" className="btn btn-outline-danger btn-sm" onClick={() => {deleteRegister(register_id)}}>삭제</button>
                </div>
                <Modal show={modifyShow} onHide={modifyClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>수정하기</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {
                            selectedRegister && (
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>희망 직무</Form.Label>
                                        <Form.Select aria-label="Default select example" defaultValue={selectedRegister.job} onChange={changeJobHandler}>
                                            <option value="소프트웨어 개발">소프트웨어 개발</option>
                                            <option value="경영사무지원">경영사무지원</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>이름</Form.Label>
                                        <Form.Control type="text" defaultValue={selectedRegister.name} onChange={changeNameHandler} />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>생년월일</Form.Label>
                                        <Form.Control type="text" defaultValue={selectedRegister.birth} onChange={changeBirthHandler} />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>주소</Form.Label>
                                        <Form.Control type="text" defaultValue={selectedRegister.address} onChange={changeAddressHandler} />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>본인연락처</Form.Label>
                                        <Form.Control type="text" defaultValue={selectedRegister.p_number} onChange={changeP_numberHandler} />
                                    </Form.Group>
                                </Form>
                            )
                        }
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={updateModify}>저장하기</Button>
                        <Button variant="secondary" onClick={modifyClose}>취소</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}

export default RegisterRead;