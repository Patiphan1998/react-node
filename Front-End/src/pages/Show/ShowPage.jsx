import React, { Component } from "react";
import "../../css/style.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "../Home/components/Footer";
import { Button } from "reactstrap";
import {
  MDBIcon,
  MDBAnimation,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
} from "mdbreact";
import { browserHistory } from "react-router";
import { connect } from "react-redux";
import { getCar } from "../../redux/actions/carActions";
import moment from "moment";
import { Carousel } from "react-responsive-carousel";
import { Card, Row, Col, Badge } from "react-bootstrap";

class ShowPage extends Component {
  state = {
    modal2: false,
  };

  toggle = (nr) => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber],
    });
  };

  //โหลดข้อมูลงานซ่อม และเพื่อความชัวร์เราจึงเช็คก่อนว่ามี id ส่งเข้ามาหรือไม่
  componentDidMount() {
    const carId = this.props.params.id ? this.props.params.id : 0;
    this.props.dispatch(getCar(carId)).then(() => {});
  }

  render() {
    const { car } = this.props;
    const { data } = car;

    if (car.isRejected) {
      return <div className="alert alert-danger">Error: {data}</div>;
    }
    if (car.isRejected) {
      return <div className="alert alert-danger">Error: {car.data}</div>;
    }
    if (car.isLoading || car.isLoading) {
      return <div>Loading...</div>;
    }
    if (this.props.authentication) {
      return (
        <div>
          <div>
            <div className="top-bar">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-6">
                    <i className="fa fa-envelope" />
                    pathipan7149@gmail.com
                  </div>
                  <div className="col-sm-6">
                    <i className="fa fa-phone-alt" />
                    0985686158
                  </div>
                </div>
              </div>
            </div>

            <MDBBreadcrumb>
              <MDBBreadcrumbItem>หน้าหลัก</MDBBreadcrumbItem>
              <MDBBreadcrumbItem>รถทั้งหมด</MDBBreadcrumbItem>
              <MDBBreadcrumbItem active onClick={browserHistory.goBack}>
                โชว์รถ
              </MDBBreadcrumbItem>
            </MDBBreadcrumb>

            <div className="product-view">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-12">
                    <div className="product-title border border-warning">
                      <div className="d-flex justify-content-between">
                        <div className="text-left">
                          <MDBAnimation type="bounce">
                            <h5>
                              {data.year} {data.brand} {data.generation}{" "}
                              {data.car_makeover}
                            </h5>
                          </MDBAnimation>
                          <p>
                            อัพเดทวันที่:{" "}
                            {moment(data.doc_date).format("YYYY-MM-DD")}{" "}
                            {data.doc_time}
                          </p>
                        </div>
                        <div className="text-right">
                          <h2>ราคา {data.price} บาท</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="product-item">
                      <Carousel infiniteLoop useKeyboardArrows emulateTouch>
                        <div>
                          <img alt="" src={data.image1} />
                        </div>
                        <div>
                          <img alt="" src={data.image2} />
                        </div>
                        <div>
                          <img alt="" src={data.image3} />
                        </div>
                        <div>
                          <img alt="" src={data.image4} />
                        </div>
                        <div>
                          <img alt="" src={data.image5} />
                        </div>
                      </Carousel>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="product-body">
                      <div className="border-bottom border-dark">
                        <h5>ข้อมูลผู้ขาย</h5>
                        <div className="d-flex justify-content-start">
                          <div className="text_left">
                            <MDBIcon icon="user-tie" /> <span>คุณ {data.seller_name}</span>
                          </div>
                        </div>
                        <div className="d-flex justify-content-start">
                          <div className="text_left">
                            <span>
                              <MDBIcon icon="map-marker-alt" /> {data.address}
                            </span>
                          </div>
                        </div>
                        <div className="d-flex justify-content-center">
                          <Button
                            color="#eeff41 lime accent-2"
                            className="border-warning"
                            onClick={this.toggle(2)}
                          >
                            ติดต่อผู้ขาย
                          </Button>
                          {/* <Button
                          color="#64dd17 light-green accent-4"
                          className="border-warning"
                          onClick={this.toggle(3)}
                        >
                          LINE
                        </Button> */}

                          <MDBModal
                            isOpen={this.state.modal2}
                            toggle={this.toggle(2)}
                            side
                            position="top-right"
                          >
                            <MDBModalHeader
                              toggle={this.toggle(2)}
                              style={{
                                backgroundColor: "orange",
                                color: "white",
                              }}
                            >
                              สามารถติดต่อได้ที่...
                            </MDBModalHeader>
                            <MDBModalBody>
                              <Card.Body>
                                <Card.Title className="text-left pink-text">
                                  <h3 className="text-center">
                                    **คุณ {data.seller_name}**
                                  </h3>
                                </Card.Title>
                                <hr color="red" style={{ width: "80%" }} />
                                <Card.Text className="text-left ">
                                  <h5>
                                    <MDBIcon icon="phone red-text" />{" "}
                                    {data.seller_phone}
                                    <br></br>
                                  </h5>
                                  <h5>
                                    <MDBIcon fab icon="facebook red-text" />{" "}
                                    {data.seller_facebook}
                                    <br></br>
                                  </h5>
                                  <h5>
                                    <MDBIcon fab icon="line red-text" />{" "}
                                    {data.seller_line}
                                    <br></br>
                                  </h5>
                                </Card.Text>
                              </Card.Body>
                            </MDBModalBody>
                          </MDBModal>

                          <MDBModal
                            isOpen={this.state.modal3}
                            toggle={this.toggle(3)}
                          >
                            <MDBModalHeader toggle={this.toggle(3)}>
                              ติดต่อทางไลน์ LINE
                            </MDBModalHeader>
                            <MDBModalBody>
                              <p>ID LINE เจ้าของรถ : t0985686158</p>
                              <p></p>
                            </MDBModalBody>
                          </MDBModal>
                        </div>
                      </div>

                      <h5>สเปครถ</h5>
                      <div className="border-bottom d-flex justify-content-between">
                        <div className="text-left">
                          <span>ประเภทรถ</span>
                        </div>
                        <div className="text-right">
                          <p>{data.car_type}</p>
                        </div>
                      </div>
                      <div className="border-bottom d-flex justify-content-between">
                        <div className="text-left">
                          <span>ยี่ห้อ</span>
                        </div>
                        <div className="text-right">
                          <p>{data.brand}</p>
                        </div>
                      </div>
                      <div className="border-bottom d-flex justify-content-between">
                        <div className="text-left">
                          <span>รุ่น</span>
                        </div>
                        <div className="text-right">
                          <p>{data.generation}</p>
                        </div>
                      </div>
                      <div className="border-bottom d-flex justify-content-between">
                        <div className="text-left">
                          <span>ปี</span>
                        </div>
                        <div className="text-right">
                          <p>{data.year}</p>
                        </div>
                      </div>
                      <div className="border-bottom d-flex justify-content-between">
                        <div className="text-left">
                          <span>ขนาดเครื่องยนต์</span>
                        </div>
                        <div className="text-right">
                          <p>{data.engine_size}</p>
                        </div>
                      </div>
                      <div className="border-bottom d-flex justify-content-between">
                        <div className="text-left">
                          <span>จำนวนที่นั่ง</span>
                        </div>
                        <div className="text-right">
                          <p>{data.number_of_seats}</p>
                        </div>
                      </div>
                      <div className="border-bottom d-flex justify-content-between">
                        <div className="text-left">
                          <span>เลขไมล์ (กม.)</span>
                        </div>
                        <div className="text-right">
                          <p>{data.Mileage}</p>
                        </div>
                      </div>
                      <div className="border-bottom d-flex justify-content-between">
                        <div className="text-left">
                          <span>สี</span>
                        </div>
                        <div className="text-right">
                          <p>{data.color}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*<div className="featured-product product">
                  <div className="container-fluid">
                    <div className="section-header">
                      <div className="row">
                        <div className="animated zoomIn infinite">
                          <h1>
                            <MDBIcon icon="grin-hearts" /> รถที่คล้ายกัน
                          </h1>
                        </div>
                        <div className="all">
                          <Link to="/car" className="btn btnf allcars">
                            <span>
                              ดูรถทั้งหมด <MDBIcon icon="angle-double-right" />
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <CarSimilar />
                </div> */}
                </div>
              </div>
            </div>

            <hr color="black" />
            <Footer />
          </div>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    authentication: state.authReducers.authenticated,
    data: state.authReducers.data,

    car: state.carReducers.car,
  };
}

export default connect(mapStateToProps)(ShowPage);
