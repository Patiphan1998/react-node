import React from "react";
import "../../../css/style.css";
import "react-slideshow-image/dist/styles.css";
import SearchCars from "./SearchCars";
import Carousel from "./Carousel";

export default function Header() {
  return (
    <div>
      {/* Main Slider Start */}
      <div className="header">
        <div className="container-fluid">
          <div className="row">
            <div class="col-md-6">
              <SearchCars />
            </div>
            <div className="col-md-6">
              <Carousel />
            </div>
          </div>
        </div>
      </div>
      {/* Main Slider End */}
    </div>
  );
}
