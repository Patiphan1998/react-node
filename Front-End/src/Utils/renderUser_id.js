import React, { Component } from "react";
import { connect } from "react-redux";
import { getCar } from "../redux/actions/carActions";

//component นี้สร้างคล้ายๆ กับ renderFields.js เพียงแต่แสดงเป็น DropDown
class renderCars extends Component {
  //สั่งโหลดข้อมูลสถานที่
  componentDidMount() {
    this.props.dispatch(getCar());
  }

  render() {
    //Destructuring ค่าที่ redux-form {Field} ส่งมาให้อัตโนมัติ
    const {
      input,
      label,
      meta: { touched, error },
    } = this.props;

    if (this.props.authentication) {

    return (
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">รหัสผู้ใช้งาน</label>
        <div className="col-sm-10">
          <input {...input} className="form-control-plaintext" value={this.props.data.sub} readOnly/>
          {touched && error && <small className="text-danger">{error}</small>}
        </div>
      </div>
    );}
  }
}

function mapStateToProps(state) {
  return {
    authentication: state.authReducers.authenticated,
    data: state.authReducers.data,

    cars: state.carReducers.cars,
  };
}

export default connect(mapStateToProps)(renderCars);
