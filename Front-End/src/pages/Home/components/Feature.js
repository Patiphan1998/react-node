import React from 'react'
import '../../../css/style.css'

export default function Feature() {
    return (
        <div>
            {/* Feature Start*/}
            <div className="feature">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 feature-col">
                                <div className="feature-content mb-0 img-thumbnail rounded mx-auto d-block img-fluid z-depth-1">
                                    <i className="fab fa-cc-mastercard" />
                                    <h2>การชำระเงินที่ปลอดภัย</h2>
                                    <p>มีความปลอดภัยในการชำระเงินตามมาตราฐานสากล</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 feature-col">
                                <div className="feature-content mb-0 img-thumbnail rounded mx-auto d-block img-fluid z-depth-1">
                                    <i className="fa fa-truck" />
                                    <h2>การจัดส่งทั่วโลก</h2>
                                    <p>จัดส่งได้ทั่วโลก ทั้งแบบส่งด่วนและแบบปกติ</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 feature-col">
                                <div className="feature-content mb-0 img-thumbnail rounded mx-auto d-block img-fluid z-depth-1">
                                    <i className="fa fa-sync-alt" />
                                    <h2>การส่งคืนสินค้า</h2>
                                    <p>สามารถส่งคืนสินค้าได้ ตามเงื่อนไขที่เรากำหนด</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 feature-col">
                                <div className="feature-content mb-0 img-thumbnail rounded mx-auto d-block img-fluid z-depth-1">
                                    <i className="fa fa-comments" />
                                    <h2>บริการ 24 ชั่วโมง</h2>
                                    <p>ให้บริการตลอด 24 ชม. ไม่มีวันหยุด</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Feature End*/}
        </div>
    )
}
