import React from "react";
import { Login } from "./Login";
import { Signup } from "./Signup";
import { Logout } from "./Logout";

export class User extends React.Component {
  constructor() {
    super();
    this.state = {
      username: ""
    };
  }
  render() {
    return (
      <div>
        <Signup />
        <Login username={this.state.username} />
        <Logout />
      </div>
    );
  }
}
