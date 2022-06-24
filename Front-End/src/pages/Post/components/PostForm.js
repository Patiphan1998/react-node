import React, { Fragment, Component } from "react";
import { Table, Row, Col, Container, Form, Jumbotron } from "react-bootstrap";
import {
  MDBMask,
  MDBContainer,
  MDBIcon,
  MDBInput,
  ModalHeader,
} from "mdbreact";
import "../../../css/style.css";
import { Field, reduxForm } from "redux-form";
import renderField from "../../../Utils/renderFields";
import { Button, ModalBody } from "reactstrap";
import renderBrand from "../../../Utils/renderBrands";
import renderGeneration from "../../../Utils/renderGeneration";
import renderGear from "../../../Utils/renderGear";
import renderEngine from "../../../Utils/renderEngine";
import renderColor from "../../../Utils/renderColor";
import renderCarType from "../../../Utils/renderCarType";
import renderUser_id from "../../../Utils/renderUser_id";
import renderSeller_name from "../../../Utils/renderSeller_name";
import renderSeller_phone from "../../../Utils/renderSeller_phone";
import renderSeller_facebook from "../../../Utils/renderSeller_facebook";
import renderSeller_line from "../../../Utils/renderSeller_line";

import axios from "axios";
import { Progress } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class PostFrom extends Component {
  onChangeHandler = (event) => {
    var files = event.target.files;
    if (
      this.maxSelectFile(event) &&
      this.checkMimeType(event) &&
      this.checkMimeType(event)
    ) {
      // if return true allow to setState
      this.setState({
        selectedFile: event.target.files[0],
        loaded: 0,
      });
    }
    console.log(event.target.files[0]);
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      loaded: 0,
    };
  }

  onClickHandler = ({ target: { files } }) => {
    const data = new FormData();
    data.append("file", this.state.selectedFile);
    // for (var x = 0; x < this.state.selectedFile.length; x++) {
    //   data.append("file", this.state.selectedFile[x]);
    // }

    axios
      .post("http://localhost:3009/upload", data, {
        // receive two    parameter endpoint url ,form data
        onUploadProgress: (ProgressEvent) => {
          this.setState({
            loaded: (ProgressEvent.loaded / ProgressEvent.total) * 100,
          });
        },
      })
      .then((res) => {
        toast.success("อัปโหลดสำเร็จ");
      })
      .catch((err) => {
        toast.error("อัปโหลดล้มเหลว");
      });
  };

  maxSelectFile = (event) => {
    let files = event.target.files; // create file object
    if (files.length > 10) {
      const msg = "อัปโหลดได้ครั้งละ 10 ภาพเท่านั้น";
      event.target.value = null; // discard selected file
      console.log(msg);
      return false;
    }
    return true;
  };

  checkMimeType = (event) => {
    let files = event.target.files;
    let err = []; // create empty array
    const types = ["image/png", "image/jpeg", "image/gif"];
    for (var x = 0; x < files.length; x++) {
      if (types.every((type) => files[x].type !== type)) {
        err[x] = files[x].type + "ไม่ใช่รูปแบบที่รองรับ\n";
        // assign message to array
      }
    }
    for (var z = 0; z < err.length; z++) {
      // loop create toast massage
      event.target.value = null;
      toast.error(err[z]);
    }
    return true;
  };

  checkFileSize = (event) => {
    let files = event.target.files;
    let size = 2000000;
    let err = [];
    for (var x = 0; x < files.length; x++) {
      if (files[x].size > size) {
        err[x] = files[x].type + "มีขนาดใหญ่เกินไปโปรดเลือกไฟล์ที่เล็กกว่า\n";
      }
    }
    for (var z = 0; z < err.length; z++) {
      toast.error(err[z]);
      event.target.value = null;
    }
    return true;
  };

  render() {
    //redux-form จะมี props ที่ชื่อ handleSubmit เพื่อใช้ submit ค่า
    const { handleSubmit, carSave } = this.props;

    return (
      <div
        style={{
          backgroundColor: "#fff3e0",
        }}
      >
        <ModalBody>
          {/* ตรวจสอบว่ามี err หรือไม่ */}
          {carSave.isRejected && (
            <div className="alert alert-danger">{carSave.data}</div>
          )}
          <div>
            <ModalHeader
              toggle={this.toggle}
              fluid
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
            </ModalHeader>
            <hr />
            <h3 className=" orange-text ">
              {" "}
              <MDBIcon icon="sort-amount-down-alt" /> ขั้นตอนที่ 1/4
              รายละเอียดรถ
            </h3>
            <Table>
              <tr>
                <td>
                  <Form>
                    <Field name="brand" component={renderBrand} />
                    {/* ************************************************************************ */}
                    <Field name="generation" component={renderGeneration} />
                    {/* ************************************************************************ */}
                    <Field
                      name="car_makeover"
                      component={renderField}
                      type="text"
                      label="กรุณาระบุโฉมรถยนต์"
                      title="โฉมรถยนต์"
                    />
                    {/* ************************************************************************ */}
                    <Field
                      name="model_details"
                      component={renderField}
                      type="text"
                      label="กรุณาระบุรายละเอียดรุ่น"
                      title="รายละเอียดรุ่น"
                    />
                    {/* ************************************************************************ */}
                    <Field
                      name="year"
                      component={renderField}
                      type="text"
                      label="ปี"
                      title="ปีรถ"
                    />
                    {/* ************************************************************************ */}
                    <Field name="gear_system" component={renderGear} />
                    {/* ************************************************************************ */}
                    <Field name="engine_size" component={renderEngine} />
                    {/* ************************************************************************ */}
                    <Field
                      name="number_of_seats"
                      component={renderField}
                      type="text"
                      label="กรุณาระบุจำนวนที่นั่ง"
                      title="จำนวนที่นั่ง"
                    />
                    {/* ************************************************************************ */}
                    <Field
                      name="car_type"
                      component={renderCarType}
                      type="text"
                      label="กรุณาระบุประเภทรถ"
                      title="ประเภทรถ"
                    />
                    {/* ************************************************************************ */}
                    <Field
                      name="Mileage"
                      component={renderField}
                      type="text"
                      label="กรุณาระบุเลขไมล์"
                      title="เลขไมล์ (กม.)"
                    />
                    {/* ************************************************************************ */}
                    <Field
                      name="fuel"
                      component={renderField}
                      type="text"
                      label="กรุณาระบุเชื้อเพลิง"
                      title="เชื้อเพลิง"
                    />
                    {/* ************************************************************************ */}
                    <Field
                      name="registration_year"
                      component={renderField}
                      type="text"
                      label="กรุณาระบุปีจดทะเบียน"
                      title="ปีจดทะเบียน"
                    />
                    {/* ************************************************************************ */}
                    <Field name="generation" component={renderColor} />
                    {/* ************************************************************************ */}
                    <Field
                      name="price"
                      component={renderField}
                      type="text"
                      label="ราคาที่ต้องการขาย (บาท)"
                      title="ราคา"
                    />
                  </Form>
                  {/* ************************************************************************ */}
                  <Field
                    name="address"
                    component={renderField}
                    type="text"
                    label="กรุณาระบุที่อยู่รถของคุณโดยละเอียด"
                    title="ที่อยู่"
                    textarea
                  />
                </td>
              </tr>
            </Table>
            <hr />

            {/* ************************************************************************ */}
            <hr />

            <h3 className=" orange-text ">
              <MDBIcon icon="sort-amount-down-alt" /> ขั้นตอนที่ 2/4 เพิ่มรูปภาพ
            </h3>
            <Table>
              <tr>
                <td>
                  <Form.Group as={Row}>
                    <Col sm={12}>
                      <Form onSubmit={this.handleUploadImage}>
                        <div class="form-group">
                          <ToastContainer />
                        </div>
                        <img src={this.state.selectedFile} />
                        <input
                          type="file"
                          class="form-control"
                          name="file"
                          onChange={this.onChangeHandler}
                        />
                        {/* <input
                          type="file"
                          class="form-control"
                          multiple
                          onChange={this.onChangeHandler}
                        /> */}
                        <div class="form-group">
                          <Progress
                            max="100"
                            color="success"
                            value={this.state.loaded}
                          >
                            {Math.round(this.state.loaded, 2)}%
                          </Progress>
                        </div>
                        <button
                          type="button"
                          class="btn btn-success btn-block"
                          onClick={this.onClickHandler}
                        >
                          อัพโหลดรูปภาพ
                        </button>
                        <p>
                          คุณสามารถอัปโหลดรูปรถได้สูงสุดถึง 10 รูป
                          โดยรูปภาพจะต้องเป็นแนวนอน ไม่มีการตกแต่งภาพใดๆ
                          และอัปโหลดอย่างน้อย 5 รูป
                          นามสกุลไฟล์รูปภาพที่รองรับคือ JPG และ JPEG เท่านั้น
                          โดยแต่ละไฟล์รูปภาพจะต้องมีขนาดระหว่าง 10 KB แต่ไม่เกิน
                          12 MB.
                        </p>
                      </Form>
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row}>
                    <Col sm={6}>
                      <div>
                        <img
                          style={{ width: 400, height: 200 }}
                          src="/img/sale/payu.jpg"
                          className="img-fluid"
                          alt=""
                        />
                        <MDBMask pattern={1} className="flex-center">
                          <h4>
                            <p className="white-text">
                              ตัวอย่างสำเนาบัตรประชาชน
                            </p>
                          </h4>
                        </MDBMask>
                      </div>
                      <Form>
                        <div className="mb-3">
                          <Form.File id="formcheck-api-regular">
                            <Form.File.Label>
                              <h3>อัพโหลดสำเนาบัตรประชาชน</h3>
                            </Form.File.Label>

                            <Form.File.Input />
                          </Form.File>
                        </div>
                      </Form>
                    </Col>
                    <Col sm={6}>
                      <div>
                        <img
                          style={{ width: 400, height: 200 }}
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
                              <h3>อัพโหลดสำเนาเล่มทะเบียนรถ</h3>
                            </Form.File.Label>

                            <Form.File.Input />
                          </Form.File>
                        </div>
                      </Form>
                    </Col>
                  </Form.Group>
                  <p>
                    * สำคัญ !! ผู้ขายจะต้องอัปโหลดเอกสารยืนยันตัวตน ได้แก่
                    บัตรประชาชน และเล่มทะเบียนรถ เพื่อใช้สำหรับการตรวจสอบ
                    ซึ่งเอกสารนี้จะไม่แสดงบนหน้าเว็ปไซต์ * ชื่อ - นามสกุล
                    ในบัตรประชาชน และ ในเล่มทะเบียนรถต้องเป็นชื่อเดียวกัน
                  </p>
                </td>
              </tr>
            </Table>

            <hr />
            {/* ************************************************************************ */}
            <hr />

            <h3 className=" orange-text ">
              <MDBIcon icon="sort-amount-down-alt" /> ขั้นตอนที่ 3/4
              ข้อมูลผู้ขาย
            </h3>

            <div>
              <Row>
                <Col md={12}>
                  <Field name="user_id" component={renderUser_id} />
                </Col>
                <Col md={6}>
                  <Field name="seller_name" component={renderSeller_name} />
                </Col>
                <Col md={6}>
                  <Field name="seller_phone" component={renderSeller_phone} />
                </Col>
                <Col sm={6}>
                  <Field
                    name="seller_facebook"
                    component={renderSeller_facebook}
                  />
                </Col>
                <Col sm={6}>
                  <Field name="seller_line" component={renderSeller_line} />
                </Col>
              </Row>
            </div>
            <hr />

            {/* ************************************************************************ */}
            <hr />
            <h3 className=" orange-text ">
              <MDBIcon icon="sort-amount-down-alt" /> ขั้นตอนที่ 4/4
              ยอมรับข้อตกลงและกดยืนยัน
            </h3>
            <Table>
              <tr>
                <td>
                  <h5>
                    <p>
                      คุณยืนยันที่จะทำตามข้อกำหนดและ{" "}
                      <a className=" orange-text ">เงื่อนไข</a> ของ Speed car
                    </p>
                  </h5>

                  <Fragment>
                    <Button size="lg" onClick={handleSubmit(this.onSubmit)}>
                      ยืนยันการประกาศขาย
                    </Button>
                  </Fragment>
                </td>
              </tr>
            </Table>
            <hr />
            {/* ************************************************************************ */}
          </div>
        </ModalBody>
      </div>
    );
  }

  //ฟังก์ชันนี้เรียกใช้ props ชื่อ onToggle จาก src/pages/Location.js เพื่อปิด Modal
  toggle = () => {
    this.props.onToggle();
  };

  //ฟังก์ชันส่งการค่าการ submit โดยส่งให้ฟังก์ชันชื่อ onSubmit ที่ได้จาก props
  onSubmit = (values) => {
    this.props.onSubmit(values);
  };
}

//validate ข้อมูลก่อน submit
function validate(values) {
  const errors = {};

  if (!values.brand) {
    errors.brand = "จำเป็นต้องกรอกชื่อสถานที่ !";
  }

  if (!values.generation) {
    errors.generation = "จำเป็นต้องกรอกรหัส !";
  }

  if (!values.car_makeover) {
    errors.car_makeover = "จำเป็นต้องกรอก !";
  }

  if (!values.model_details) {
    errors.model_details = "จำเป็นต้องกรอก !";
  }

  if (!values.year) {
    errors.year = "จำเป็นต้องกรอก !";
  }

  if (!values.engine_size) {
    errors.engine_size = "จำเป็นต้องกรอก !";
  }

  if (!values.car_type) {
    errors.car_type = "จำเป็นต้องกรอก !";
  }

  if (!values.gear_system) {
    errors.gear_system = "จำเป็นต้องกรอก !";
  }

  if (!values.number_of_seats) {
    errors.number_of_seats = "จำเป็นต้องกรอก !";
  }

  if (!values.Mileage) {
    errors.Mileage = "จำเป็นต้องกรอก !";
  }

  if (!values.color) {
    errors.color = "จำเป็นต้องกรอก !";
  }

  if (!values.address) {
    errors.address = "จำเป็นต้องกรอก !";
  }

  if (!values.price) {
    errors.price = "จำเป็นต้องกรอก !";
  }

  if (!values.fuel) {
    errors.fuel = "จำเป็นต้องกรอก !";
  }

  if (!values.registration_year) {
    errors.registration_year = "จำเป็นต้องกรอก !";
  }
  return errors;
}

const form = reduxForm({
  form: "PostFrom",
  validate,
});

export default form(PostFrom);
