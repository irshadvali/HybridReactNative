import React, { Component } from "react";
import "./FirstPage.css";

class FirstPage extends Component {
  handleClick = () => {
    window.postMessage(
      "Sent data from Web First Page to Native, alert in Native"
    );
  };
  render() {
    return (
      <div className="Test">
        <p> FirstPage </p>
        <button onClick={this.handleClick}>Go to second page</button>
      </div>
    );
  }
}

export default FirstPage;
