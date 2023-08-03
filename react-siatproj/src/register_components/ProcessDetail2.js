import { Link } from 'react-router-dom';
import process2 from '../image/process2.png';
import image from '../image/image.jpg'
import '../css/Process.css';

function ProcessDetail({zoomLevel}) {
    return (
        <div className="container" style={{height : "auto", marginTop : "100px"}}>
            <div className="image-container" style={{marginBottom: 50}}>
                <div className="rounded1">경영사무지원 과정 소개</div>
            </div>
            <div style={{marginTop: 50}}>
                <div style={{display: 'flex', flexDirection: zoomLevel > 200 ? "column" : "row", justifyContent: zoomLevel > 200 ? "center" : "space-between", height:"auto", width: "100%"}}>
                    <div>
                        <img src={process2} className="rounded" alt="Cinque Terre" style={{width: 400, height: 230, marginLeft: zoomLevel > 200 ? "200px" : "0px", border: "1px solid #d9d9d9", marginBottom: zoomLevel > 200 ? 20 : 0}} />
                    </div>
                    <div style={{marginLeft: zoomLevel > 200 ? 0 : 100}}>
                        <table className='table table-bordered' style={{width: "100%", height: 230, alignItems: 'center'}}>
                            <tbody style={{textAlign: 'center'}}>
                                <tr>
                                    <th>훈련과정</th>
                                    <td>경영사무지원</td>
                                    <th>훈련기간</th>
                                    <td>2024.02.12(월)~2024.06.14(금)</td>
                                </tr>
                                <tr>
                                    <th>훈련장소</th>
                                    <td>한국장애인고용공단 판교디지털훈련센터</td>
                                    <th>훈련시간</th>
                                    <td>평일 오전 9시~오후 5시</td>
                                </tr>
                                <tr>
                                    <th>모집기간</th>
                                    <td>2023.12.25 ~ 2024.01.29 18:00까지</td>
                                    <th>면접기간</th>
                                    <td>2024.02.01~2024.02.02</td>
                                </tr>
                            </tbody>
                        </table>
                        <div style={{float: 'right', marginTop: 30}}>
                        <Link to="/input2">
                            <button className='btn' style={{backgroundColor: '#03C75A', width: 150, height: 50, color: 'white'}}>신청하기</button>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{marginTop: 46, display: 'flex', justifyContent: 'center'}}>
                <img src={image} className="rounded" alt="Cinque Terre" style={{width: 1200}} />
            </div>
        </div>
    );
}

export default ProcessDetail;