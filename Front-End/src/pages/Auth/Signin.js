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
import { connect } from "react-redux";
import { signin } from "../../redux/actions/authActions";
import { Link } from "react-router";

class Signin extends Component {
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
      <div className="container d-flex justify-content-center">
        <div className="row">
          <div className="col-md-12">
            <MDBCard>
              <div className="header pt-3 peach-gradient">
                <MDBRow className="d-flex justify-content-center">
                  <h3 className="white-text mb-3 pt-3 font-weight-bold">
                    เข้าสู่ระบบ
                  </h3>
                </MDBRow>
              </div>
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
                <div className="text-center pt-3 mb-3">
                  <Button
                    type="button"
                    gradient="blue"
                    rounded
                    className="btn-block z-depth-1a"
                    onClick={handleSubmit(this.onSubmit)}
                  >
                    เข้าสู่ระบบ
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
                  Don't have an account yet ?
                  <Link to="signup" className="blue-text ml-1">
                    Sign Up
                  </Link>
                </p>
              </MDBModalFooter>
            </MDBCard>
          </div>
        </div>
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
  form: "signinForm",
  validate,
});

function mapStateToProps(state) {
  return {
    errorMessage: state.authReducers.error, //กรณี login ไม่ผ่าน
  };
}

//ในการ connect หากมีการใช้ redux-form ให้กำหนดตามรูปแบบด้านล่าง
//โดยต้องเอา form มาครอบ Component ของเราไว้เป็นรูแบบของ HOC
export default connect(mapStateToProps)(form(Signin));
