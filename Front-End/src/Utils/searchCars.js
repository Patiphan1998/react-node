import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Input } from "reactstrap";
import { MDBIcon, MDBAnimation } from "mdbreact";
import { browserHistory ,Link} from "react-router";

class SearchCars extends Component {
  //รับค่า props และกำหนด state ผ่าน  constructor เป็นอีกรูปแบบหนึ่ง
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }

  //รูปแบบการกำหนด PropTypes เพื่อเช็ค props ที่ส่งเข้ามา
  static propTypes = {
    onSearchTermChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
  };

  render() {
    return (
      <div className="bottom-bar">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-12">
              <div className="search"></div>
            </div>
          </div>
        </div>
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
              <div className="col-sm-12">
                <label htmlFor="exampleDisabled" className="disabled">
                  ยี่ห้อรถยนต์
                </label>
                <select
                  className="form-control"
                  placeholder={this.props.placeholder}
                  value={this.state.term}
                  onChange={(e) => this.onInputChange(e.target.value)}
                >
                  <option style={{ color: "#8000FF" }} value="">--- ทั้งหมด ---</option>
                  <option style={{ color: "#8000FF" }} value="TOYOTA">
                    TOYOTA
                  </option>
                  <option style={{ color: "#8000FF" }} value="MAZDA">
                    MAZDA
                  </option>
                  <option style={{ color: "#8000FF" }} value="HONDA">
                    HONDA
                  </option>
                </select>
              </div>
              {/* <div className="col-sm-12">
                <label
                  htmlFor="defaultFormRegisterEmailEx2"
                  className="grey-text"
                >
                  รุ่น
                </label>
                <select
                  className="form-control"
                  placeholder={this.props.placeholder}
                  value={this.state.term}
                  onChange={(e) => this.onInputChange(e.target.value)}
                >
                  <option style={{ color: "#8000FF" }}>
                    --- ทั้งหมด ---
                  </option>
                  <option style={{ color: "#8000FF" }} value="VIOS">
                    VIOS
                  </option>
                  <option style={{ color: "#8000FF" }} value="CAMRY">
                    CAMRY
                  </option>
                  <option style={{ color: "#8000FF" }} value="ESQUIRE">
                    ESQUIRE
                  </option>
                  <option style={{ color: "#8000FF" }} value="HILUX REVO">
                    HILUX REVO
                  </option>
                  <option style={{ color: "#8000FF" }} value="CX-5">
                    CX-5
                  </option>
                  <option style={{ color: "#8000FF" }} value="BT-50 PRO">
                    BT-50 PRO
                  </option>
                  <option style={{ color: "#8000FF" }} value="CITY">
                    CITY
                  </option>
                  <option style={{ color: "#8000FF" }} value="CIVIC">
                    CIVIC
                  </option>
                  <option style={{ color: "#8000FF" }} value="JAZZ">
                    JAZZ
                  </option>
                </select>
              </div>
              <div className="col-md-12 text-center">
                <Button color>
                  <MDBIcon icon="search" /> ค้นหา
                </Button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      //   {/* Bottom Bar End */}
    );
  }

  //ฟังก์ชันสำหรับเรียก props ที่ใช้ filter ข้อมูล
  //ดังนั้นฟังก์ชัน onSearchTermChange ที่ส่งเข้ามาต้องเป็นฟังก์ชันที่ใช้ในการ filter ข้อมูล
  //Component นี้ทำหน้าที่เพียงส่งตัวอักษรกลับไป
  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}

export default SearchCars;
