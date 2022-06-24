import React from "react";
import { MDBAnimation } from "mdbreact";
import "../../../css/style.css";
import { Link } from "react-router";
//ใช้ความสามารถของ browserHistory ในการสั่งเปลี่ยน url ไปยังเพจที่ต้องการ
import { browserHistory } from "react-router";

class SearchLogo extends React.Component {
  render() {
    return (
      <div className="searchlogo border border-warning rounded mx-auto img-fluid z-depth-1">
        <div className="container-fluid">
          <h1 className="animated bounce" style={{ color: "#fb8c00" }}>
            ค้นหารถด้วยโลโก้
          </h1>
          <div className="row">
            <Link onClick={() => browserHistory.push(`/car/detail/toyota`)}>
              <MDBAnimation
                type="flash"
                className="overlay zoom example hoverable searchlogo-col"
              >
                <img
                  className="mb-0 img-thumbnail rounded mx-auto d-block img-fluid z-depth-1"
                  src="/images/Toyota.jpg"
                />
              </MDBAnimation>
            </Link>
            <Link onClick={() => browserHistory.push(`/car/detail/mazda`)}>
              <MDBAnimation
                type="rubberBand"
                className="overlay zoom example hoverable searchlogo-col"
              >
                <img
                  className="mb-0 img-thumbnail rounded mx-auto d-block img-fluid z-depth-1"
                  src="/images/Mazda.jpg"
                />
              </MDBAnimation>
            </Link>
            <Link onClick={() => browserHistory.push(`/car/detail/honda`)}>
              <MDBAnimation
                type="shake"
                className="overlay zoom example hoverable imglogo searchlogo-col"
              >
                <img
                  className="mb-0 img-thumbnail rounded mx-auto d-block img-fluid z-depth-1"
                  src="/images/Honda.jpg"
                />
              </MDBAnimation>
            </Link>
            <Link onClick={() => browserHistory.push(`/car/detail/${2}`)}>
              <MDBAnimation
                type="swing"
                className="overlay zoom example hoverable imglogo searchlogo-col"
              >
                <img
                  className="mb-0 img-thumbnail rounded mx-auto d-block img-fluid z-depth-1"
                  src="/images/Chevrolet.jpg"
                />
              </MDBAnimation>
            </Link>
            <Link onClick={() => browserHistory.push(`/car/detail/${2}`)}>
              <MDBAnimation
                type="tada"
                className="overlay zoom example hoverable imglogo searchlogo-col"
              >
                <img
                  className="mb-0 img-thumbnail rounded mx-auto d-block img-fluid z-depth-1"
                  src="/images/Nissan.jpg"
                />
              </MDBAnimation>
            </Link>
            <Link onClick={() => browserHistory.push(`/car/detail/${2}`)}>
              <MDBAnimation
                type="wobble"
                className="overlay zoom example hoverable imglogo searchlogo-col"
              >
                <img
                  className="mb-0 img-thumbnail rounded mx-auto d-block img-fluid z-depth-1"
                  src="/images/Mitsubishi.jpg"
                />
              </MDBAnimation>
            </Link>
            <Link onClick={() => browserHistory.push(`/car/detail/${2}`)}>
              <MDBAnimation
                type="jello"
                className="overlay zoom example hoverable imglogo searchlogo-col"
              >
                <img
                  className="mb-0 img-thumbnail rounded mx-auto d-block img-fluid z-depth-1"
                  src="/images/Benz.jpg"
                />
              </MDBAnimation>
            </Link>
            <Link onClick={() => browserHistory.push(`/car/detail/${2}`)}>
              <MDBAnimation
                type="rollIn"
                className="overlay zoom example hoverable imglogo searchlogo-col"
              >
                <img
                  className="mb-0 img-thumbnail rounded mx-auto d-block img-fluid z-depth-1"
                  src="/images/Suzuki.jpg"
                />
              </MDBAnimation>
            </Link>
            <Link onClick={() => browserHistory.push(`/car/detail/${2}`)}>
              <MDBAnimation
                type="bounceIn"
                className="overlay zoom example hoverable imglogo searchlogo-col"
              >
                <img
                  className="img-thumbnail rounded mx-auto d-block img-fluid z-depth-1"
                  src="/images/tata.jpg"
                />
              </MDBAnimation>
            </Link>
            <Link onClick={() => browserHistory.push(`/car/detail/${2}`)}>
              <MDBAnimation
                type="bounceInDown"
                className="overlay zoom example hoverable imglogo searchlogo-col"
              >
                <img
                  className="mb-0 img-thumbnail rounded mx-auto d-block img-fluid z-depth-1"
                  src="/images/Lamborghini.jpg"
                />
              </MDBAnimation>
            </Link>
            <Link onClick={() => browserHistory.push(`/car/detail/${2}`)}>
              <MDBAnimation
                type="fadeInRightBig"
                className="overlay zoom example hoverable imglogo searchlogo-col"
              >
                <img
                  className="mb-0 img-thumbnail rounded mx-auto d-block img-fluid z-depth-1"
                  src="/images/VOLKSWAGEN.jpg"
                />
              </MDBAnimation>
            </Link>
            <Link onClick={() => browserHistory.push(`/car/detail/${2}`)}>
              <MDBAnimation
                type="bounceInUp"
                className="overlay zoom example hoverable imglogo searchlogo-col"
              >
                <img
                  className="mb-0 img-thumbnail rounded mx-auto d-block img-fluid z-depth-1"
                  src="/images/VOLVO.jpg"
                />
              </MDBAnimation>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default SearchLogo;
