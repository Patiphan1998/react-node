import React, { Component } from "react";
import { debounce } from "lodash";
import { connect } from "react-redux";
import {
  loadUsers,
  getUser,
  saveUser,
  deleteUser,
  resetStatus,
} from "../../../redux/actions/userActions";

import { Modal, ModalHeader, Button } from "reactstrap";
import { confirmModalDialog } from "../../../Utils/reactConfirmModalDialog";
import SearchBar from "../../../Utils/searchBar";
import UserTable from "./profileUserTable";
import UserForm from "./profileUserForm";

class User extends Component {
  //มีการใช้ Modal ของ reactstrap ซึ่งจะต้องเก็บ State การแสดง modal ไว้
  state = {
    modal: false,
    modalTitle: "",
  };

  //สั่ง dispach ฟังก์ชัน loadUsers
  componentDidMount() {
    this.props.dispatch(loadUsers());
  }

  render() {
    const { users, user, userSave } = this.props;
    if (users.isRejected) {
      //ถ้ามี error
      return <div>{users.data}</div>;
    }
    //debounce เป็นการหน่วงการส่งตัวอักษรเป็นฟังก์ชันของ lodash ทำเพื่อเรียกใช้การ filter ข้อมูล
    const userSearch = debounce((term) => {
      this.handleSearch(term);
    }, 500);

    if (this.props.authentication) {
      return (
        <div>
          
          {/* แสดงข้อความ Loading ก่อน */}
          {users.isLoading && <div>Loading...</div>}

          {/* Component UserTable จะส่ง props ไป 4 ตัว */}
          <UserTable
            data={users.data}
            buttonNew={this.handleNew}
            buttonEdit={this.handleEdit}
            buttonDelete={this.handleDelete}
            user_id={this.props.data.sub}
          />

          {/* เป็น Component สำหรับแสดง Modal ของ reactstrap 
                ซึ่งเราต้องควบคุมการแสดงไว้ที่ไฟล์นี้ ถ้าทำแยกไฟล์จะควบคุมยากมากครับ */}
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className="modal-primary"
            autoFocus={false}
          >
            <ModalHeader toggle={this.toggle}>
              {this.state.modalTitle}ผู้ใช้งาน
            </ModalHeader>
            {/* เรียกใช้งาน Component UserForm และส่ง props ไปด้วย 4 ตัว */}
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
  }

  //ฟังก์ชันสั่งแสดง/ปิด modal
  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  //ฟังก์ชัน filter ข้อมูล
  handleSearch = (term) => {
    this.props.dispatch(loadUsers(term));
  };

  //ฟังก์ชันสร้างข้อมูลใหม่โดยจะสั่งให้เปิด Modal
  handleNew = () => {
    this.props.dispatch(resetStatus());

    this.props.user.data = [];
    this.setState({ modalTitle: "เพิ่ม" });
    this.toggle();
  };

  //ฟังก์ชันแก้ไขข้อมูล และสั่งให้เปิด Modal โดยส่งข้อมูลไปแป๊ะให้กับฟอร์มด้วย
  handleEdit = (id) => {
    this.props.dispatch(resetStatus());
    this.setState({ modalTitle: "แก้ไข" });
    this.props.dispatch(getUser(id)).then(() => {
      this.toggle();
    });
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

  //ฟังก์ชันลบข้อมูล
  handleDelete = (id) => {
    confirmModalDialog({
      show: true,
      title: "ยืนยันการลบ",
      message: "คุณต้องการลบข้อมูลนี้ใช่หรือไม่",
      confirmLabel: "ยืนยัน ลบทันที!!",
      onConfirm: () =>
        this.props.dispatch(deleteUser(id)).then(() => {
          this.props.dispatch(loadUsers());
        }),
    });
  };
}

function mapStateToProps(state) {
  return {
    authentication: state.authReducers.authenticated,
    data: state.authReducers.data,

    users: state.userReducers.users,
    user: state.userReducers.user,
    userDelete: state.userReducers.userDelete,
    userSave: state.userReducers.userSave,
  };
}

export default connect(mapStateToProps)(User);
