import React, { Component } from "react";
import "../../css/style.css";
import TopBar from "./components/TopBar";
import ButtomBar from "./components/ButtomBar";
import Feature from "./components/Feature";
import Featured from "./components/Featured";
import Slider from "./components/Header";
import Recent from "./components/Recent";
import Footer from "./components/Footer";
import Review from "./components/Review";
import Logo from "./components/SearchLogo";
import NewIncoming from "./components/NewIncoming";
import Service from "./components/Service";
import Special from "./components/Special";
import Test from "./components/test";

import { debounce } from "lodash";
import { loadCars } from "../../redux/actions/carActions";
import { connect } from "react-redux";
import SearchCars from "../../Utils/searchCars";
import "react-slideshow-image/dist/styles.css";
import Carousel from "../Home/components/Carousel";
import Carousel2 from "../Home/components/Carousel2";
class HomePage extends Component {
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
        {/* <div>
          <div className="bottom-bar z-depth-1">
            <div className="container-fluid">
              <div className="row d-flex justify-content-between">
                <div className="text-left">
                  <SearchBar
                    onSearchTermChange={carSearch}
                    placeholder="ค้นหา...ยี่ห้อ, รุ่น"
                  />
                </div>
                <div className="text-right">
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
        </div> */}

        <hr color="red" />

        <div>
          {/* Main Slider Start */}
          <div className="header">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-4">
                  <Carousel />
                </div>
                <div class="col-md-4">
                  <SearchCars
                    onSearchTermChange={carSearch}
                    placeholder="ค้นหา...ยี่ห้อ, รุ่น"
                  />
                </div>
                <div className="col-md-4">
                  <Carousel2 />
                </div>
              </div>
            </div>
          </div>
          {/* Main Slider End */}
        </div>

        <NewIncoming />
        <Featured />
        <Recent />
        <Special />
        <Logo />
        <Service />
        <Feature />
        {/* <Review /> */}
        <Footer />
        {/* <Test /> */}
      </div>
    );
  }

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

export default connect(mapStateToProps)(HomePage);
