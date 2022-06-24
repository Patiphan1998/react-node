import React from "react";
import "../../../css/style.css";
import { Link } from "react-router";

export default function NewIncoming() {
  return (
    <div>
      {/* Feature Start*/}
      <div className="feature">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-6 feature-col">
              <div className="feature-content block-example border border-warning mb-0 img-thumbnail rounded mx-auto d-block img-fluid z-depth-1">
                <Link to="/car" className="NewIncoming">
                  <h2>รถใหม่วันนี้</h2>
                  <p>
                    <h3>4</h3> คัน
                  </p>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 feature-col">
              <div className="feature-content block-example border border-warning mb-0 img-thumbnail rounded mx-auto d-block img-fluid z-depth-1">
                <Link to="/car" className="NewIncoming">
                  <h2>รถใหม่สัปดาห์นี้</h2>
                  <p>
                    <h3>64</h3> คัน
                  </p>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 feature-col">
              <div className="feature-content block-example border border-warning mb-0 img-thumbnail rounded mx-auto d-block img-fluid z-depth-1">
                <Link to="/car" className="NewIncoming">
                  <h2>รถใหม่เดือนนี้</h2>
                  <p>
                    <h3>456</h3> คัน
                  </p>
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 feature-col">
              <div className="feature-content block-example border border-warning mb-0 img-thumbnail rounded mx-auto d-block img-fluid z-depth-1">
                <Link to="/car" className="NewIncoming">
                  <h2>รถทั้งหมด</h2>
                  <p>
                    <h3>2,654</h3> คัน
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Feature End*/}
    </div>
  );
}
