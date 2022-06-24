import React, { Component } from "react";
import "../../css/style.css";

class Footer extends Component {
  render() {
    return (
      <div>
        {/* Footer Bottom Start */}
        <div className="footer-bottom z-depth-1">
          <div className="container">
            <div className="row">
              <div className="col-md-6 copyright">
                <p>
                  ©
                  <a href="https://web.facebook.com/profile.php?id=100003189863079">
                    Speed Car
                  </a>
                  . All Rights Reserved
                </p>
              </div>
              <div className="col-md-6 template-by">
                <p>
                  <a href="https://web.facebook.com/profile.php?id=100003189863079">
                    Patiphan Developers
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Bottom End */}
      </div>
    );
  }
}

export default Footer;
