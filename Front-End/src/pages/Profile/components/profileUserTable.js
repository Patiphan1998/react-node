import React, { Component } from "react";
import { Button } from "reactstrap";
import { Card, Row, Col, Badge } from "react-bootstrap";
import { MDBView, MDBIcon } from "mdbreact";
//แสดงรายชื่อข้อมูลผู้ใช้ แสดงแบบ HTML TABLE
class profileUserTable extends Component {
  render() {
    //Destructuring ค่า props ที่ส่งมาจาก  src/pages/User.js
    const { data, buttonEdit, buttonDelete, user_id } = this.props;

    return (
      <div>
        {data &&
          data.map((e) => {
            if (e.id == user_id) {
              return (
                <div key={e.id}>
                  <Card.Header className="text-left orange-text">
                    <h2>
                      <MDBIcon icon="user-circle" /> {e.name}
                    </h2>
                  </Card.Header>
                  <Card.Body>
                    <Card.Title className="text-left pink-text">
                      <h2 className="text-center">**ข้อมูลติดต่อ**</h2>
                    </Card.Title>
                    <hr color="red" style={{width:'80%'}}/>
                    <Card.Text className="text-left ">
                      <h4>
                        <MDBIcon icon="phone red-text" /> {e.phone}
                        <br></br>
                      </h4>
                      <h4>
                        <MDBIcon fab icon="facebook red-text" /> {e.facebook}
                        <br></br>
                      </h4>
                      <h4>
                        <MDBIcon fab icon="line red-text" /> {e.line}
                        <br></br>
                      </h4>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="text-right">
                    <Button
                      color="warning"
                      size="sm"
                      onClick={() => buttonEdit(e.id)}
                    >
                      แก้ไข
                    </Button>
                  </Card.Footer>
                </div>
              );
            }
          })}
      </div>
    );
  }
}

export default profileUserTable;
