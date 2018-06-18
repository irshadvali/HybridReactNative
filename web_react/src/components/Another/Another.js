import React, { Component } from "react";
import "./Another.css";

class Another extends Component {
  handleClick = flag => {
    var mydata2 = {
      page: "Another",
      navgationFlag: flag
    };
    window.postMessage(JSON.stringify(mydata2));
  };
  render() {
    return (
      <div className="Test">
        <p> Another Page </p>
        <button onClick={() => this.handleClick(4)}>Go to home page</button>
        <button onClick={() => this.handleClick(3)}>Go to second page</button>
      </div>
    );
  }
}

export default Another;
