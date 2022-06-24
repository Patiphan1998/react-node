import React, { Component } from "react";
import {
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
} from "mdbreact";
import { Button } from "reactstrap";
import { Field, reduxForm } from "redux-form";
import renderField from "../../Utils/renderFields";
import { Link } from "react-router";
import { connect } from "react-redux";
import { loadUsers, saveUser } from "../../redux/actions/userActions";

class Signup extends Component {
  //กำหนดค่า value ให้กับ textbox หรือ control ต่างๆ ในฟอร์ม
  //ถ้าเป็น HTML ธรรมดาก็จะกำหนดเป็น value="xxx" แต่สำหรับ redux-form
  //ต้องใช้ initialize ถ้าเป็น redux-form v.6 ต้องประกาศใช้ initialize แต่ v.7 เรียกใช้ได้เลย
  handleInitialize() {
    let initData = {
      user_type: "0",
      name: "",
      username: "",
      password: "",
    };
  }

  render() {
    //redux-form จะมี props ที่ชื่อ handleSubmit เพื่อใช้ submit ค่า
    const { handleSubmit, userSave } = this.props;

    return (
      <div className="container d-flex justify-content-center">
        <MDBRow>
          <MDBCol md="12">
            <MDBCard>
              <div className="header pt-3 peach-gradient">
                <MDBRow className="d-flex justify-content-center">
                  <h3 className="white-text mb-3 pt-3 font-weight-bold">
                    สมัครสมาชิก
                  </h3>
                </MDBRow>
              </div>
              <MDBCardBody className="mx-4 mt-4">
                {/* ตรวจสอบว่ามี err หรือไม่ */}
                {userSave.isRejected && (
                  <div className="alert alert-danger">{userSave.data}</div>
                )}

                {/* รูปแบบการแสดงผลจัดตาม Bootstrap 4 */}
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">
                    ประเภทผู้ใช้
                  </label>
                  <div className="col-sm-9">
                    <div className="form-check form-check-inline">
                      <label className="form-check-label">
                        <Field
                          className="form-check-input"
                          name="user_type"
                          component="input"
                          type="radio"
                          value="0"
                        />{" "}
                        ทั่วไป
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <label className="form-check-label">
                        <Field
                          className="form-check-input"
                          name="user_type"
                          component="input"
                          type="radio"
                          value="1"
                        />{" "}
                        ผู้ดูแลระบบ
                      </label>
                    </div>
                  </div>
                </div>
                <Field
                  label="Name"
                  type="text"
                  component={renderField}
                  name="name"
                  title="ชื่อ - สกุล"
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
                    gradient="blue"
                    rounded
                    className="btn-block z-depth-1a"
                    onClick={handleSubmit(this.onSubmit)}
                  >
                    สมัครสมาชิก
                  </Button>
                </div>
                <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">
                  or Sign in with:
                </p>
                <div className="row my-3 d-flex justify-content-center">
                  <Button
                    type="button"
                    color="white"
                    rounded
                    className="mr-md-3 z-depth-1a"
                  >
                    <MDBIcon
                      fab
                      icon="facebook-f"
                      className="blue-text text-center"
                    />
                  </Button>
                  <Button
                    type="button"
                    color="white"
                    rounded
                    className="mr-md-3 z-depth-1a"
                  >
                    <MDBIcon fab icon="twitter" className="blue-text" />
                  </Button>
                  <Button
                    type="button"
                    color="white"
                    rounded
                    className="z-depth-1a"
                  >
                    <MDBIcon fab icon="google-plus-g" className="blue-text" />
                  </Button>
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
          </MDBCol>
        </MDBRow>
      </div>
    );
  }

  //ฟังก์ชันส่งการค่าการ submit โดยส่งให้ฟังก์ชันชื่อ onSubmit ที่ได้จาก props
  onSubmit = (values) => {
    this.props.onSubmit(values);
  };

  //ฟังก์ชันบันทึกข้อมูล
  handleSubmit = (values) => {
    this.props.dispatch(saveUser(values)).then(() => {
      if (!this.props.userSave.isRejected) {
        this.toggle();
        this.props.dispatch(loadUsers());
      }
    });
  };
}

//validate ข้อมูลก่อน submit
function validate(values) {
  const errors = {};
  if (!values.name) {
    errors.name = "จำเป็นต้องกรอก ชื่อ-สกุล";
  }

  if (!values.username) {
    errors.username = "จำเป็นต้องกรอก Username !";
  } else if (values.username.length < 3) {
    errors.username = "Username ต้องมากกว่า 3 ตัวอักษร !";
  }

  return errors;
}

//validate ข้อมูลก่อน submit
function validate(values) {
  const errors = {};
  if (!values.name) {
    errors.name = "จำเป็นต้องกรอกชื่อ-สกุล";
  }

  if (!values.username) {
    errors.username = "จำเป็นต้องกรอก Username !";
  } else if (values.username.length < 3) {
    errors.username = "Username ต้องมากกว่า 3 ตัวอักษร !";
  }

  return errors;
}

//เรียกใช้ redux-form โดยให้มีการเรียกใช้การ validate ด้วย
const form = reduxForm({
  form: "signupForm",
  validate,
});

function mapStateToProps(state) {
  return {
    users: state.userReducers.users,
    user: state.userReducers.user,
    userDelete: state.userReducers.userDelete,
    userSave: state.userReducers.userSave,
  };
}
export default connect(mapStateToProps)(form(Signup));
