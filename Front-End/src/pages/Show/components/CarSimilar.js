import React, { Component } from "react";
import "../../../css/style.css";
import { Link } from "react-router";

//แสดงรายชื่อข้อมูลรถ แสดงแบบ HTML TABLE
class CarSimilar extends Component {

  render() {
    //Destructuring ค่า props ที่ส่งมาจาก src/pages/Car.js
    const { data, buttonDetail } = this.props;

    return (
      <div className="row allcar col-buttom">
        {data &&
          data.map((e) => {
            if (e.id_car == 1 && e.id_car != e.id) {
              if (e.id_type === 1) {
                e.id_type = "รถแนะนำ";
              } else if (e.id_type === 2) {
                e.id_type = "รถใหม่ล่าสุด";
              } else if (e.id_type === 3) {
                e.id_type = "รถราคาพิเศษ";
              } else {
                e.id_type = "รถทั่วไป";
              }
              return (
                <div
                  className="col-md-5 allcar-col rounded img-thumbnail z-depth-1"
                  id="main"
                  key={e.id}
                >
                  <div className="col-md-6">
                    <Link onClick={() => buttonDetail(e.id)}>
                      <img
                        className="mb-0 img-thumbnail rounded mx-auto d-block shadow-box-example hoverable"
                        src={e.image1}
                        alt="Product Image"
                      />
                    </Link>
                  </div>
                  <div className="col-md-6">
                    <Link onClick={() => buttonDetail(e.id)}>
                      <h5>
                        {e.year} {e.brand} {e.generation} {e.car_makeover}{" "}
                        {e.color}
                      </h5>
                    </Link>
                    <p>
                      ** <span>{e.price} บาท</span>
                    </p>
                  </div>
                </div>
              );
            }
          })}
      </div>
    );
  }
}

export default CarSimilar;
