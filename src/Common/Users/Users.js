import React from "react";
import { Login } from "./Login";
import { Signup } from "./Signup";
import { Logout } from "./Logout";

export class Users extends React.Component {
  render() {
    return (
      <div>
        <Signup />
        <Login />
        <Logout />
      </div>
    );
  }
}
