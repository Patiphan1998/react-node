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
      <div className="container row feature">
        {data &&
          data.map((e) => {
            if(e.brand == 'TOYOTA'){
            if (e.id_type === 1) {
              e.id_type = "รถแนะนำ";
            } else if (e.id_type === 2) {
              e.id_type = "รถใหม่ล่าสุด";
            } else if (e.id_type === 3) {
              e.id_type = "รถราคาพิเศษ";
            } else if (e.id_type === 0){
              e.id_type = "รถทั่วไป";
            }
            return (
              <div
                className="feature-row feature-col border border-warning"
                id="main"
                key={e.id}
              >
                <Link onClick={() => buttonDetail(e.id)}>
                  <div className="nav-link">
                    <img
                      className="rounded mb-0 img-thumbnail rounded mx-auto d-block img-fluid z-depth-1"
                      src={e.image1}
                      alt="Product Image"
                    />
                  </div>
                  <div
                    className="nav-link"
                    style={{
                      color: "Orange",
                      fontSize: "22px",
                      marginBottom: "10px",
                    }}
                  >
                    {e.year} {e.brand} {e.generation} {e.car_makeover} {e.color}
                  </div>
                </Link>
                <div
                  className="nav-link"
                  style={{ color: "back", fontSize: "22px" }}
                >
                  ราคา {e.price} บาท
                </div>
                <div className="nav-link">
                  <div
                    className="border border-danger text-center"
                    style={{ color: "red", fontSize: "18px" }}
                  >
                    {e.id_type}
                  </div>
                  <div style={{ color: "Gray" }}>
                    <MDBIcon icon="car-side" /> {e.Mileage} กม.
                  </div>
                  <div style={{ color: "Gray" }}>
                    <MDBIcon icon="cogs" /> {e.gear_system}
                  </div>
                  <div style={{ color: "Gray" }}>
                    <MDBIcon icon="map-marker-alt" /> {e.address}
                  </div>
                  <div className="text-center">
                    <Button color="info" size="sm">
                      ติดต่อ
                    </Button>
                    <Button color="success" size="sm">
                      Line
                    </Button>
                  </div>
                </div>
              </div>
            );}
          })}
      </div>
    );
  }
}

export default CarTable;
