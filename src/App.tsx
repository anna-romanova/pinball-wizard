import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import PinballWizardRoutes from "./routes";
import Drawer from "./Drawer";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Drawer />
          <PinballWizardRoutes />
        </Router>
      </div>
    )
  }
}

export default App;