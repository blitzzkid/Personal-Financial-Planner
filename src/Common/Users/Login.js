import React from "react";
import axios from "axios";

export class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    };
  }

  loginHandler = () => {
    const url = "http://localhost:3000/users/login";
    axios
      .post(
        url,
        {
          username: "user126",
          password: "password123"
        },
        { withCredentials: true }
      )
      .then(res => {
        this.setState({ isLoggedIn: true });
      })
      .catch(err => {
        console.error(err);
        this.setState({ isLoggedIn: false });
      });
  };

  logoutHandler = () => {
    const url = "http://localhost:3000/users/logout";
    axios
      .post(url, {}, { withCredentials: true })
      .then(res => {
        this.setState({ isLoggedIn: false });
      })
      .catch(err => console.error(err));
  };

  render() {
    return (
      <div>
        <div className="loginInput">
          <input type="text">Username</input>
          <input type="text">Password</input>
        </div>
        <button onClick={this.loginHandler}>Login</button>
        <button onClick={this.logoutHandler}>Logout</button>
        <p>You are logged {this.state.isLoggedIn ? "in" : "out"}</p>
      </div>
    );
  }
}
