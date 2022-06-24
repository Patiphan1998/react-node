import React, { Component } from "react";
import "../../../css/style.css";
import { Link } from "react-router";
import { Carousel } from "react-responsive-carousel";
//แสดงรายชื่อข้อมูลรถ แสดงแบบ HTML TABLE
class CarSimilar extends Component {
  render() {
    //Destructuring ค่า props ที่ส่งมาจาก src/pages/Car.js
    const { data, buttonDetail } = this.props;

    return (
      <Carousel infiniteLoop useKeyboardArrows emulateTouch>
        <div>
          <img alt="" src="/img/1.jpg" />
          <p className="legend">ภาพด้านขวา</p>
        </div>
        <div>
          <img alt="" src="/img/2.jpg" />
          <p className="legend">ภาพด้านซ้าย</p>
        </div>
        <div>
          <img alt="" src="/img/3.jpg" />
          <p className="legend">ภาพด้านข้าง</p>
        </div>
        <div>
          <img alt="" src="/img/4.jpg" />
          <p className="legend">ภาพเครื่องยนต์</p>
        </div>
        <div>
          <img alt="" src="/img/5.jpg" />
          <p className="legend">ภาพด้านใน</p>
        </div>
      </Carousel>
    );
  }
}

export default CarSimilar;
