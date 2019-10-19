import React from "react";
import { Login } from "./Login";
import { Signup } from "./Signup";

export class Users extends React.Component {
  render() {
    return (
      <div>
        <Signup />
        <Login />
      </div>
    );
  }
}
