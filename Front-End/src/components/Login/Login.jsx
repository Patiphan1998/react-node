import React, { Component } from "react";
import { connect } from "react-redux";
import {
  loadUsers,
  saveUser,
  resetStatus,
} from "../../redux/actions/userActions";
import { MDBIcon } from "mdbreact";
import { Button, Modal } from "reactstrap";
import UserForm from "./LoginForm";

class User extends Component {
  //มีการใช้ Modal ของ reactstrap ซึ่งจะต้องเก็บ State การแสดง modal ไว้
  state = {
    modal: false,
    modalTitle: "",
  };

  render() {
    const { users, user, userSave } = this.props;
    if (users.isRejected) {
      //ถ้ามี error
      return <div>{users.data}</div>;
    }

    return (
      <div>
        <div className="nav">
          <Button color="primary" onClick={this.handleNew}>
            <MDBIcon icon="sign-in-alt" /> เข้าสู่ระบบ...
          </Button>
        </div>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className="modal-primary"
          autoFocus={true}
        >
          <UserForm
            data={user.data}
            userSave={userSave}
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

  //ฟังก์ชันสร้างข้อมูลใหม่โดยจะสั่งให้เปิด Modal
  handleNew = () => {
    this.props.dispatch(resetStatus());
    this.props.user.data = [];
    this.setState({ modalTitle: "เพิ่ม" });
    this.toggle();
  };

  //ฟังก์ชันบันทึกข้อมูล
  handleSubmit = (values) => {
    this.props.dispatch(saveUser(values)).then(() => {
      if (!this.props.userSave.isRejected) {
        this.toggle();
        this.props.dispatch(loadUsers());
      }
    });
  };
}

function mapStateToProps(state) {
  return {
    users: state.userReducers.users,
    user: state.userReducers.user,
    userSave: state.userReducers.userSave,
  };
}

export default connect(mapStateToProps)(User);
