import React, { Component } from "react";
import { Card, Row, Col, Badge } from "react-bootstrap";
import { MDBView, MDBIcon } from "mdbreact";
import { connect } from "react-redux";

import {
  loadCars,
  getCar,
  saveCar,
  deleteCar,
  resetStatus,
} from "../../redux/actions/carActions";

import { loadUsers } from "../../redux/actions/userActions";
import { MDBModal, MDBModalHeader } from "mdbreact";
import { confirmModalDialog } from "../../Utils/reactConfirmModalDialog";
import SearchBar from "../../Utils/searchBar";
import { debounce } from "lodash";
import CarTable from "./components/profileCarsTable";
import CarForm from "./components/profileCarsForm";
import UserTable from "./components/profileUserTable";
import UserForm from "./components/profileUserForm";
import { Button } from "reactstrap";
import Test from "./components/ProfileUser";
import { Link, browserHistory } from "react-router";
import TopBar from "../Home/components/TopBar";

class ProfilePage extends Component {
  //มีการใช้ Modal ของ reactstrap ซึ่งจะต้องเก็บ State การแสดง modal ไว้
  state = {
    modal: false,
    modalTitle: "",
  };

  //สั่ง dispach ฟังก์ชัน loadLocations ดึงเอาข้อมูลรายชื่อสถานที่
  componentDidMount() {
    this.props.dispatch(loadCars());
    this.props.dispatch(loadUsers());
  }

  render() {
    const { cars, car, carSave } = this.props;

    //ถ้ามี error
    if (cars.isRejected) {
      return <div>{cars.data}</div>;
    }

    //debounce เป็นการหน่วงการส่งตัวอักษรเป็นฟังก์ชันของ lodash ทำเพื่อเรียกใช้การ filter ข้อมูล
    const carSearch = debounce((term) => {
      this.handleSearch(term);
    }, 500);

    if (this.props.authentication) {
      if (this.props.data.user_type === 0) {
        this.props.data.user_type = "สมาชิกทั่วไป";
      } else if (this.props.data.user_type === 1) {
        this.props.data.user_type = "ผู้ดูแลระบบ";
      }
      return (
        <div>
          <TopBar />
          <hr color="red" />

          <div
            className="shadow-box-example z-depth-3 sunny-morning-gradient container"
            style={{ padding: "30px", margin: "20px 0" }}
          >
            <Row>
              <Col md={4}>
                <h3 className="text-right green-text">
                  <MDBIcon icon="award" />
                </h3>
                <div>
                  <img
                    className="shadow-box-example z-depth-5"
                    style={{ width: 270, height: 263 }}
                    src={this.props.data.image}
                    className="img-fluid rounded-circle hoverable"
                    alt="ไม่มีโปรไฟล์"
                  />
                </div>
                <br></br>
                <h3 className="text-left blue-text">
                  <MDBIcon icon="gem" /> {this.props.data.user_type}
                </h3>
              </Col>
              <Col md={8}>
                <Card className="text-right shadow-box-example hoverable ">
                  <Card.Text className="text-left ">
                    <Test />
                  </Card.Text>
                </Card>
              </Col>
            </Row>
            <Row>
              <hr />

              {/* Service Start */}
              <div
                className="service col-lg-12"
                style={{ backgroundColor: "yellow", color: "red" }}
              >
                <h1 style={{ color: "red" }}>สำหรับแก้ไข ข้อมูลรถยนต์ของคุณ</h1>
              </div>
              {/* Service End */}

              <div className="form-group">
                <div className="col-md-12">
                  <SearchBar
                    onSearchTermChange={carSearch}
                    placeholder="ค้นหา...ยี่ห้อ, รุ่น"
                  />
                </div>
              </div>

              <hr color="red" />

              {/* แสดงข้อความ Loading ก่อน */}
              {cars.isLoading && <div>Loading...</div>}

              {/* Component profileTable จะส่ง props ไป 4 ตัว */}
              <CarTable
                data={cars.data}
                user_id={this.props.data.sub}
                buttonEdit={this.handleEdit}
                buttonDelete={this.handleDelete}
                buttonDetail={this.handleDetail}
              />

              <MDBModal
                isOpen={this.state.modal}
                toggle={this.toggle}
                className="modal-primary"
                autoFocus={false}
                size="lg"
              >
                <MDBModalHeader toggle={this.toggle}>
                  แก้ไขข้อมูลรถยนต์
                </MDBModalHeader>
                <CarForm
                  data={car.data}
                  carSave={carSave}
                  onSubmit={this.handleSubmit}
                  onToggle={this.toggle}
                />
              </MDBModal>
            </Row>
          </div>
        </div>
      );
    }
  }

  //ฟังก์ชันสั่งแสดง/ปิด modal
  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  handleSearch = (term) => {
    this.props.dispatch(loadCars(term));
  };
  handleEdit = (id) => {
    this.props.dispatch(resetStatus());
    this.props.dispatch(getCar(id)).then(() => {
      this.toggle();
    });
  };
  handleSubmit = (values) => {
    this.props.dispatch(saveCar(values)).then(() => {
      if (!this.props.carSave.isRejected) {
        this.toggle();
        this.props.dispatch(loadCars());
      }
    });
  };
  handleDelete = (id) => {
    confirmModalDialog({
      show: true,
      title: "ยืนยันการลบ",
      message: "คุณต้องการลบข้อมูลนี้ใช่หรือไม่",
      confirmLabel: "ยืนยัน ลบทันที!!",
      onConfirm: () =>
        this.props.dispatch(deleteCar(id)).then(() => {
          this.props.dispatch(loadCars());
        }),
    });
  };

  handleDetail = (id) => {
    browserHistory.push(`/showcar/detail/${id}`);
  };
}

//authentication เช็คว่าเป็น true หรือ false
//data ตัวนี้จะได้ข้อมูล PAYLOAD จาก token ครับ
//ทั้งหมดทั้งมวลเราจัดการมาตั้งแต่ action, reducer แล้วครับ
function mapStateToProps(state) {
  return {
    authentication: state.authReducers.authenticated,
    data: state.authReducers.data,

    cars: state.carReducers.cars,
    car: state.carReducers.car,
    carDelete: state.carReducers.carDelete,
    carSave: state.carReducers.carSave,

    users: state.userReducers.users,
    user: state.userReducers.user,
    userDelete: state.userReducers.userDelete,
    userSave: state.userReducers.userSave,
  };
}

export default connect(mapStateToProps)(ProfilePage);
