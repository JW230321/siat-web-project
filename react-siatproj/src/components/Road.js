function Road({zoomLevel}) {
    return (
        <div className="container" style={{ height: "auto", marginTop: "80px" }}>
            <div className="image-container" style={{ marginBottom: 50 }}>
                <div className="rounded1">찾아오는 길</div>
                <div style={{ marginTop: 50, display: "flex", flexDirection: zoomLevel > 200 ? "column" : "row" }}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1239.6271344861927!2d127.09347579039559!3d37.41112304713773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca7111a5c5ff7%3A0x3099a7e71ab15c34!2z7ZWc6rWt7J6l7JWg7J246rOg7Jqp6rO164uoIO2MkOq1kOuUlOyngO2EuO2biOugqOyEvO2EsA!5e0!3m2!1sko!2skr!4v1690164253799!5m2!1sko!2skr"
                        width="100%"
                        height="411.59"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                    <div style={{border: '1px solid #d9d9d9', width: '100%'}}>
                        <div style={{padding: 65}}>
                            <h3 style={{fontWeight: "bold", marginBottom: 20}}>판교디지털훈련센터</h3>
                            <p style={{fontSize: 14}}>경기도 성남시 수정구 시흥동 창업로 54 가동 2층 판교제2테크노밸리 기업성장센터</p>
                            <div style={{backgroundColor: "#F06B26", width: 400, height: 3, marginLeft: 10}}></div>
                            <div style={{display: "flex", marginTop: 30}}>
                                <div style={{backgroundColor: "#92D050", marginTop: 25, width: 60, height: 35, marginRight: 10, borderRadius: 5, color: "white", display: "flex", justifyContent: "center", alignItems: "center"}}>버스</div>
                                <p style={{fontSize: 14, marginTop: 20}}>기업성장센터 하차<br />| 55, 231, 310, 315, 382, 누리2, 판타G버스, 3100, 73-2</p>
                            </div>
                            <div style={{display: "flex"}}>
                                <div style={{backgroundColor: "#002060", marginTop: 25, width: 60, height: 35, marginRight: 10, borderRadius: 5, color: "white", display: "flex", justifyContent: "center", alignItems: "center"}}>자차</div>
                                <p style={{fontSize: 14, marginTop: 20}}>판교 TG - 대왕판교로 - 창업로<br />대왕판교 TG - 창업로 57번길 - 창업로</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Road;