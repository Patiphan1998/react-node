import React, { Component } from "react";
import { debounce } from "lodash";
import { connect } from "react-redux";
import { loadCars } from "../../redux/actions/carActions";
import SearchBar from "../../Utils/searchBar";
import Mazda from "./components/Mazda";
//ใช้ความสามารถของ browserHistory ในการสั่งเปลี่ยน url ไปยังเพจที่ต้องการ
import { browserHistory } from "react-router";
import { MDBBreadcrumb, MDBBreadcrumbItem } from "mdbreact";
import TopBar from "../Home/components/TopBar";
import Footer from "../Home/components/Footer";
import { Link } from "react-router";

class MazdaDetail extends Component {
  //มีการใช้ Modal ของ reactstrap ซึ่งจะต้องเก็บ State การแสดง modal ไว้
  state = {
    modal: false,
    modalTitle: "",
  };

  //สั่ง dispach ฟังก์ชัน cars ดึงเอาข้อมูลรายชื่อรถ
  componentDidMount() {
    this.props.dispatch(loadCars());
  }

  render() {
    const { cars } = this.props;

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
        {/* Bottom Bar Start */}
        <div className="bottom-bar">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="search">
                  <SearchBar
                    onSearchTermChange={carSearch}
                    placeholder="ค้นหา...ยี่ห้อ, รุ่น"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="user">
                  <Link to="/favoritecar" className="btn wishlist">
                    <i className="fa fa-heart" />
                    <span>(0)</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Bar End */}

        <hr color="red" />

        {/* Breadcrumb Start */}
        <MDBBreadcrumb>
          <MDBBreadcrumbItem>หน้าหลัก</MDBBreadcrumbItem>
          <MDBBreadcrumbItem active>รถทั้งหมด</MDBBreadcrumbItem>
        </MDBBreadcrumb>
        {/* Breadcrumb End */}

        {/* Service Start */}
        <div className="service">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <h1>รถ MAZDA ของทางเว็บไซต์</h1>
              </div>
            </div>
          </div>
        </div>
        {/* Service End */}

        {/* แสดงข้อความ Loading ก่อน */}
        {cars.isLoading && (
          <div className="spinner-border text-warning" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        )}

        <div className="row-12">
          {/* Component CarDetail จะส่ง props ไป 4 ตัว */}
          <Mazda
            data={cars.data}
            buttonDetail={this.handleDetail}
          />
        </div>

        <hr color="black" />

        <Footer />
      </div>
    );
  }

  //ฟังก์ชันแสดงหน้าจอรายละเอียดงานซ่อม
  //โดยใช้ browserHistory สั่งเปลี่ยนไปยัง route ที่ต้องการ
  handleDetail = (id) => {
    browserHistory.push(`/showcar/detail/${id}`);
  };

  //ฟังก์ชัน filter ข้อมูล
  handleSearch = (term) => {
    this.props.dispatch(loadCars(term));
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

export default connect(mapStateToProps)(MazdaDetail);
