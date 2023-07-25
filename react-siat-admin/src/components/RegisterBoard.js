import { useEffect, useState } from "react"
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import RegisterService from "../service/RegisterService";

function RegisterBoard() {
    const navigate = useNavigate();
    const [registers, setRegisters] = useState([]);

    useEffect(() => {
        RegisterService.getRegisterList().then(res => {
            console.log(res.data);
            setRegisters(res.data);
        })
    }, [])

    const RegisterRead = (register_id) => {
        navigate(`/${register_id}`)
    }

    return (
        <div className="content">
            <div className="container">
                <h2>신청서 관리</h2>
            </div>
            <div className="container" style={{ display: "flex", textAlign: "center", alignItems: "center", justifyContent: "center" }}>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>이름</th>
                            <th>연락처</th>
                            <th>주소</th>
                            <th>희망 직무</th>
                            <th>관리</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            registers.map((register) => {
                                return (
                                    <tr key={register.register_id}>
                                        <td>{register.register_id}</td>
                                        <td>{register.name}</td>
                                        <td>{register.p_number}</td>
                                        <td>{register.address}</td>
                                        <td>{register.job}</td>
                                        <td>
                                            <Button variant="btn btn-outline-primary btn-sm" onClick={() => RegisterRead(register.register_id)}>상세보기</Button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default RegisterBoard;