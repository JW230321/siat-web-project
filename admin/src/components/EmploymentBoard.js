import { useEffect, useState } from "react";
import EmploymentService from "../service/EmploymentService";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function EmploymentBoard() {
    const navigate = useNavigate();
    const [employment, setEmployment] = useState([]);

    useEffect(() => {
        EmploymentService.employmentGetList().then(res => {
            console.log(res.data);
            setEmployment(res.data);
        })
    }, []);

    const EmploymentRead = (employment_id) => {
        navigate(`/employment/${employment_id}`)
    }

    return (
        <div className="content">
            <div className="container">
                <h2>구인요청 관리</h2>
            </div>
            <div className="container" style={{ display: "flex", textAlign: "center", alignItems: "center", justifyContent: "center" }}>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>업체 명</th>
                            <th>업체 주소</th>
                            <th>대표전화</th>
                            <th>모집분야</th>
                            <th>담당업무</th>
                            <th>관리</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employment.map((employ) => {
                                return (
                                    <tr key={employ.employment_id}>
                                        <td>{employ.employment_id}</td>
                                        <td>{employ.companyName}</td>
                                        <td>{employ.companyAddr}</td>
                                        <td>{employ.companyCall}</td>
                                        <td>{employ.type}</td>
                                        <td>{employ.work}</td>
                                        <td>
                                        <Button variant="btn btn-outline-primary btn-sm" onClick={() => EmploymentRead(employ.employment_id)}>상세보기</Button>
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

export default EmploymentBoard;