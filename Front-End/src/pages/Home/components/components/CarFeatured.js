import React, { Component } from "react";
import "../../../../css/style.css";
import "react-slideshow-image/dist/styles.css";
import { Link } from "react-router";
import {
  MDBIcon,
  MDBAnimation,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
} from "mdbreact";
import { Card, Row, Col, Badge } from "react-bootstrap";
import { Button } from "reactstrap";

class CarFeatured extends Component {
  state = {
    modal3: false,
  };

  toggle = (nr) => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber],
    });
  };

  render() {
    //Destructuring ค่า props ที่ส่งมาจาก src/pages/Car.js
    const { data, buttonDetail } = this.props;

    return (
      <div className="container row feature">
        {data &&
          data.map((e) => {
            if (e.id_type == 1) {
              return (
                <div
                  className="feature-row feature-col border mb-0 img-thumbnail rounded mx-auto d-block img-fluid z-depth-1"
                  id="main1"
                  key={e.id}
                >
                  <div className="row-12">
                    <div className="product-item">
                      <Link onClick={() => buttonDetail(e.id)}>
                        <div className="product-title">
                          <a href="">
                            {e.year} {e.brand} {e.generation} {e.car_makeover}
                          </a>
                        </div>
                        <div className="product-image">
                          <a href="">
                            <img src={e.image1} alt="Product Image" />
                          </a>
                        </div>

                        <div className="product-price">
                          <div className="text-center">
                            <h5>ราคา {e.price} บาท</h5>
                          </div>
                          <div className="text-center">
                            <a href="" className="btn wishlist">
                              ดูรายละเอียด
                            </a>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }
          })}
      </div>
    );
  }
}
export default CarFeatured;
