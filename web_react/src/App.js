import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import FirstPage from "./components/FirstPage/FirstPage";
import SecondPage from "./components/SecondPage/SecondPage";
import Another from "./components/Another/Another";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path={"/home"} component={Home} />
            <Route path={"/firstPage"} component={FirstPage} />
            <Route path={"/secondPage"} component={SecondPage} />
            <Route path={"/anotherPage"} component={Another} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
