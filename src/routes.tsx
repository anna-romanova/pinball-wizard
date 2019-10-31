import React, { Component } from "react";
import { Route } from "react-router-dom";

const LeaderBoard = () => <h1>Leaderboard</h1>;
const PinballMachines = () => <h1>Pinball Machines</h1>;
const Users = () => <h1>Users</h1>;

class PinballWizardRoutes extends Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={LeaderBoard} />
        <Route path="/pinball_machines" component={PinballMachines} />
        <Route path="/users" component={Users} />
      </React.Fragment>
    )
  }
}

export default PinballWizardRoutes;