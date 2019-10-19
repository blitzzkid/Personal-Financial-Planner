import React from "react";
import "./App.css";
import { Profile } from "./Common/Profiles/Profile";
import { User } from "./Common/Users/User";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "user126"
    };
  }
  render() {
    return (
      <div>
        <Profile username={this.state.username} />
        <User username={this.state.username} />
      </div>
    );
  }
}
