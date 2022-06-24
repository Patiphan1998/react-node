import React, { Component,useRef } from "react";
import { Button, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { Field, reduxForm } from "redux-form";
import {
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
} from "mdbreact";
import renderField from "../../Utils/renderFields";
import { Link } from "react-router";
import Test from "../../pages/Home/components/test";

class RegisterForm extends Component {
  componentDidMount() {
    //เรียกใช้ฟังก์ชันในการกำหนด value ให้กับ textbox และ control ต่างๆ
    this.handleInitialize();
  }

  //กำหนดค่า value ให้กับ textbox หรือ control ต่างๆ ในฟอร์ม
  //ถ้าเป็น HTML ธรรมดาก็จะกำหนดเป็น value="xxx" แต่สำหรับ redux-form
  //ต้องใช้ initialize ถ้าเป็น redux-form v.6 ต้องประกาศใช้ initialize แต่ v.7 เรียกใช้ได้เลย
  handleInitialize() {
    let initData = {
      user_type: "0",
      name: "",
      username: "",
      password: "",
      image: File.name,
    };

    //ตรวจสอบก่อนว่ามี data.id หรือไม่
    //ถ้าไม่มีแสดงว่าเป็นการสร้างรายการใหม่
    //ถ้ามีแสดงว่ามีการ get ข้อมูลผู้ใช้งานจึงเป็นการปรับปรุง
    if (this.props.data.id) {
      initData = this.props.data;
      //user_type ที่รับมาเป็น init แต่value ต้องแปลงเป็น string ก่อน
      initData.user_type = this.props.data.user_type.toString();
    }
    this.props.initialize(initData);
  }

  render() {
    //redux-form จะมี props ที่ชื่อ handleSubmit เพื่อใช้ submit ค่า
    const { handleSubmit, userSave } = this.props;
    

    return (
      <div>
        <MDBCard>
          <ModalHeader toggle={this.toggle} className="peach-gradient">
            <h3 className="white-text mb-3 pt-3 font-weight-bold">
              สมัครสมาชิก
            </h3>
          </ModalHeader>
          <MDBCardBody className="mx-4 mt-4">
            {/* ตรวจสอบว่ามี err หรือไม่ */}
            {userSave.isRejected && (
              <div className="alert alert-danger">{userSave.data}</div>
            )}
            {/* <Test /> */}
            <Field
              label="Name"
              type="text"
              component={renderField}
              name="name"
              title="ชื่อ - สกุล"
            />
            <input
              title="รูปโปรไฟล์"
              className="form-control"
              type="file"
              name="image"
              component={renderField}
            />
            <Field
              label="Username"
              type="text"
              component={renderField}
              name="username"
              title="ชื่อผู้ใช้"
            />
            <Field
              label="Password"
              type="password"
              component={renderField}
              name="password"
              title="รหัสผ่าน"
            />
            <div className="text-center pt-3 mb-3">
              <Button
                type="button"
                outline
                color="warning"
                rounded
                className="btn-block z-depth-1a rounded-pill"
                onClick={handleSubmit(this.onSubmit)}
              >
                สมัครสมาชิก
              </Button>
            </div>
            <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">
              or Sign in with:
            </p>
            <div className="row my-3 d-flex justify-content-center">
              <div className="col-md-4">
                <Button
                  type="button"
                  color="white"
                  rounded
                  className="mr-md-3 btn-block z-depth-1a rounded-pill"
                >
                  <MDBIcon fab icon="facebook-f" className="blue-text" />
                </Button>
              </div>
              <div className="col-md-4">
                <Button
                  type="button"
                  color="white"
                  rounded
                  className="mr-md-3 btn-block z-depth-1a rounded-pill"
                >
                  <MDBIcon fab icon="twitter" className="blue-text" />
                </Button>
              </div>
              <div className="col-md-4">
                <Button
                  type="button"
                  color="white"
                  rounded
                  className="mr-md-3 btn-block z-depth-1a rounded-pill"
                >
                  <MDBIcon fab icon="google-plus-g" className="blue-text" />
                </Button>
              </div>
            </div>
          </MDBCardBody>
          <MDBModalFooter className="mx-5 pt-3 mb-1">
            <p className="font-small grey-text d-flex justify-content-end">
              Have an account?
              <Link to="signin" className="blue-text ml-1">
                Sign In
              </Link>
            </p>
          </MDBModalFooter>
        </MDBCard>
      </div>
    );
  }

  //ฟังก์ชันนี้เรียกใช้ props ชื่อ onToggle จาก src/pages/User.js เพื่อปิด Modal
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
  if (!values.name) {
    errors.name = "จำเป็นต้องกรอก ชื่อ-สกุล !";
  }

  if (!values.username) {
    errors.username = "จำเป็นต้องกรอก Username !";
  } else if (values.username.length < 4) {
    errors.username = "Username ต้องมากกว่า 4 ตัวอักษร !";
  }

  if (!values.password) {
    errors.password = "จำเป็นต้องกรอก Password !";
  } else if (values.password.length <= 8) {
    errors.password = "Password ต้อง 8 ตัวอักษรขึ้นไป !";
  }

  return errors;
}

//เรียกใช้ redux-form โดยให้มีการเรียกใช้การ validate ด้วย
const form = reduxForm({
  form: "RegisterForm",
  validate,
});

//สังเกตุว่าไม่มีการใช้ connect เลยเพราะเราไม่ได้เป็นตัวจัดการ data โดยตรง
//แต่ส่งสิ่งต่างผ่าน props ที่ได้จาก src/pages/User.js
export default form(RegisterForm);
