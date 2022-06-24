import React, { Component } from "react";
import { debounce } from "lodash";
import { connect } from "react-redux";
import { loadCars } from "../../../redux/actions/carActions";
import CarTable from "./components/CarSpecial";
//ใช้ความสามารถของ browserHistory ในการสั่งเปลี่ยน url ไปยังเพจที่ต้องการ
import { browserHistory } from "react-router";
import { MDBIcon } from "mdbreact";
import { Link } from "react-router";

class Special extends Component {
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
        {/* Featured Product Start */}
        <div className="featured-product product">
          <div className="container-fluid">
            <div className="section-header">
              <div className="row">
                <div className="col-md-6 animated zoomIn infinite">
                  <h1>
                    <MDBIcon icon="grin-hearts" /> รถราคาพิเศษ
                  </h1>
                </div>
                <div className="col-md-6">
                  <div className="all">
                    <Link to="/car" className="btn btnf allcars">
                      <span>
                        ดูรถทั้งหมด <MDBIcon icon="angle-double-right" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center product-slider product-slider-4">
              <CarTable data={cars.data} buttonDetail={this.handleDetail} />
            </div>
          </div>
        </div>
        {/* Featured Product End */}

        {/* แสดงข้อความ Loading ก่อน */}
        {cars.isLoading && (
          <div className="spinner-border text-warning" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        )}
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

export default connect(mapStateToProps)(Special);
