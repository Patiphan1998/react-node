import React from "react";
import "../../../css/style.css";
import { MDBIcon, MDBAnimation } from "mdbreact";

export default function Service() {
  return (
    <div>
      {/* Service Start */}
      <div className="service border rounded-pill mb-0 rounded z-depth-1">
        <div className="container-fluid">
          <div className="row d-block">
            <MDBAnimation type="bounce" infinite>
              <h1>
                <MDBIcon icon="car-side" /> ยินดีให้บริการ
              </h1>
            </MDBAnimation>
          </div>
        </div>
      </div>
      {/* Service End */}
    </div>
  );
}
