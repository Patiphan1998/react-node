import React from "react";
import "../../../css/style.css";
import { Link } from "react-router";
import SearchBar from "../../../Utils/searchBar";
import { debounce } from "lodash";

export default function ButtomBar() {
  //debounce เป็นการหน่วงการส่งตัวอักษรเป็นฟังก์ชันของ lodash ทำเพื่อเรียกใช้การ filter ข้อมูล
  const carSearch = debounce((term) => {
    this.handleSearch(term);
  }, 500);
  return (
    <div>
      {/* Bottom Bar Start */}
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
      {/* Bottom Bar End */}
    </div>
  );
}
