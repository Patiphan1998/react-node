import React from 'react'
import '../../../css/style.css'
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
export default function Review() {
    return (
        <div>
            {/* Review Start */}
            <div className="review">
                <div className="container-fluid">
                    <div className="slide-container">
                        <Fade>
                            <div className="each-fade text-center">
                                <div className="row align-items-center review-slider normal-slider">
                                    <div className="col-md-4 border">
                                        <div className="review-slider-item">
                                            <div className="review-img">
                                                <img src="/img/review-1.jpg" alt="Image" />
                                            </div>
                                            <div className="review-text">
                                                <h2>Customer Name</h2>
                                                <h3>Profession</h3>
                                                <div className="ratting">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 border">
                                        <div className="review-slider-item">
                                            <div className="review-img">
                                                <img src="/img/review-2.jpg" alt="Image" />
                                            </div>
                                            <div className="review-text">
                                                <h2>Customer Name</h2>
                                                <h3>Profession</h3>
                                                <div className="ratting">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 border">
                                        <div className="review-slider-item">
                                            <div className="review-img">
                                                <img src="/img/review-3.jpg" alt="Image" />
                                            </div>
                                            <div className="review-text">
                                                <h2>Customer Name</h2>
                                                <h3>Profession</h3>
                                                <div className="ratting">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="each-fade text-center">
                                <div className="row align-items-center review-slider normal-slider">
                                    <div className="col-md-4 border">
                                        <div className="review-slider-item">
                                            <div className="review-img">
                                                <img src="/img/review-2.jpg" alt="Image" />
                                            </div>
                                            <div className="review-text">
                                                <h2>Customer Name</h2>
                                                <h3>Profession</h3>
                                                <div className="ratting">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 border">
                                        <div className="review-slider-item">
                                            <div className="review-img">
                                                <img src="/img/review-3.jpg" alt="Image" />
                                            </div>
                                            <div className="review-text">
                                                <h2>Customer Name</h2>
                                                <h3>Profession</h3>
                                                <div className="ratting">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 border">
                                        <div className="review-slider-item">
                                            <div className="review-img">
                                                <img src="/img/review-1.jpg" alt="Image" />
                                            </div>
                                            <div className="review-text">
                                                <h2>Customer Name</h2>
                                                <h3>Profession</h3>
                                                <div className="ratting">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
            {/* Review End */}
        </div>
    )
}
