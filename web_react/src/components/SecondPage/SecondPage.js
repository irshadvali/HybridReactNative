import React, { Component } from "react";
import "./SecondPage.css";

class SecondPage extends Component {
  handleClick = () => {
    window.postMessage(
      "Sent data from Web Second Page to Native, alert in Native"
    );
  };
  render() {
    return (
      <div className="Test">
        <p> SecondPage </p>
        <button onClick={this.handleClick}>Go to Home page</button>
      </div>
    );
  }
}

export default SecondPage;
