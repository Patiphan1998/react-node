import React, { Component } from "react";
import { Button } from "reactstrap";

//แสดงรายชื่อข้อมูลผู้ใช้ แสดงแบบ HTML TABLE
class UserTable extends Component {
  render() {
    //Destructuring ค่า props ที่ส่งมาจาก  src/pages/User.js
    const { data, buttonEdit, buttonDelete } = this.props;

    return (
      <div className="container row feature">
        {data &&
          data.map((e) => {
            return (
              <div
                className="feature-row feature-col border border-warning"
                id="main"
                key={e.id}
              >
                <div className="col-md-12 border-bottom">
                  ประเภทผู้ใช้ : {e.user_type === 0 ? "ทั่วไป" : "ผู้ดูแลระบบ"}
                </div>
                <div className="col-md-12 border-bottom">
                  ชื่อ-สกุล : {e.name}
                </div>
                <div className="col-md-12 border-bottom">
                  Username : {e.username}
                </div>
                <div className="col-md-12 border-bottom">
                  เบอร์โทร : {e.phone}
                </div>
                <div className="col-md-12 border-bottom">
                  Facebook : {e.facebook}
                </div>
                <div className="col-md-12 border-bottom">
                  ID LINE : {e.line}
                </div>
                <div className="col-md-12 text-center border-bottom">
                  <Button
                    color="warning"
                    size="sm"
                    onClick={() => buttonEdit(e.id)}
                  >
                    แก้ไข
                  </Button>{" "}
                  <Button
                    color="danger"
                    size="sm"
                    onClick={() => buttonDelete(e.id)}
                  >
                    ลบ
                  </Button>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}

export default UserTable;
