import React, { Fragment, useState } from "react";
import { Table, Row, Col, Form } from "react-bootstrap";
import { MDBMask, MDBIcon, MDBInput } from "mdbreact";
import "../../css/style.css";
import { Button, Container, Input } from "reactstrap";
import axios from "axios";
import ProgressBar from "react-bootstrap/ProgressBar";
import { connect } from "react-redux";
import { browserHistory } from "react-router";

const moment = require("moment");



function PostPage() {
  const [brandType, setBrandType] = useState("");
  const [generationType, setGenerationType] = useState("");
  const [car_makeoverType, setCar_makeoverType] = useState("");
  const [model_detailsType, setModel_detailsType] = useState("");
  const [yearType, setYearType] = useState("");
  const [engine_sizeType, setEngine_sizeType] = useState("");
  const [car_typeType, setCar_typeType] = useState("");
  const [gear_systemType, setGear_systemType] = useState("");
  const [number_of_seatsType, setNumber_of_seatsType] = useState("");
  const [MileageType, setMileageType] = useState("");
  const [colorType, setColorType] = useState("");
  const [addressType, setAddressType] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");
  const [image5, setImage5] = useState("");
  const [priceType, setPriceType] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [registration_yearType, setRegistration_yearType] = useState("");
  const [image6, setImage6] = useState("");
  const [image7, setImage7] = useState("");

  const [seller_nameType, setSeller_nameType] = useState("");
  const [seller_facebookType, setSeller_facebookType] = useState("");
  const [seller_lineType, setSeller_lineType] = useState("");
  const [seller_phoneType, setSeller_phoneType] = useState("");

  const [user_id, setUser_id] = useState("");

  const [uploadPercentage, setPercent] = useState(0);

  const uploadFile = ({ target: { files } }) => {
    // console.log(files[0])
    let data = new FormData();
    data.append("profile", files[0]);

    const options = {
      onUploadProgress: (progressEvent) => {
        console.log(progressEvent);
        const { loaded, total } = progressEvent;
        let percent = Math.floor((loaded * 100) / total);
        console.log(percent);

        if (percent < 100) {
          setPercent(percent);
        }
      },
    };

    axios.post("http://localhost:3009/upload", data, options).then((res) => {
      console.log(res.data.profile_url);
      setImage1(res.data.profile_url);
      setImage2(res.data.profile_url);
      setImage3(res.data.profile_url);
      setImage4(res.data.profile_url);
      setImage5(res.data.profile_url);
      setImage6(res.data.profile_url);
      setImage7(res.data.profile_url);
      setPercent(100);
      // setAvatar(res.data.url)
      setTimeout(() => {
        setPercent(0);
      }, 2000);
    });
  };

  async function sale_post() {
    const request = await axios.post("http://localhost:3009/sale_post", {
      brand: brandType,
      generation: generationType,
      car_makeover: car_makeoverType,
      model_details: model_detailsType,
      engine_size: engine_sizeType,
      car_type: car_typeType,
      gear_system: gear_systemType,
      number_of_seats: number_of_seatsType,
      Mileage: MileageType,
      color: colorType,
      address: addressType,
      image1: image1,
      image2: image2,
      image3: image3,
      image4: image4,
      image5: image5,
      price: priceType,
      id_type: "0",
      fuel: fuelType,
      registration_year: registration_yearType,
      status: "1",
      img_registration_book: image6,
      img_id_card: image7,
      seller_name: seller_nameType,
      seller_facebook: seller_facebookType,
      seller_line: seller_lineType,
      seller_phone: seller_phoneType,
      user_id: user_id,
      doc_date: moment().format("YYYY-MM-DD"),
      doc_time: moment().format("HH:mm"),
    });

    alert(request.data, browserHistory.push(`/`));
    // alert(request.data);
  }
  // if (this.props.authentication) {
  return (
    <div
      style={{
        backgroundColor: "#fff3e0",
      }}
    >
      <div
        className=" text-center shadow-box-example hoverable"
        style={{
          backgroundColor: "#d50000",
          width: "auto",
          height: 150,
        }}
      >
        <h1 className=" white-text">
          <MDBIcon far icon="laugh-squint" /> ขั้นตอนการโพสต์ขาย{" "}
          <MDBIcon far icon="laugh-squint" />
        </h1>
      </div>
      {/* ************************************************************************ */}
      <h3 className=" orange-text ">
        <MDBIcon icon="sort-amount-down-alt" /> ขั้นตอนที่ 1/3 รายละเอียดรถ
      </h3>
      <p style={{ fontSize: "3", color: "red" }}>
        *** ดูข้อมูลของรถท่านได้ที่เล่มทะเบียนรถ ***
      </p>
      <hr />
      <div className="container">
        <Form.Group as={Row}>
          <Col sm={3}>
            {/* ************************************************************************ */}
            <div className="form-group">
              <label htmlFor="exampleDisabled" className="disabled">
                ยี่ห้อรถยนต์ <span style={{ color: "red" }}>*</span>
              </label>
              <select
                className="form-control"
                value={brandType}
                onChange={(e) => setBrandType(e.target.value)}
              >
                <option>--- เลือก ยี่ห้อรถยนต์ ---</option>
                <option style={{ color: "#8000FF" }} value="TOYOTA">
                  TOYOTA
                </option>
                <option style={{ color: "#8000FF" }} value="MASDA">
                  MAZDA
                </option>
                <option style={{ color: "#8000FF" }} value="HONDA">
                  HONDA
                </option>
              </select>
            </div>
            {/* ************************************************************************ */}
          </Col>
          <Col sm={3}>
            <div className="form-group">
              <label htmlFor="exampleDisabled" className="disabled">
                รุ่นรถยนต์ <span style={{ color: "red" }}>*</span>
              </label>
              <select
                className="form-control"
                value={generationType}
                onChange={(e) => setGenerationType(e.target.value)}
              >
                <option style={{ color: "#8000FF" }}>
                  --- เลือก รุ่นรถยนต์ ---
                </option>
                <option style={{ color: "#8000FF" }} value="VIOS">
                  VIOS
                </option>
                <option style={{ color: "#8000FF" }} value="CAMRY">
                  CAMRY
                </option>
                <option style={{ color: "#8000FF" }} value="ESQUIRE">
                  ESQUIRE
                </option>
                <option style={{ color: "#8000FF" }} value="HILUX REVO">
                  HILUX REVO
                </option>
                <option style={{ color: "#8000FF" }} value="CX-5">
                  CX-5
                </option>
                <option style={{ color: "#8000FF" }} value="BT-50 PRO">
                  BT-50 PRO
                </option>
                <option style={{ color: "#8000FF" }} value="CITY">
                  CITY
                </option>
                <option style={{ color: "#8000FF" }} value="CIVIC">
                  CIVIC
                </option>
                <option style={{ color: "#8000FF" }} value="JAZZ">
                  JAZZ
                </option>
              </select>
              {/* </div> */}
            </div>
            {/* ************************************************************************ */}
          </Col>
          <Col sm={3}>
            <div className="form-group">
              <label htmlFor="exampleDisabled" className="disabled">
                โฉมรถยนต์
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="โฉมรถยนต์"
                value={model_detailsType}
                onChange={(e) => {
                  setModel_detailsType(e.target.value);
                }}
                outline
                style={{ color: "#8000FF" }}
              />
            </div>
            {/* ************************************************************************ */}
          </Col>
          <Col sm={3}>
            <div className="form-group">
              <label htmlFor="exampleDisabled" className="disabled">
                รายละเอียดรุ่น
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="รายละเอียดรุ่น"
                value={car_makeoverType}
                onChange={(e) => {
                  setCar_makeoverType(e.target.value);
                }}
                outline
                style={{ color: "#8000FF" }}
              />
            </div>
            {/* ************************************************************************ */}
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Col sm={3}>
            <div className="form-group">
              <label htmlFor="exampleDisabled" className="disabled">
                ปีรถ
              </label>
              <select
                className="form-control"
                value={yearType}
                onChange={(e) => setYearType(e.target.value)}
              >
                <option>--- เลือก ปีรถยนต์ ---</option>
                <option style={{ color: "#8000FF" }} value="2021">
                  2021
                </option>
                <option style={{ color: "#8000FF" }} value="2020">
                  2020
                </option>
                <option style={{ color: "#8000FF" }} value="2019">
                  2019
                </option>
                <option style={{ color: "#8000FF" }} value="2018">
                  2018
                </option>
                <option style={{ color: "#8000FF" }} value="2017">
                  2017
                </option>
                <option style={{ color: "#8000FF" }} value="2016">
                  2016
                </option>
                <option style={{ color: "#8000FF" }} value="2015">
                  2015
                </option>
                <option style={{ color: "#8000FF" }} value="2014">
                  2014
                </option>
                <option style={{ color: "#8000FF" }} value="2013">
                  2013
                </option>
                <option style={{ color: "#8000FF" }} value="2012">
                  2012
                </option>
                <option style={{ color: "#8000FF" }} value="2011">
                  2011
                </option>
                <option style={{ color: "#8000FF" }} value="2010">
                  2010
                </option>
              </select>
            </div>
            {/* ************************************************************************ */}
          </Col>
          <Col sm={3}>
            <div className="form-group">
              <label htmlFor="exampleDisabled" className="disabled">
                ขนาดเครื่องยนต์ <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="ขนาดเครื่องยนต์"
                value={engine_sizeType}
                onChange={(e) => {
                  setEngine_sizeType(e.target.value);
                }}
                outline
                style={{ color: "#8000FF" }}
              />
            </div>
            {/* ************************************************************************ */}
          </Col>
          <Col sm={3}>
            <div className="form-group">
              <label htmlFor="exampleDisabled" className="disabled">
                ประเภทรถ <span style={{ color: "red" }}>*</span>
              </label>
              <select
                className="form-control"
                value={car_typeType}
                onChange={(e) => {
                  setCar_typeType(e.target.value);
                }}
              >
                <option>--- เลือก ประเภทรถยนต์ ---</option>
                <option style={{ color: "#8000FF" }} value="1">
                  รถมือ 1
                </option>
                <option style={{ color: "#8000FF" }} value="2">
                  รถมือ 2
                </option>
              </select>
            </div>
            {/* ************************************************************************ */}
          </Col>
          <Col sm={3}>
            <div className="form-group">
              <label htmlFor="exampleDisabled" className="disabled">
                ระบบเกียร์ <span style={{ color: "red" }}>*</span>
              </label>
              <select
                className="form-control"
                value={gear_systemType}
                onChange={(e) => {
                  setGear_systemType(e.target.value);
                }}
              >
                <option>--- เลือก ระบบเกียร์ ---</option>
                <option style={{ color: "#8000FF" }} value="เกียร์อัตโนมัติ">
                  เกียร์อัตโนมัติ
                </option>
                <option style={{ color: "#8000FF" }} value="เกียร์กระปุก">
                  เกียร์แมนนวล
                </option>
              </select>
            </div>
            {/* ************************************************************************ */}
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Col sm={3}>
            <div className="form-group">
              <label htmlFor="exampleDisabled" className="disabled">
                จำนวนที่นั่ง
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="จำนวนที่นั่ง"
                value={number_of_seatsType}
                onChange={(e) => {
                  setNumber_of_seatsType(e.target.value);
                }}
                outline
                style={{ color: "#8000FF" }}
              />
            </div>
            {/* ************************************************************************ */}
          </Col>
          <Col sm={3}>
            <div className="form-group">
              <label htmlFor="exampleDisabled" className="disabled">
                เลขไมล์ (กม.) <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="เลขไมล์ (กม.)"
                value={MileageType}
                onChange={(e) => {
                  setMileageType(e.target.value);
                }}
                outline
                style={{ color: "#8000FF" }}
              />
            </div>
            {/* ************************************************************************ */}
          </Col>
          <Col sm={3}>
            <div className="form-group">
              <label htmlFor="exampleDisabled" className="disabled">
                เชื้อเพลิง <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="เชื้อเพลิง"
                value={fuelType}
                onChange={(e) => {
                  setFuelType(e.target.value);
                }}
                outline
                style={{ color: "#8000FF" }}
              />
            </div>
            {/* ************************************************************************ */}
          </Col>
          <Col sm={3}>
            <div className="form-group">
              <label htmlFor="exampleDisabled" className="disabled">
                ปีจดทะเบียน
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="ปีจดทะเบียน"
                vvalue={registration_yearType}
                onChange={(e) => {
                  setRegistration_yearType(e.target.value);
                }}
                outline
                style={{ color: "#8000FF" }}
              />
            </div>
            {/* ************************************************************************ */}
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Col sm={6}>
            <div className="container">
              <div className="container form-group border border-danger">
                <label
                  className="col-sm-12 col-form-label text-center"
                  style={{ fontSize: 20, padding: 10 }}
                >
                  สีรถยนต์ของคุณ <span style={{ color: "red" }}>*</span>
                </label>
                <Container>
                  <Row md={12}>
                    <Col lg={4}>
                      <div className="form-check form-check-inline">
                        <label
                          className="form-check-label"
                          style={{
                            color: "black",
                            backgroundColor: "white",
                          }}
                        >
                          <input
                            className="form-check-input"
                            name="color"
                            component="input"
                            type="radio"
                            value="สีขาว"
                            onChange={(e) => {
                              setColorType(e.target.value);
                            }}
                          />{" "}
                          สีขาว
                        </label>
                      </div>
                    </Col>
                    <Col lg={4}>
                      <div className="form-check form-check-inline">
                        <label
                          className="form-check-label"
                          style={{
                            color: "white",
                            backgroundColor: "black",
                          }}
                        >
                          <input
                            className="form-check-input"
                            name="color"
                            component="input"
                            type="radio"
                            value="สีดำ"
                            onChange={(e) => {
                              setColorType(e.target.value);
                            }}
                          />{" "}
                          สีดำ
                        </label>
                      </div>
                    </Col>
                    <Col lg={4}>
                      <div className="form-check form-check-inline">
                        <label
                          className="form-check-label"
                          style={{
                            color: "white",
                            backgroundColor: "gold",
                          }}
                        >
                          <input
                            className="form-check-input"
                            name="color"
                            component="input"
                            type="radio"
                            value="สีทอง"
                            onChange={(e) => {
                              setColorType(e.target.value);
                            }}
                          />{" "}
                          สีทอง
                        </label>
                      </div>
                    </Col>
                    <Col lg={4}>
                      <div className="form-check form-check-inline">
                        <label
                          className="form-check-label"
                          style={{
                            color: "white",
                            backgroundColor: "green",
                          }}
                        >
                          <input
                            className="form-check-input"
                            name="color"
                            component="input"
                            type="radio"
                            value="สีเขียว"
                            onChange={(e) => {
                              setColorType(e.target.value);
                            }}
                          />{" "}
                          สีเขียว
                        </label>
                      </div>
                    </Col>
                    <Col lg={4}>
                      <div className="form-check form-check-inline">
                        <label
                          className="form-check-label"
                          style={{
                            color: "white",
                            backgroundColor: "yellow",
                          }}
                        >
                          <input
                            className="form-check-input"
                            name="color"
                            component="input"
                            type="radio"
                            value="สีเหลือง"
                            onChange={(e) => {
                              setColorType(e.target.value);
                            }}
                          />{" "}
                          สีเหลือง
                        </label>
                      </div>
                    </Col>
                    <Col lg={4}>
                      <div className="form-check form-check-inline">
                        <label
                          className="form-check-label"
                          style={{
                            color: "white",
                            backgroundColor: "silver",
                          }}
                        >
                          <input
                            className="form-check-input"
                            name="color"
                            component="input"
                            type="radio"
                            value="สีเงิน"
                            onChange={(e) => {
                              setColorType(e.target.value);
                            }}
                          />{" "}
                          สีเงิน
                        </label>
                      </div>
                    </Col>
                    <Col lg={4}>
                      <div className="form-check form-check-inline">
                        <label
                          className="form-check-label"
                          style={{
                            color: "white",
                            backgroundColor: "aqua",
                          }}
                        >
                          <input
                            className="form-check-input"
                            name="color"
                            component="input border border-black"
                            type="radio"
                            value="สีฟ้า"
                            onChange={(e) => {
                              setColorType(e.target.value);
                            }}
                          />{" "}
                          สีฟ้า
                        </label>
                      </div>
                    </Col>
                    <Col lg={4}>
                      <div className="form-check form-check-inline">
                        <label
                          className="form-check-label"
                          style={{
                            color: "white",
                            backgroundColor: "red",
                          }}
                        >
                          <input
                            className="form-check-input"
                            name="color"
                            component="input"
                            type="radio"
                            value="สีแดง"
                            onChange={(e) => {
                              setColorType(e.target.value);
                            }}
                          />{" "}
                          สีแดง
                        </label>
                      </div>
                    </Col>
                    <Col lg={4}>
                      <div className="form-check form-check-inline">
                        <label
                          className="form-check-label"
                          style={{
                            color: "white",
                            backgroundColor: "Maroon",
                          }}
                        >
                          <input
                            className="form-check-input"
                            name="color"
                            component="input"
                            type="radio"
                            value="สีน้ำตาล"
                            onChange={(e) => {
                              setColorType(e.target.value);
                            }}
                          />{" "}
                          สีน้ำตาล
                        </label>
                      </div>
                    </Col>
                    <Col lg={4}>
                      <div className="form-check form-check-inline">
                        <label
                          className="form-check-label"
                          style={{
                            color: "white",
                            backgroundColor: "orange",
                          }}
                        >
                          <input
                            className="form-check-input"
                            name="color"
                            component="input"
                            type="radio"
                            value="สีส้ม"
                            onChange={(e) => {
                              setColorType(e.target.value);
                            }}
                          />{" "}
                          สีส้ม
                        </label>
                      </div>
                    </Col>
                    <Col lg={4}>
                      <div className="form-check form-check-inline">
                        <label
                          className="form-check-label"
                          style={{
                            color: "white",
                            backgroundColor: "pink",
                          }}
                        >
                          <input
                            className="form-check-input"
                            name="color"
                            component="input"
                            type="radio"
                            value="สีชมพู"
                            onChange={(e) => {
                              setColorType(e.target.value);
                            }}
                          />{" "}
                          สีชมพู
                        </label>
                      </div>
                    </Col>
                    <Col lg={4}>
                      <div className="form-check form-check-inline">
                        <label
                          className="form-check-label"
                          style={{
                            color: "white",
                            backgroundColor: "purple",
                          }}
                        >
                          <input
                            className="form-check-input"
                            name="color"
                            component="input"
                            type="radio"
                            value="สีม่วง"
                            onChange={(e) => {
                              setColorType(e.target.value);
                            }}
                          />{" "}
                          สีม่วง
                        </label>
                      </div>
                    </Col>
                    <Col lg={4}>
                      <div className="form-check form-check-inline">
                        <label
                          className="form-check-label"
                          style={{
                            color: "white",
                            backgroundColor: "#FAD7A0",
                          }}
                        >
                          <input
                            className="form-check-input"
                            name="color"
                            component="input"
                            type="radio"
                            value="สีครีม"
                            onChange={(e) => {
                              setColorType(e.target.value);
                            }}
                          />{" "}
                          สีครีม
                        </label>
                      </div>
                    </Col>
                    <Col lg={4}>
                      <div className="form-check form-check-inline">
                        <label
                          className="form-check-label"
                          style={{
                            color: "white",
                            backgroundColor: "blue",
                          }}
                        >
                          <input
                            className="form-check-input"
                            name="color"
                            component="input"
                            type="radio"
                            value="สีน้ำเงิน"
                            onChange={(e) => {
                              setColorType(e.target.value);
                            }}
                          />{" "}
                          สีน้ำเงิน
                        </label>
                      </div>
                    </Col>
                    <Col lg={4}>
                      <div className="form-check form-check-inline">
                        <label
                          className="form-check-label"
                          style={{
                            color: "black",
                            backgroundColor: "",
                          }}
                        >
                          <input
                            className="form-check-input"
                            name="color"
                            component="input"
                            type="radio"
                            value="สีอื่นๆ"
                            onChange={(e) => {
                              setColorType(e.target.value);
                            }}
                          />{" "}
                          สีอื่นๆ
                        </label>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
            {/* ************************************************************************ */}
          </Col>
          <Col sm={6}>
            <div className="form-group">
              <label htmlFor="exampleDisabled" className="disabled">
                ราคา <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="ราคาที่ต้องการขาย (บาท)"
                value={priceType}
                onChange={(e) => {
                  setPriceType(e.target.value);
                }}
                outline
                style={{ color: "#8000FF" }}
              />
            </div>
            {/* ************************************************************************ */}
          </Col>
        </Form.Group>
        {/* ************************************************************************ */}
      </div>
      {/* ************************************************************************ */}
      <hr />
      <hr />
      <h3 className=" orange-text ">
        <MDBIcon icon="sort-amount-down-alt" /> ขั้นตอนที่ 2/3 เพิ่มรูปภาพ
      </h3>
      <hr />
      <div className="container">
        <Form.Group as={Row}>
          <Col sm={12}>
            <Form>
              <Form.File
                id="custom-file-translate-scss"
                label="อัพโหลดรูปรถ"
                lang="en"
                custom
                multiple
                name="profile"
                onChange={uploadFile}
              />
              {uploadPercentage > 0 && (
                <ProgressBar
                  striped
                  variant="success"
                  now={uploadPercentage}
                  label={`${uploadPercentage}%`}
                  style={{
                    background: "#F8DF00",
                    color: "black",
                    fontWeight: "800",
                  }}
                />
              )}

              <p>
                คุณสามารถอัปโหลดรูปรถได้สูงสุดถึง 21 รูป
                โดยรูปภาพจะต้องเป็นแนวนอน ไม่มีการตกแต่งภาพใดๆ
                และอัปโหลดอย่างน้อย 5 รูป นามสกุลไฟล์รูปภาพที่รองรับคือ JPG และ
                JPEG เท่านั้น โดยแต่ละไฟล์รูปภาพจะต้องมีขนาดระหว่าง 10 KB
                แต่ไม่เกิน 12 MB.
              </p>
            </Form>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Col sm={6}>
            <div>
              <img
                style={{ width: 550, height: 250 }}
                src="/img/sale/payu.jpg"
                className="img-fluid"
                alt=""
              />
              <MDBMask pattern={1} className="flex-center">
                <h4>
                  <p className="white-text">ตัวอย่างสำเนาบัตรประชาชน</p>
                </h4>
              </MDBMask>
            </div>
            <Form>
              <div className="mb-3">
                <Form.File id="formcheck-api-regular">
                  <Form.File.Label>
                    <h3>
                      อัพโหลดสำเนาบัตรประชาชน{" "}
                      <span style={{ color: "red" }}>*</span>
                    </h3>
                  </Form.File.Label>

                  <Input type="file" name="profile" onChange={uploadFile} />
                  {uploadPercentage > 0 && (
                    <ProgressBar
                      striped
                      variant="success"
                      now={uploadPercentage}
                      label={`${uploadPercentage}%`}
                      style={{
                        background: "#F8DF00",
                        color: "black",
                        fontWeight: "800",
                      }}
                    />
                  )}
                </Form.File>
              </div>
            </Form>
          </Col>
          <Col sm={6}>
            <div>
              <img
                style={{ width: 550, height: 250 }}
                src="/img/sale/bo.jpg"
                className="img-fluid"
                alt=""
              />
              <MDBMask pattern={1} className="flex-center">
                <h4>
                  <p className="white-text">ตัวอย่างเล่มทะเบียน</p>
                </h4>
              </MDBMask>
            </div>
            <Form>
              <div className="mb-3">
                <Form.File id="formcheck-api-regular">
                  <Form.File.Label>
                    <h3>
                      อัพโหลดเล่มทะเบียนรถ{" "}
                      <span style={{ color: "red" }}>*</span>
                    </h3>
                  </Form.File.Label>

                  <Input type="file" name="profile" onChange={uploadFile} />
                  {uploadPercentage > 0 && (
                    <ProgressBar
                      striped
                      variant="success"
                      now={uploadPercentage}
                      label={`${uploadPercentage}%`}
                      style={{
                        background: "#F8DF00",
                        color: "black",
                        fontWeight: "800",
                      }}
                    />
                  )}
                </Form.File>
              </div>
            </Form>
          </Col>
        </Form.Group>
        <p style={{ color: "red" }}>
          * สำคัญ !! ผู้ขายจะต้องอัปโหลดเอกสารยืนยันตัวตน ได้แก่ บัตรประชาชน
          และเล่มทะเบียนรถ เพื่อใช้สำหรับการตรวจสอบ
          ซึ่งเอกสารนี้จะไม่แสดงบนหน้าเว็ปไซต์ * ชื่อ - นามสกุล ในบัตรประชาชน
          และ ในเล่มทะเบียนรถต้องเป็นชื่อเดียวกัน
        </p>
      </div>
      {/* ************************************************************************ */}
      <hr />
      <hr />
      <h3 className=" orange-text ">
        <MDBIcon icon="sort-amount-down-alt" /> ขั้นตอนที่ 3/3
        ยอมรับข้อตกลงและกดยืนยัน
      </h3>
      <hr />
      <div>
        <p>
          คุณยืนยันที่จะทำตามข้อกำหนดและ{" "}
          <a className=" orange-text ">เงื่อนไข</a> ของ Speed car
        </p>

        <Fragment>
          <Button size="lg" onClick={sale_post}>
            ยืนยันการประกาศขาย
          </Button>
        </Fragment>
        <hr />
      </div>
      {/* ************************************************************************ */}
    </div>
  );
}
// }

//authentication เช็คว่าเป็น true หรือ false
//data ตัวนี้จะได้ข้อมูล PAYLOAD จาก token ครับ
//ทั้งหมดทั้งมวลเราจัดการมาตั้งแต่ action, reducer แล้วครับ
function mapStateToProps(state) {
  return {
    authentication: state.authReducers.authenticated,
    data: state.authReducers.data,
  };
}

export default connect(mapStateToProps)(PostPage);
