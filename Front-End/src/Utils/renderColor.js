import React, { Component } from "react";
import { connect } from "react-redux";
import { getCar } from "../redux/actions/carActions";
import { Field, reduxForm } from "redux-form";

//component นี้สร้างคล้ายๆ กับ renderFields.js เพียงแต่แสดงเป็น DropDown
class renderColor extends Component {
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

    return (
      <div className="form-group row">
        <label className="col-sm-3 col-form-label"><span style={{color:'red'}}>* </span> สีรถ</label>
        <div className="col-sm-9">
          <div className="form-check form-check-inline">
            <label className="form-check-label" style={{color:'black', backgroundColor:'white'}}>
              <Field
                className="form-check-input"
                name="color"
                component="input"
                type="radio"
                value="สีขาว"
              />{" "}
              สีขาว
            </label>
          </div>
          <div className="form-check form-check-inline">
            <label className="form-check-label" style={{color:'white', backgroundColor:'black'}}>
              <Field
                className="form-check-input"
                name="color"
                component="input"
                type="radio"
                value="สีดำ"
              />{" "}
              สีดำ
            </label>
          </div>
          <div className="form-check form-check-inline">
            <label className="form-check-label" style={{color:'white', backgroundColor:'gold'}}>
              <Field
                className="form-check-input"
                name="color"
                component="input"
                type="radio"
                value="สีทอง"
              />{" "}
              สีทอง
            </label>
          </div>
          <div className="form-check form-check-inline">
            <label className="form-check-label" style={{color:'white', backgroundColor:'green'}}>
              <Field
                className="form-check-input"
                name="color"
                component="input"
                type="radio"
                value="สีเขียว"
              />{" "}
              สีเขียว
            </label>
          </div>
          <div className="form-check form-check-inline">
            <label className="form-check-label" style={{color:'white', backgroundColor:'yellow'}}>
              <Field
                className="form-check-input"
                name="color"
                component="input"
                type="radio"
                value="สีเหลือง"
              />{" "}
              สีเหลือง
            </label>
          </div>

          <div className="form-check form-check-inline">
            <label className="form-check-label" style={{color:'white', backgroundColor:'silver'}}>
              <Field
                className="form-check-input"
                name="color"
                component="input"
                type="radio"
                value="สีเงิน"
              />{" "}
              สีเงิน
            </label>
          </div>
          <div className="form-check form-check-inline">
            <label className="form-check-label" style={{color:'white', backgroundColor:'aqua'}}>
              <Field
                className="form-check-input"
                name="color"
                component="input"
                type="radio"
                value="สีฟ้า"
              />{" "}
              สีฟ้า
            </label>
          </div>

          <div className="form-check form-check-inline">
            <label className="form-check-label" style={{color:'white', backgroundColor:'red'}}>
              <Field
                className="form-check-input"
                name="color"
                component="input"
                type="radio"
                value="สีแดง"
              />{" "}
              สีแดง
            </label>
          </div>

          <div className="form-check form-check-inline">
            <label className="form-check-label" style={{color:'white', backgroundColor:'Maroon'}}>
              <Field
                className="form-check-input"
                name="color"
                component="input"
                type="radio"
                value="สีน้ำตาล"
              />{" "}
              สีน้ำตาล
            </label>
          </div>
          <div className="form-check form-check-inline">
            <label className="form-check-label" style={{color:'white', backgroundColor:'orange'}}>
              <Field
                className="form-check-input"
                name="color"
                component="input"
                type="radio"
                value="สีส้ม"
              />{" "}
              สีส้ม
            </label>
          </div>
          <div className="form-check form-check-inline">
            <label className="form-check-label" style={{color:'white', backgroundColor:'pink'}}>
              <Field
                className="form-check-input"
                name="color"
                component="input"
                type="radio"
                value="สีชมพู"
              />{" "}
              สีชมพู
            </label>
          </div>
          <div className="form-check form-check-inline">
            <label className="form-check-label" style={{color:'white', backgroundColor:'purple'}}>
              <Field
                className="form-check-input"
                name="color"
                component="input"
                type="radio"
                value="สีม่วง"
              />{" "}
              สีม่วง
            </label>
          </div>
          <div className="form-check form-check-inline">
            <label className="form-check-label" style={{color:'white', backgroundColor:'#FAD7A0'}}>
              <Field
                className="form-check-input"
                name="color"
                component="input"
                type="radio"
                value="สีครีม"
              />{" "}
              สีครีม
            </label>
          </div>

          <div className="form-check form-check-inline">
            <label className="form-check-label" style={{color:'white', backgroundColor:'blue'}}>
              <Field
                className="form-check-input"
                name="color"
                component="input"
                type="radio"
                value="สีน้ำเงิน"
              />{" "}
              สีน้ำเงิน
            </label>
          </div>
          <div className="form-check form-check-inline">
            <label className="form-check-label" style={{color:'black', backgroundColor:''}}>
              <Field
                className="form-check-input"
                name="color"
                component="input"
                type="radio"
                value="สีอื่นๆ"
              />{" "}
              สีอื่นๆ
            </label>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cars: state.carReducers.cars,
  };
}

export default connect(mapStateToProps)(renderColor);
