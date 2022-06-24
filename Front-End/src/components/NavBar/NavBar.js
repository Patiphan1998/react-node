import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Collapse,
  NavbarToggler,
  NavbarBrand,
  Navbar,
  Button,
} from "reactstrap";
import { MDBIcon } from "mdbreact";
import "../../css/style.css";
import Post from "../../pages/Post/components/PostPage";
import { browserHistory } from "react-router";

class Header extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  renderLinks() {
    //ตรวจสอบจาก reducer authReducers.js ที่ได้ map ไว้ด้านล่าง
    //โดยเช็คว่าถ้าหากมีการ signin ก็จะแสดงเมนูตามเงื่อนไข
    if (this.props.authentication) {
      //ถ้า เป็นผู้ใช้งานปกติจะแสดงแค่ 2 เมนู
      if (this.props.data.user_type === 0) {
        return [
          <li className="nav-item text-center" key={0}>
            <Link to="/" className="nav-link">
              <i className="fa fa-home" /> หน้าหลัก
            </Link>
          </li>,
          <li className="nav-item" key={1}>
            <Post />
          </li>,
          <li className="nav-item" key={2}>
            <Link to="/car" className="nav-link">
              รถทั้งหมด
            </Link>
          </li>,
          // <li className="nav-item" kery={2}>
          //   <Post />
          // </li>,
          // <li className="nav-item" kery={2}>
          //   <Link to="/test2" className="nav-link">
          //     Test
          //   </Link>
          // </li>,
        ];
      } else {
        //ถ้าเป็นผู้ใช้งานประเภทผู้ดูแลปกติ จะแสดงทุกเมนู
        return [
          <li className="nav-item text-center" key={0}>
            <Link to="/" className="nav-link">
              <i className="fa fa-home" /> หน้าหลัก
            </Link>
          </li>,
          <li className="nav-item" key={1}>
            <Post />
          </li>,
          <li className="nav-item" key={2}>
            <Link to="/car" className="nav-link">
              รถทั้งหมด
            </Link>
          </li>,
          <li className="nav-item" key={3}>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <span>สำหรับผู้ดูแล</span>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem className="noti-title" header tag="div">
                  <h6 className="text-overflow m-0">Dashbord</h6>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem to="/dashbord_user" tag={Link}>
                  <span className="drop">
                    <MDBIcon icon="user-cog" /> ข้อมูลผู้ใช้งาน
                  </span>
                </DropdownItem>
                <DropdownItem to="/dashbord_car" tag={Link}>
                  <span className="drop">
                    <MDBIcon icon="car" /> ข้อมูลรถทั้งหมด
                  </span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </li>,
          // <li className="nav-item" kery={2}>
          //   <Link to="/test2" className="nav-link">
          //     Test
          //   </Link>
          // </li>,
        ];
      }
    } else {
      //ถ้ายังไม่ได้ทำการ Signin จะแสดงเมนูเดียวเท่านั้น
      return [
        // alert("กรุณาเข้าสู่ระบบ..."),
        <li className="nav-item text-center" key={0}>
          <Link to="/" className="nav-link">
            <i className="fa fa-home" /> หน้าหลัก
          </Link>
        </li>,
        <li className="nav-item" key={1}>
          <Button className="nav-item" color="yellow" size="sm-1" to="/">
            โพสขายรถ{" "}
            <MDBIcon icon="hand-pointer" className="animated flash infinite" />
          </Button>
        </li>,
        <li className="nav-item" key={2}>
          <Link to="/" className="nav-link">
            รถทั้งหมด
          </Link>
        </li>,
      ];
    }
  }

  renderProfile() {
    //ตรวจสอบจาก reducer authReducers.js ที่เราได้ map ไว้ด้านล่างครับ
    //โดยเช็คว่าถ้าหากมีการ signin ก็จะแสดงเมนูตามเงื่อนไข
    if (this.props.authentication) {
      return [
        <li className="nav-item" key={4}>
          <Link to="/profile" className="nav-link">
            <img
              style={{ width: 25, height: 20 }}
              src={this.props.data.image}
              className="img-fluid rounded-circle hoverable shadow-box-example z-depth-2"
              alt=""
            />{" "}
            {this.props.data.username}
          </Link>
        </li>,
        <li className="nav-item" key={6}>
          <Link to="/signout" className="nav-link">
            Logout <MDBIcon icon="sign-out-alt" style={{ color: "red" }} />
          </Link>
        </li>,
      ];
    } else {
      return [
        <li className="nav-item" key={5}>
          <Link to="/registermember" className="nav-link">
            <MDBIcon icon="user" /> สมัครสมาชิก
          </Link>
        </li>,
        <li className="nav-item" key={6}>
          <Link to="/login" className="nav-link">
            <MDBIcon icon="sign-in-alt" /> เข้าสู่ระบบ
          </Link>
        </li>,
      ];
    }
  }

  render() {
    return (
      <div>
        <Navbar className="navbar-expand-md navbar-dark mb-0 img-thumbnail rounded mx-auto img-fluid z-depth-1">
          <NavbarBrand
            to="/"
            className="py-0 font-weight-bold animated flash border"
            tag={Link}
          >
            <img
              src="/img/logo3.png"
              style={{ height: "3rem", width: "4rem" }}
              alt="Logo"
            />
            <strong className="align-middle">Speed Car</strong>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse className="nav nav-start" isOpen={this.state.isOpen} navbar>
            <ul className="navbar-nav">{this.renderLinks()}</ul>
          </Collapse>
          <Collapse className="nav nav-end" isOpen={this.state.isOpen} navbar>
            <ul className="navbar-nav item">{this.renderProfile()}</ul>
          </Collapse>
        </Navbar>
      </div>
    );
  }

  handleDetail = (id) => {
    browserHistory.push(`/profile/${id}`);
  };
}

//authentication เช็คว่าเป็น true หรือ false
//data ตัวนี้จะได้ข้อมูล PAYLOAD จาก token ครับ
//ทั้งหมดทั้งมวลเราจัดการมาตั้งแต่ action, reducer แล้วครับ
function mapStateToProps(state) {
  return {
    authentication: state.authReducers.authenticated,
    data: state.authReducers.data,
  };
}

export default connect(mapStateToProps)(Header);
