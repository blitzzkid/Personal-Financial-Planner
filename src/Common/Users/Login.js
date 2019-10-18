import React from "react";
import axios from "axios";
export class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      username: "",
      password: ""
    };
  }

  inputUsername = event => {
    this.setState({ username: event.target.value });
  };

  inputPassword = event => {
    this.setState({ password: event.target.value });
  };

  loginHandler = () => {
    const url = "http://localhost:3000/users/login";
    axios
      .post(
        url,
        {
          username: this.state.username,
          password: this.state.password
        },
        { withCredentials: true }
      )
      .then(res => {
        this.setState({ isLoggedIn: true });
        this.setState({ username: "" });
        this.setState({ password: "" });
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
        <div className="login-form">
          <label>
            Username:
            <input
              type="text"
              value={this.state.username}
              onChange={this.inputUsername}
            ></input>
          </label>
          <label>
            Password:
            <input
              type="password"
              value={this.state.password}
              onChange={this.inputPassword}
            ></input>
          </label>
          <button onClick={this.loginHandler}>Login</button>
        </div>
        <button onClick={this.logoutHandler}>Logout</button>
        <p>You are logged {this.state.isLoggedIn ? "in" : "out"}</p>
      </div>
    );
  }
}
