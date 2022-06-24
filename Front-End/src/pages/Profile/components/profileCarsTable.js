import React, { Component } from "react";
import { Button } from "reactstrap";
import moment from "moment";
import { Link } from "react-router";
//แสดงรายชื่อข้อมูลสถานที่ แสดงแบบ HTML TABLE
class profileTable extends Component {
  render() {
    //Destructuring ค่า props ที่ส่งมาจาก src/pages/Car.js
    const {
      data,
      buttonEdit,
      buttonDelete,
      user_id,
      buttonDetail,
    } = this.props;

    return (
      <div className="row feature">
        {/* loop ข้อมูลที่ได้รับมา */}
        {data &&
          data.map((e) => {
            if (e.user_id == user_id) {
              if (e.id_type === 1) {
                e.id_type = "รถแนะนำ";
              } else if (e.id_type === 2) {
                e.id_type = "รถใหม่ล่าสุด";
              } else if (e.id_type === 3) {
                e.id_type = "รถราคาพิเศษ";
              } else if (e.id_type === 0) {
                e.id_type = "รถทั่วไป";
              }

              if (e.status === 1) {
                e.status = "ยังมีอยู่";
              } else if (e.status === 0) {
                e.status = "ขายแล้ว";
              }
              return (
                <div
                  className="feature-row feature-col border border-white"
                  id="main"
                  key={e.id}
                >
                  <div
                    className="text-center"
                    style={{
                      backgroundColor: "yellow",
                      width: "100%",
                    }}
                    size="sm"
                  >
                    <div className="col-md-12">
                      <h1 style={{ color: "red", fontSize: 20 }}>{e.status}</h1>
                    </div>
                  </div>
                  <div className="col-md-12 border-bottom">
                    ยี่ห้อ : {e.brand}
                  </div>
                  <div className="col-md-12 border-bottom">
                    รุ่น : {e.generation}
                  </div>
                  <div className="col-md-12 border-bottom">
                    โฉมรถยนต์ : {e.car_makeover}
                  </div>
                  <div className="col-md-12 border-bottom">
                    รายละเอียดรุ่น : {e.model_details}
                  </div>
                  <div className="col-md-12 border-bottom">ปี : {e.year}</div>
                  <div className="col-md-12 border-bottom">
                    ขนาดเครื่องยนต์ : {e.engine_size}
                  </div>
                  <div className="col-md-12 border-bottom">
                    ประเภทรถ : {e.car_type}
                  </div>
                  <div className="col-md-12 border-bottom">
                    ระบบเกียร์ : {e.gear_system}
                  </div>
                  <div className="col-md-12 border-bottom">
                    จำนวนที่นั่ง : {e.number_of_seats}
                  </div>
                  <div className="col-md-12 border-bottom">
                    เลขไมล์: {e.Mileage} กม.
                  </div>
                  <div className="col-md-12 border-bottom">สี : {e.color}</div>
                  <div className="col-md-12 border-bottom">
                    ที่อยู่ : {e.address}
                  </div>
                  <div className="col-md-12 border-bottom">
                    ราคา : {e.price} บาท
                  </div>
                  {/* <div className="col-md-12 border-bottom">ประเภท : {e.id_type}</div> */}
                  <div className="col-md-12 border-bottom">
                    เชื้อเพลิง : {e.fuel}
                  </div>
                  <div className="col-md-12 border-bottom">
                    ปีจดทะเบียน : {e.registration_year}
                  </div>
                  <div className="col-md-12 border-bottom">
                    เวลาและวันที่ : {moment(e.doc_date).format("YYYY-MM-DD")}{" "}
                    {e.doc_time}
                  </div>

                  <div className="col-md-12 border-bottom text-center ">
                    <Button
                      color="warning"
                      size="sm"
                      onClick={() => buttonEdit(e.id)}
                    >
                      แก้ไข
                    </Button>
                    <Link onClick={() => buttonDetail(e.id)}>
                      <Button size="sm">ดูรถ</Button>
                    </Link>
                  </div>
                </div>
              );
            }
          })}
      </div>
    );
  }
}

export default profileTable;
