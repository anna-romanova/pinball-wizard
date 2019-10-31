import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import PinballWizardRoutes from "./routes";

class App extends Component {
  render() {
    return (
      <Router>
        <PinballWizardRoutes />
      </Router>
    )
  }
}

export default App;