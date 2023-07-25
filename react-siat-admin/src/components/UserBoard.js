import { useEffect, useState } from "react";

import { Button, Form, Modal } from "react-bootstrap";
import MemberService from "../service/MemberService";

function UserBoard() {

    // 회원 불러오기
    const [members, setMembers] = useState([]);
    // 수정할 컬럼
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [selectOption, setSelectOption] = useState("");
    // 모달 보이기 안보이기 설정

    // 수정모달 
    const [show, setShow] = useState(false);
    // 수정 모달 닫을 때
    const handleClose = () => setShow(false);


    // 삭제 모달
    const [deleteShow, setDeleteShow] = useState(false);
    // 삭제 모달 닫을 때
    const deleteHandleClose = () => setDeleteShow(false);
    // 수정 버튼을 클릭 한 해당 회원 불러오기
    const [selectedMember, setSelectedMember] = useState({});

    // 수정 버튼 클릭 시
    const handleShow = (i) => {
        setSelectedMember(members[i]);
        setShow(true);
    };

    const deleteHandleShow = (i) => {
        setSelectedMember(members[i]);
        setDeleteShow(true);

    };

    // 회원테이블 가져오기
    useEffect(() => {
        fatchMembers();
    }, [])

    // MemberService 에 있는 회원테이블 가져오는 함수
    const fatchMembers = () => {
        MemberService.getMembers().then((res) => {
            console.log(res.data);
            setMembers(res.data);
        })
    }

    // 수정함수
    const updateMember = (e) => {
        e.preventDefault();
        const member = {
            member_id: selectedMember.member_id,
            name: name || selectedMember.name, // 먼저 입력한 값을 받고 입력한 값이 없으면 기존에 있던 값을 받는다.
            id: id || selectedMember.id,
            password: password || selectedMember.password,
            selectOption: selectOption || selectedMember.selectOption
        };
        console.log("member => " + JSON.stringify(member)); // 값이 제대로 들어가 있는 지 확인
        MemberService.updateMember(member).then(() => {
            console.log("성공!");
            handleClose(); // 모달 닫고
            window.location.reload(); // 강제 새로고침
        })
    }

    //삭제 함수
    const deleteMember = (e) => {
        e.preventDefault();
        
        console.log("member => " + JSON.stringify(selectedMember)); // 값이 제대로 들어가 있는 지 확인
        MemberService.deleteMember(JSON.stringify(selectedMember.member_id)).then(() => {
            console.log("성공!");
            handleClose(); // 모달 닫고
            window.location.reload(); // 강제 새로고침
        })
    }

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

    return (
        <div id="content">
            <div className="container">
                <h2>회원 관리</h2>
            </div>
            <div className="container" style={{ display: "flex", textAlign: "center", alignItems: "center", justifyContent: "center" }}>
                <table className="table table-bordered" >
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>이름</th>
                            <th>아이디</th>
                            <th>유형</th>
                            <th>관리</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            members.map((member, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{members[i].member_id}</td>
                                        <td>{members[i].name}</td>
                                        <td>{members[i].id}</td>
                                        <td>{members[i].selectOption == "teacher" ? "선생님" : members[i].selectOption + "기"}</td>
                                        <td>
                                            <Button variant="btn btn-outline-primary btn-sm" onClick={() => handleShow(i)} style={{ marginRight: "7px" }}>수정</Button>
                                            <button type="button" className="btn btn-outline-danger btn-sm" onClick={() => deleteHandleShow(i)}>삭제</button>
                                        </td>
                                    </tr>

                                )
                            })
                        }
                    </tbody>
                </table>
                {/* 수정 클릭 시 모달 창 */}
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>수정하기</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {selectedMember && (
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>이름</Form.Label>
                                    <Form.Control
                                        type="text"
                                        defaultValue={selectedMember.name}
                                        onChange={changeNameHandler}
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlTextarea1"
                                >
                                    <Form.Label>아이디</Form.Label>
                                    <Form.Control
                                        type="text"
                                        defaultValue={selectedMember.id}
                                        onChange={changeIdHandler}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>비밀번호</Form.Label>
                                    <Form.Control
                                        type="text"
                                        defaultValue={selectedMember.password}
                                        onChange={changePasswrodHandler}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Form.Label>유형</Form.Label><br />
                                    <Form.Select aria-label="Default select example" defaultValue={selectedMember.selectOption} onChange={changeSelectOptionHandler} >
                                        <option value="1">1기</option>
                                        <option value="2">2기</option>
                                        <option value="3">3기</option>
                                        <option value="4">4기</option>
                                        <option value="5">5기</option>
                                        <option value="6">6기</option>
                                        <option value="7">7기</option>
                                        <option value="teacher">선생님</option>
                                    </Form.Select>
                                </Form.Group>
                            </Form>
                        )}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose} >
                            Close
                        </Button>
                        <Button variant="primary" onClick={updateMember}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>

                {/* 삭제 모달창 */}
                <Modal show={deleteShow} onHide={deleteHandleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={deleteHandleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={deleteMember}>
                            삭제하기
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}

export default UserBoard;