import React, { Component } from "react";
import { debounce } from "lodash";
import SearchBar from "../../Utils/searchBar";
//ใช้ความสามารถของ browserHistory ในการสั่งเปลี่ยน url ไปยังเพจที่ต้องการ
import { browserHistory } from "react-router";
import { MDBBreadcrumb, MDBBreadcrumbItem } from "mdbreact";
import TopBar from "../Home/components/TopBar";
import Footer from "../Home/components/Footer";
import { Link } from "react-router";

export default function FavoriteCarPage() {
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
        <MDBBreadcrumbItem active onClick={browserHistory.goBack}>
          รถทั้งหมด
        </MDBBreadcrumbItem>
      </MDBBreadcrumb>
      {/* Breadcrumb End */}
      {/* Wishlist Start */}
      <div className="wishlist-page">
        <div className="container-fluid">
          <div className="wishlist-page-inner">
            <div className="row">
              <div className="col-md-12">
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead className="thead-dark">
                      <tr>
                        <th>รถยนต์</th>
                        <th>ราคา</th>
                        <th>ดูรายละเอียดรถ</th>
                        <th>ลบ</th>
                      </tr>
                    </thead>
                    <tbody className="align-middle">
                      <tr>
                        <td>
                          <div className="img">
                            <a href="#">
                              <img src="img/31.jpg" alt="Image" />
                            </a>
                            <p>Product Name</p>
                          </div>
                        </td>
                        <td>$99</td>
                        <td>
                          <button className="btn-cart">ดูรายละเอียดรถ</button>
                        </td>
                        <td>
                          <button>
                            <i className="fa fa-trash" />
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="img">
                            <a href="#">
                              <img src="img/21.jpg" alt="Image" />
                            </a>
                            <p>Product Name</p>
                          </div>
                        </td>
                        <td>$99</td>
                        <td>
                          <button className="btn-cart">ดูรายละเอียดรถ</button>
                        </td>
                        <td>
                          <button>
                            <i className="fa fa-trash" />
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="img">
                            <a href="#">
                              <img src="img/1.jpg" alt="Image" />
                            </a>
                            <p>Product Name</p>
                          </div>
                        </td>
                        <td>$99</td>
                        <td>
                          <button className="btn-cart">ดูรายละเอียดรถ</button>
                        </td>
                        <td>
                          <button>
                            <i className="fa fa-trash" />
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="img">
                            <a href="#">
                              <img src="img/321.jpg" alt="Image" />
                            </a>
                            <p>Product Name</p>
                          </div>
                        </td>
                        <td>$99</td>
                        <td>
                          <button className="btn-cart">ดูรายละเอียดรถ</button>
                        </td>
                        <td>
                          <button>
                            <i className="fa fa-trash" />
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="img">
                            <a href="#">
                              <img src="img/22.jpg" alt="Image" />
                            </a>
                            <p>Product Name</p>
                          </div>
                        </td>
                        <td>$99</td>
                        <td>
                          <button className="btn-cart">ดูรายละเอียดรถ</button>
                        </td>
                        <td>
                          <button>
                            <i className="fa fa-trash" />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Wishlist End */}
      <Footer />
    </div>
  );
}
