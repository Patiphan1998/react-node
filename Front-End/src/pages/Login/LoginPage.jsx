import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import { Field, reduxForm } from "redux-form";
import "../../css/style.css";
import { signin } from "../../redux/actions/authActions";
import renderLogin from "../../Utils/renderLogins";
import { Card, Row, Col, Badge } from "react-bootstrap";

class LoginPage extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <div
        className="shadow-box-example z-depth-1 container loginbg"
        style={{ padding: "10px", margin: "10px 0" }}
      >
        <div id="loginform" className="login">
          <div className="container">
            <div id="headerTitle" className="peach-gradient">
              <h3 className="white-text mb-3 pt-3 font-weight-bold">
                เข้าสู่ระบบ
              </h3>
            </div>
            {this.renderAlert()}
            <Field
              title="ชื่อผู้ใช้"
              name="username"
              component={renderLogin}
              type="text"
              label="Username"
              style={{ color: "#09FF00" }}
            />
            <Field
              title="รหัสผ่าน"
              name="password"
              component={renderLogin}
              type="password"
              label="Password"
              style={{ color: "#FB4211" }}
            />
            <div className="text-center pt-1 sm-3">
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
          </div>
          <OtherMethods />
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

const FormButton = (props) => (
  <div id="button" class="row">
    <button>{props.title}</button>
  </div>
);

const FormInput = (props) => (
  <div class="row">
    <label>{props.description}</label>
    <input type={props.type} placeholder={props.placeholder} />
  </div>
);

const OtherMethods = (props) => (
  <div id="alternativeLogin">
    <label>Or sign in with:</label>
    <div id="iconGroup">
      <Facebook />
      <Twitter />
      <Google />
    </div>
  </div>
);

const Facebook = (props) => <a href="#" id="facebookIcon"></a>;

const Twitter = (props) => <a href="#" id="twitterIcon"></a>;

const Google = (props) => <a href="#" id="googleIcon"></a>;

//รูปแบบในการ validate ของ redux-form
function validate(values) {
  const errors = {};
  if (!values.username) {
    errors.username = "จำเป็นต้อง Username";
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
export default connect(mapStateToProps)(form(LoginPage));
