import { Link } from 'react-router-dom';
import process1 from '../image/process1.png';
import process2 from '../image/process2.png';

function ProcessComponent({zoomLevel}) {
    return (
        <div className="container" style={{ height: "auto", marginTop: "80px"}}>
            <div className="image-container" style={{marginBottom: 50}}>
                <div className="rounded1">과정 소개</div>
            </div>
            <div style={{ display: 'flex', flexDirection: zoomLevel > 200 ? "column" : "row", justifyContent: zoomLevel > 200 ? "center" : "space-around", height:"auto", width: "100%"}}>
                <div style={{marginBottom: zoomLevel > 200 ? 50 : 0}}>
                    <div>
                        <img src={process1} className="rounded" alt="Cinque Terre" style={{marginLeft: zoomLevel > 200 ? "200px" : "0px" , width: 500, height: 300, border: "1px solid #d9d9d9", marginBottom: 20 }} />
                    </div>
                    <div style={{display:"flex", justifyContent: zoomLevel > 200 ? "center" : "end"}}>
                        <Link to="/input">
                            <button className='btn' style={{ backgroundColor: '#03C75A', width: 150, height: 50, color: 'white', marginLeft: zoomLevel > 200? 200 : 0 }}>신청하기</button>
                        </Link>
                        <Link to="/detail">
                            <button className='btn' style={{ backgroundColor: '#d9d9d9', width: 150, height: 50, color: '#666666', marginLeft: 20 }}>자세히보기</button>
                        </Link>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={process2} className="rounded" alt="Cinque Terre" style={{marginLeft: zoomLevel > 200 ? "200px" : "0px" , width: 500, height: 300, border: "1px solid #d9d9d9", marginBottom: 20 }} />
                    </div>
                    <div style={{display:"flex", justifyContent: zoomLevel > 200 ? "center" : "end"}}>
                        <Link to="/input2">
                            <button className='btn' style={{ backgroundColor: '#03C75A', width: 150, height: 50, color: 'white', marginLeft: zoomLevel > 200? 200 : 0 }}>신청하기</button>
                        </Link>
                        <Link to="/detail2">
                            <button className='btn' style={{ backgroundColor: '#d9d9d9', width: 150, height: 50, color: '#666666', marginLeft: 20 }}>자세히보기</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProcessComponent;