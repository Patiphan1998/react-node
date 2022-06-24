import React, { useState, useEffect } from "react";
import axios from "axios";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Button, Input, Label } from "reactstrap";
import { MDBIcon, MDBInput } from "mdbreact";
import { browserHistory ,Link} from "react-router";
import { Field, reduxForm } from "redux-form";

const moment = require("moment");

function RegisterPage() {
  const [nameType, setNameType] = useState("");
  const [usernameType, setUsernameType] = useState("");
  const [passwordType, setPasswordType] = useState("");
  const [image, setImage] = useState("");
  const [phoneType, setPhoneType] = useState("");
  const [facebookType, setFacebookType] = useState("");
  const [lineType, setLineType] = useState("");

  const [uploadPercentage, setPercent] = useState(0);

  const uploadFile = ({ target: { files } }) => {
    // console.log(files[0])
    let data = new FormData();
    data.append("file", files[0]);

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
      console.log(res.data.file_url);
      setImage(res.data.file_url);
      setPercent(100);
      // setAvatar(res.data.url)
      setTimeout(() => {
        setPercent(0);
      }, 2000);
    });
  };

  async function register() {
    const request = await axios.post("http://localhost:3009/register", {
      user_type: "0",
      name: nameType,
      username: usernameType,
      password: passwordType,
      image: image,
      phone: phoneType,
      facebook: facebookType,
      line: lineType,
      doc_date: moment().format("YYYY-MM-DD"),
      doc_time: moment().format("HH:mm"),
    });

    alert(request.data, browserHistory.push(`/login`));
    // alert(request.data);
  }

  return (
    <div
      className="shadow-box-example z-depth-1 container loginbg"
      style={{ padding: "10px", margin: "10px 0" }}
    >
      <div id="registerform" className="login">
        <div className="container-fluid add">
          <div id="headerTitle" className="peach-gradient">
            <h3 className="white-text mb-3 pt-3 font-weight-bold">
              สมัครสมาชิก
            </h3>
          </div>
          <div className="container-fluid">
            <small className="text-danger">
              ** สำหรับสมาชิกที่จะขายรถ <Link style={{color:'blue'}} to="/registermember">คลิกที่นี่ !!</Link>
            </small>
            <div className="container-fluid">
              <div className="form-group">
                <label className="text-left">
                  ชื่อ - นามสกุล <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="ชื่อ - นามสกุล"
                  value={nameType}
                  onChange={(e) => {
                    setNameType(e.target.value);
                  }}
                  outline
                  style={{ color: "#8000FF" }}
                />
              </div>
              <div className="form-group">
                <label className="text-left">รูปโปรไฟล์ </label>
                <input type="file" name="file" onChange={uploadFile} />
                <img src={image} width="100"/>
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
              </div>
              <div className="form-group">
                <label className="disabled">
                  ชื่อผู้ใช้งาน <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="User Name"
                  value={usernameType}
                  onChange={(e) => {
                    setUsernameType(e.target.value);
                  }}
                  outline
                  style={{ color: "#8000FF" }}
                />
              </div>
              <div className="form-group">
                <label className="text-left">
                  รหัสผ่าน <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Password"
                  value={passwordType}
                  onChange={(e) => {
                    setPasswordType(e.target.value);
                  }}
                  outline
                  style={{ color: "#8000FF" }}
                />
              </div>
              {/* <div className="form-group">
                <label className="text-left">เบอร์โทร <span style={{ color: "red" }}>*</span></label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Telephone"
                  value={phoneType}
                  onChange={(e) => {
                    setPhoneType(e.target.value);
                  }}
                  outline
                  style={{ color: "#8000FF" }}
                />
              </div> */}
              {/* <div className="form-group">
                <label className="text-left">เฟชบุ็ค</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Facebook"
                  value={facebookType}
                  onChange={(e) => {
                    setFacebookType(e.target.value);
                  }}
                  outline
                  style={{ color: "#8000FF" }}
                />
              </div> */}
              {/* <div className="form-group">
                <label className="text-left">ไลน์</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="ID LINE"
                  value={lineType}
                  onChange={(e) => {
                    setLineType(e.target.value);
                  }}
                  outline
                  style={{ color: "#8000FF" }}
                />
              </div> */}
            </div>
            <div className="text-center pt-3 mb-3">
              <Button
                type="button"
                outline
                color="warning"
                rounded
                className="btn-block z-depth-1a rounded-pill"
                onClick={register}
              >
                สมัครสมาชิก
              </Button>
            </div>
          </div>
          <OtherMethods />
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;

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
