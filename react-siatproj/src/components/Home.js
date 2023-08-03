import HomeBanner from "./HomeBanner";
import '../css/home.css';
import banner from "../image/banner.png"

function Home() {
    
    return (
        <>
            {/* 이미지 화면 */}
            {/* <section id="hero" className="d-flex flex-column justify-content-center align-items-center"></section> */}
            <HomeBanner />

            {/* 게시판 목록 */}
            <div className="container text-center" style={{ marginTop: 40 }}>
                <img src={banner} style={{maxWidth: "100%", height: "auto"}}></img>
            </div>
        </>
    )
}

export default Home;