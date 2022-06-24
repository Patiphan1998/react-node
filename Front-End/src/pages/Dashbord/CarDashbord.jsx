import React, { Component } from "react";
import { debounce } from "lodash";
import { connect } from "react-redux";
import {
  loadCars,
  getCar,
  saveCar,
  deleteCar,
  resetStatus,
} from "../../redux/actions/carActions";

import { Modal, ModalHeader, Button } from "reactstrap";
import { confirmModalDialog } from "../../Utils/reactConfirmModalDialog";
import SearchBar from "../../Utils/searchBar";
import { Link, browserHistory } from "react-router";
import CarTable from "./components/Cars/CarTable";
import CarForm from "./components/Cars/CarForm";
import TopBar from "../Home/components/TopBar";

class Car extends Component {
  //มีการใช้ Modal ของ reactstrap ซึ่งจะต้องเก็บ State การแสดง modal ไว้
  state = {
    modal: false,
    modalTitle: "",
  };

  //สั่ง dispach ฟังก์ชัน loadLocations ดึงเอาข้อมูลรายชื่อสถานที่
  componentDidMount() {
    this.props.dispatch(loadCars());
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

    return (
      <div>
        <TopBar />
        <hr />
        {/* Service Start */}
        <div
          className="service"
          style={{ backgroundColor: "yellow", color: "red" }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <h1 style={{ color: "red" }}>
                  สำหรับ เพิ่ม ลบ แก้ไข ข้อมูลรถยนต์
                </h1>
              </div>
            </div>
          </div>
        </div>
        {/* Service End */}

        <div className="form-group row">
          <div className="col-sm-4">
            {/* ส่ง props onSearchTermChange ให้ Component SearchBar เพื่อ filgter
                        โดยฝั่ง SearchBar จะนำไปใช้กับ event onChange */}
            <SearchBar
              onSearchTermChange={carSearch}
              placeholder="ค้นหา...ยี่ห้อ, รุ่น"
            />
          </div>
          <div className="col-sm-8 " style={{ textAlign: "right" }}>
            <Button color="success" size="sm-1" onClick={this.handleNew}>
              เพิ่มข้อมูล
            </Button>
          </div>
        </div>

        <hr color="red" />

        {/* แสดงข้อความ Loading ก่อน */}
        {cars.isLoading && <div>Loading...</div>}

        {/* Component CarTable จะส่ง props ไป 4 ตัว */}
        <CarTable
          data={cars.data}
          buttonNew={this.handleNew}
          buttonEdit={this.handleEdit}
          buttonDelete={this.handleDelete}
          buttonDetail={this.handleDetail}
        />

        {/* เป็น Component สำหรับแสดง Modal ของ reactstrap 
                ซึ่งเราต้องควบคุมการแสดงไว้ที่ไฟล์นี้ ถ้าทำแยกไฟล์จะควบคุมยากมากครับ */}
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className="modal-primary"
          autoFocus={false}
          size="lg"
        >
          <ModalHeader toggle={this.toggle}>
            {this.state.modalTitle}ข้อมูลรถยนต์
          </ModalHeader>
          {/* เรียกใช้งาน Component CarForm และส่ง props ไปด้วย 4 ตัว */}
          <CarForm
            data={car.data}
            carSave={carSave}
            onSubmit={this.handleSubmit}
            onToggle={this.toggle}
          />
        </Modal>
      </div>
    );
  }

  //ฟังก์ชันสั่งแสดง/ปิด modal
  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  //ฟังก์ชัน filter ข้อมูล
  handleSearch = (term) => {
    this.props.dispatch(loadCars(term));
  };

  //ฟังก์ชันสร้างข้อมูลใหม่โดยจะสั่งให้เปิด Modal
  handleNew = () => {
    this.props.dispatch(resetStatus());

    this.props.car.data = [];
    this.setState({ modalTitle: "เพิ่ม" });
    this.toggle();
  };

  //ฟังก์ชันแก้ไขข้อมูล และสั่งให้เปิด Modal โดยส่งข้อมูลไปแป๊ะให้กับฟอร์มด้วย
  handleEdit = (id) => {
    this.props.dispatch(resetStatus());

    this.setState({ modalTitle: "แก้ไข" });
    this.props.dispatch(getCar(id)).then(() => {
      this.toggle();
    });
  };

  //ฟังก์ชันบันทึกข้อมูล
  handleSubmit = (values) => {
    this.props.dispatch(saveCar(values)).then(() => {
      if (!this.props.carSave.isRejected) {
        this.toggle();
        this.props.dispatch(loadCars());
      }
    });
  };

  //ฟังก์ชันลบข้อมูล
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

function mapStateToProps(state) {
  return {
    cars: state.carReducers.cars,
    car: state.carReducers.car,
    carDelete: state.carReducers.carDelete,
    carSave: state.carReducers.carSave,
  };
}

export default connect(mapStateToProps)(Car);
