import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBAnimation,
} from "mdbreact";
import "../../../css/style.css";
import { Button, Input } from "reactstrap";
import { Link } from "react-router";

class FormsPage extends React.Component {
  render() {
    return (
      <div className="searchcars  mb-0 img-thumbnail rounded mx-auto d-block img-fluid z-depth-1">
        <div className="scar border border-warning mb-0 rounded mx-auto img-fluid z-depth-1">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <MDBAnimation type="bounce">
                  <h5>
                    ค้นหารถ <MDBIcon icon="car-side" />
                  </h5>
                </MDBAnimation>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid border border-warning  mb-0 rounded mx-auto img-fluid z-depth-1">
          <div className="row">
            <div className="col-sm-4">
              <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                เลือกประเภทรถ
              </label>
              <Input type="select" name="backdrop" id="backdrop" size="sm">
                <option>รถทั้งหมด</option>
                <option value="1">รถมือ 1</option>
                <option value="2">รถมือ 2</option>
              </Input>
            </div>
            <div className="col-sm-4">
              <label
                htmlFor="defaultFormRegisterEmailEx2"
                className="grey-text"
              >
                จังหวัด
              </label>
              <Input type="select" name="backdrop" id="backdrop" size="sm">
                <option>ทุกจังหวัด</option>
                <option value="1">รถมือ 1</option>
                <option value="2">รถมือ 2</option>
              </Input>
            </div>
            <div className="col-sm-4">
              <label
                htmlFor="defaultFormRegisterEmailEx2"
                className="grey-text"
              >
                ยี่ห้อ
              </label>
              <Input type="select" name="backdrop" id="backdrop" size="sm">
                <option>ทุกยี่ห้อ</option>
                <option value="1">รถมือ 1</option>
                <option value="2">รถมือ 2</option>
              </Input>
            </div>
            <div className="col-sm-4">
              <label
                htmlFor="defaultFormRegisterEmailEx2"
                className="grey-text"
              >
                รุ่น
              </label>
              <Input type="select" name="backdrop" id="backdrop" size="sm">
                <option>ทุกรุ่น</option>
                <option value="1">รถมือ 1</option>
                <option value="2">รถมือ 2</option>
              </Input>
            </div>
            <div className="col-sm-4">
              <label
                htmlFor="defaultFormRegisterEmailEx2"
                className="grey-text"
              >
                ประเภทผู้ขาย
              </label>
              <Input type="select" name="backdrop" id="backdrop" size="sm">
                <option>ทั้งหมด</option>
                <option value="1">รถมือ 1</option>
                <option value="2">รถมือ 2</option>
              </Input>
            </div>
            <div className="col-sm-4">
              <label
                htmlFor="defaultFormRegisterEmailEx2"
                className="grey-text"
              >
                ราคา
              </label>
              <Input type="select" name="backdrop" id="backdrop" size="sm">
                <option>ทั้งหมด</option>
                <option value="1">10,000 - 50,000</option>
                <option value="2">50,000 - 100,000</option>
                <option value="3">100,000 - 200,000</option>
                <option value="4">200,000 - 500,000</option>
                <option value="4">500,000 - 1,000,000</option>
                <option value="4">1,000,000 ขึ้นไป</option>
              </Input>
            </div>
            <div className="col-md-12 text-center">
              <Link to="/car">
              <Button color>
                <MDBIcon icon="search" /> ค้นหา
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FormsPage;
