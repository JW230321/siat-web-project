import { Link } from 'react-router-dom';
import siatLogo from '../image/siatLogo.png';
import test from '../image/test.jpg'
import '../css/Process.css';

function ProcessDetail() {
    return (
        <div className="container" style={{height : "265vh", marginTop : "100px"}}>
            <h1>Process Detail</h1>
            <div style={{marginTop: 66}}>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <div>
                        <img src={siatLogo} className="rounded" alt="Cinque Terre" style={{width: 300, height: 200}} />
                    </div>
                    <div style={{marginLeft: 100}}>
                        <table className='table table-bordered' style={{width: 800, height: 200, alignItems: 'center'}}>
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
                                    <td>2024.12.25 ~ 2024.01.29 18:00까지</td>
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
                <img src={test} className="rounded" alt="Cinque Terre" style={{width: 1200}} />
            </div>
        </div>
    );
}

export default ProcessDetail;