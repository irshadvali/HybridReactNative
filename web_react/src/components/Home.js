import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  handleClick = flag => {
    var mydata = {
      page: "Home",
      navgationFlag: flag
    };
    window.postMessage(JSON.stringify(mydata));
    // "Sent data from Web homePage to Native, alert in Native"
  };
  render() {
    return (
      <div className="Test">
        <p> Home Page </p>
        <button onClick={() => this.handleClick(1)}>Go to first page</button>

        <button onClick={() => this.handleClick(2)}>Another</button>
      </div>
    );
  }
}

export default Home;
