import React, { Component } from "react";
import { Button,ModalHeader } from "reactstrap";
import { Field, reduxForm } from "redux-form";
import {
  MDBIcon,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
} from "mdbreact";
import renderField from "../../Utils/renderFields";
import { Link } from "react-router";
import { signin } from "../../redux/actions/authActions";
import { connect } from "react-redux";

class UserForm extends Component {
  state = {
    modal: false,
  };

  toggle = () => {
    const { modal } = this.state;
    this.setState({
      modal: !modal,
    });
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <MDBCard>
          <ModalHeader toggle={this.toggle} className="peach-gradient">
            <h3 className="white-text mb-3 pt-3 font-weight-bold">
              เข้าสู่ระบบ
            </h3>
          </ModalHeader>
          {this.renderAlert()}
          <MDBCardBody className="mx-4 mt-4">
            <Field
              label="Username"
              type="text"
              component={renderField}
              name="username"
              title="ชื่อผู้ใช้"
              autoFocus
            />
            <Field
              label="Password"
              type="password"
              component={renderField}
              name="password"
              title="รหัสผ่าน"
            />
            <p className="font-small blue-text d-flex justify-content-end pb-3">
              Forgot
              <a href="#!" className="blue-text ml-1">
                Password ?
              </a>
            </p>
            <div className="text-center pt-3 mb-2">
              <Button
                type="button"
                outline
                color="warning"
                rounded
                className="btn-block z-depth-1a rounded-pill"
                onClick={handleSubmit(this.onSubmit)}
              >
                เข้าสู่ระบบ
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
              Don't have an account yet ?
              <Link to="signup" className="blue-text ml-1">
                Sign Up
              </Link>
            </p>
          </MDBModalFooter>
        </MDBCard>
      </div>
    );
  }

  //สำหรับ submit ค่าจากฟอร์ม
  //เนื่องจากฟอร์มเราใช้ redux-form มันจะส่งมาเป็น object ทำให้สะดวกในการใช้งาน
  //เช่น {username: "admin", password: "1234"}
  onSubmit = (values) => {
    this.props.dispatch(signin(values));
  };

  //Alert กรณี Login ไม่ผ่าน รับค่าจาก props ที่ได้จาก redux
  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Warning: </strong>
          {this.props.errorMessage}
        </div>
      );
    }
  }

  //ฟังก์ชันนี้เรียกใช้ props ชื่อ onToggle จาก src/pages/User.js เพื่อปิด Modal
  toggle = () => {
    this.props.onToggle();
  };
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

//รูปแบบในการ validate ของ redux-form
function validate(values) {
  const errors = {};
  if (!values.username) {
    errors.username = "จำเป็นต้องกรอก Username";
  }

  if (!values.password) {
    errors.password = "จำเป็นต้องกรอก Password !";
  }

  return errors;
}

//สร้าง form เพื่อเรียกใช้ redux-form
//ชื่อฟอร์มที่กำหนด signinForm จะต้องไม่ซ้ำกันในโปรเจค
//หากมีการ validate ก็ให้กำหนดโดยในที่นี้ฟังก์ชันในการ validate
//ชื่อเดียวกับการกำหนด validate
const form = reduxForm({
  form: "LoginForm",
  validate,
});

function mapStateToProps(state) {
  return {
    errorMessage: state.authReducers.error, //กรณี login ไม่ผ่าน
  };
}

export default connect(mapStateToProps)(form(UserForm));
