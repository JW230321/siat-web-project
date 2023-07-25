import { Link } from 'react-router-dom';
import siatLogo from '../image/siatLogo.png';

function ProcessComponent() {
    return (
        <div className="container" style={{height : "60vh", marginTop : "80px"}}>
            <h1>Process</h1>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div style={{width: 550}}>
                    <div>
                        <img src={siatLogo} className="rounded" alt="Cinque Terre" style={{width: 500, height: 300}} />
                    </div>
                    <div style={{marginTop: 20}}>
                        <p>소프트웨어 개발자 과정</p>
                    </div>
                    <div style={{float: 'right'}}>
                        <Link to="/input">
                            <button className='btn' style={{backgroundColor: '#03C75A', width: 150, height: 50, color: 'white'}}>신청하기</button>
                        </Link>
                        <Link to="/detail">
                            <button className='btn' style={{backgroundColor: '#d9d9d9', width: 150, height: 50, color: '#666666', marginLeft: 20}}>자세히보기</button>
                        </Link>
                    </div>
                </div>
                <div style={{width: 550, marginLeft: 150}}>
                    <div>
                        <img src={siatLogo} className="rounded" alt="Cinque Terre" style={{width: 500, height: 300}} />
                    </div>
                    <div style={{marginTop: 20}}>
                        <p>경영사무지원 과정</p>
                    </div>
                    <div style={{float: 'right'}}>
                        <Link to="/input2">
                            <button className='btn' style={{backgroundColor: '#03C75A', width: 150, height: 50, color: 'white'}}>신청하기</button>
                        </Link>
                        <Link to="/detail2">
                            <button className='btn' style={{backgroundColor: '#d9d9d9', width: 150, height: 50, color: '#666666', marginLeft: 20}}>자세히보기</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProcessComponent;