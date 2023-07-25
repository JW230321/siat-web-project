function Footer() {
    return (
        <footer id="footer">
            {/* Footer 윗 부분 */}
            <div className="footer-top">
                <div className="container">
                    <div className="row" style={{justifyContent:"space-around"}}>
                        <div className="col-lg-3 col-md-6" style={{marginTop:86}}>
                            <p>A108 Adam Street <br />성남시, 판교디지털훈련센터<br /> United States <br /><br />
                                <strong>Phone:</strong> +1 5589 55488 55<br />
                                <strong>Email:</strong> info@example.com<br />
                            </p>
                        </div>
                        <div className="col-lg-2 col-md-6 footer-links">
                            <h4>이용안내</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">조직안내도</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">연혁</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">장애인관련법</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">찾아오는 길</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">워크투게더</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-6 footer-newsletter">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1239.6271344861927!2d127.09347579039559!3d37.41112304713773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca7111a5c5ff7%3A0x3099a7e71ab15c34!2z7ZWc6rWt7J6l7JWg7J246rOg7Jqp6rO164uoIO2MkOq1kOuUlOyngO2EuO2biOugqOyEvO2EsA!5e0!3m2!1sko!2skr!4v1690164253799!5m2!1sko!2skr"
                                width="440"
                                height="225"
                                style={{ border: 0 }}
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer 아랫 부분 */}
            <div className="container d-md-flex py-4" style={{ justifyContent: "space-between" }}>
                <div className="text-center text-md-start">
                    <div className="copyright" >
                        &copy; Copyright <strong><span>Lumia</span></strong>. All Rights Reserved
                    </div>
                    <div className="credits">
                        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                    </div>
                </div>
                <div>
                    <h3>Logo</h3>
                </div>
                <div className="social-links text-center text-md-right pt-3 pt-md-0">
                    <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                    <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                    <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                    <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                    <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;