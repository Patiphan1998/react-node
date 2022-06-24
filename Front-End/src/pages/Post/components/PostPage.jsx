import React, { Component } from "react";
import { connect } from "react-redux";
import {
  loadCars,
  saveCar,
  resetStatus,
} from "../../../redux/actions/carActions";

import { Modal, Button } from "reactstrap";
import { confirmModalDialog } from "../../../Utils/reactConfirmModalDialog";
import SearchBar from "../../../Utils/searchBar";
import { MDBIcon } from "mdbreact";
import PostForm from "./PostForm";

class PostPage extends Component {
  //มีการใช้ Modal ของ reactstrap ซึ่งจะต้องเก็บ State การแสดง modal ไว้
  state = {
    modal: false,
    modalTitle: "",
  };

  render() {
    const { cars, car, carSave } = this.props;

    if (this.props.authentication) {
      // this.props.data.sub = this.props.data.sub.toString();
      return (
        <div>
          <Button
            className="nav-item"
            color="yellow"
            size="sm-1"
            onClick={this.handleNew}
          >
            โพสขายรถ{" "}
            <MDBIcon icon="hand-pointer" className="animated flash infinite" />
          </Button>

          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className="modal-primary"
            autoFocus={false}
            size="lg"
            backdrop={false}
          >
            <PostForm
              carSave={carSave}
              onSubmit={this.handleSubmit}
              onToggle={this.toggle}
              user_id={this.props.data.sub}
            />
          </Modal>
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

  //ฟังก์ชันสร้างข้อมูลใหม่โดยจะสั่งให้เปิด Modal
  handleNew = () => {
    this.props.dispatch(resetStatus());

    this.props.car.data = [];
    this.setState({ modalTitle: "เพิ่ม" });
    this.toggle();
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
}

function mapStateToProps(state) {
  return {
    authentication: state.authReducers.authenticated,
    data: state.authReducers.data,

    cars: state.carReducers.cars,
    car: state.carReducers.car,
    carDelete: state.carReducers.carDelete,
    carSave: state.carReducers.carSave,
  };
}

export default connect(mapStateToProps)(PostPage);
