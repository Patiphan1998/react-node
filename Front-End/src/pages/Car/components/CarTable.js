import React, { Component } from "react";
import { Button } from "reactstrap";
import "../../../css/style.css";
import { MDBIcon } from "mdbreact";
import { Link } from "react-router";

//แสดงรายชื่อข้อมูลรถ แสดงแบบ HTML TABLE
class CarTable extends Component {
  render() {
    //Destructuring ค่า props ที่ส่งมาจาก src/pages/Car.js
    const { data, buttonDetail } = this.props;

    return (
      <div className="row allcar col-buttom">
        {data &&
          data.map((e) => {
            if (e.status == 1) {
              
              if (e.id_type === 1) {
                e.id_type = "รถแนะนำ";
              } else if (e.id_type === 2) {
                e.id_type = "รถใหม่ล่าสุด";
              } else if (e.id_type === 3) {
                e.id_type = "รถราคาพิเศษ";
              } else if (e.id_type === 0) {
                e.id_type = "รถทั่วไป";
              }

              if (e.fuel === "") {
                e.fuel = "-----";
              }

              return (
                <div
                  className="col-md-5 allcar-col rounded img-thumbnail z-depth-1"
                  id="main"
                  key={e.id}
                >
                  <div className="col-md-6">
                    <Link onClick={() => buttonDetail(e.id)}>
                      <div className="figure-caption img-thumbnail z-depth-1 rounded-pill">
                        <MDBIcon icon="dragon" /> {e.id_type}
                      </div>
                      <img
                        className=" mb-0 img-thumbnail rounded mx-auto d-block img-fluid z-depth-1"
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
                    <p>ราคา {e.price} บาท</p>
                    <div>
                      <MDBIcon icon="gas-pump red-text" /> {e.fuel}
                    </div>
                    <div>
                      <MDBIcon icon="tachometer-alt red-text" /> {e.Mileage} กม.
                    </div>
                    <div>
                      <MDBIcon icon="cogs red-text" /> {e.gear_system}
                    </div>
                  </div>
                </div>
              );
            }
          })}
      </div>
    );
  }
}

export default CarTable;
