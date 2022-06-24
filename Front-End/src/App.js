import React, { Component } from "react";
import NavBar from "./components/NavBar/NavBar";
import ScrollTopArrow from "./ScrollTopArrow";
import Footer from "./components/Footer/Footer";
class App extends Component {
  render() {
    return (
      <div className="container">
        <ScrollTopArrow />
        <NavBar />
        <div className="container-flud">
          <div className="content">{this.props.children}</div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
