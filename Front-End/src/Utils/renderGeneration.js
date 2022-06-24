import React, { Component } from "react";
import { connect } from "react-redux";
import { getCar } from "../redux/actions/carActions";

//component นี้สร้างคล้ายๆ กับ renderFields.js เพียงแต่แสดงเป็น DropDown
class renderGeneration extends Component {
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
    const { cars } = this.props;

    return (
      <div className="form-group row">
        <label className="col-sm-3 col-form-label"><span style={{color:'red'}}>* </span> รุ่นรถยนต์</label>
        <div className="col-sm-9">
          <select {...input} className="form-control">
            <option value="foo">--- เลือกรุ่นรถ ---</option>
            <option>VIOS</option>
            <option>CAMRY</option>
            <option>ESQUIRE</option>
            <option>HILUX REVO</option>
            <option>CX-5</option>
            <option>BT-50 PRO</option>
            <option>2</option>
            <option>3</option>
            <option>CITY</option>
            <option>CIVIC</option>
            <option>JAZZ</option>
            <option>CR-V</option>
          </select>
          {touched && error && <small className="text-danger">{error}</small>}
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

export default connect(mapStateToProps)(renderGeneration);
