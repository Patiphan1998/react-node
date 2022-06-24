import React from 'react'
import '../../../css/style.css'

export default function Footer() {
    return (
        <div>
            {/* Footer Start */}
            <div className="footer mb-0 z-depth-1">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget">
                                <h2>ติดต่อสอบถาม</h2>
                                <div className="contact-info">
                                    <p>
                                        <i className="fa fa-map-marker" /> 191 รัตนบัณฑิต บางกะปิ กรุงเทพฯ</p>
                                    <p><i className="fa fa-envelope" /> pathipan7149@gmail.com</p>
                                    <p><i className="fa fa-phone" /> 0985686158</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget">
                                <h2>ติดตามเราได้ที่</h2>
                                <div className="contact-info">
                                    <div className="social">
                                        <a href="https://web.facebook.com/"><i className="fab fa-facebook-f" /></a>
                                        <a href="https://twitter.com/"><i className="fab fa-twitter" /></a>
                                        <a href="https://www.instagram.com/"><i className="fab fa-instagram" /></a>
                                        <a href="https://www.youtube.com/"><i className="fab fa-youtube" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget">
                                <h2>ข้อมูลบริษัท</h2>
                                <ul>
                                    <li><a href="contact.html">เกี่ยวกับเรา</a></li>
                                    <li><a href="#">นโยบายความเป็นส่วนตัว</a></li>
                                    <li><a href="#">เงื่อนไข และข้อกำหนด</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget">
                                <h2>ข้อมูลการซื้อ</h2>
                                <ul>
                                    <li><a href="#">นโยบาย Pyament</a></li>
                                    <li><a href="#">นโยบายการจัดส่ง</a></li>
                                    <li><a href="#">นโยบายการคืนสินค้า</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <div className="row payment align-items-center">
                        <div className="col-md-6">
                            <div className="payment-method">
                                <h2>We Accept:</h2>
                                <img src="img/payment-method.png" alt="Payment Method" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="payment-security">
                                <h2>Secured By:</h2>
                                <img src="img/godaddy.svg" alt="Payment Security" />
                                <img src="img/norton.svg" alt="Payment Security" />
                                <img src="img/ssl.svg" alt="Payment Security" />
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            {/* Footer End */}
        </div>
    )
}
