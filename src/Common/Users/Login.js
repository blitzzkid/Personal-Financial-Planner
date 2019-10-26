import React from "react";
import axios from "axios";
import "./Login.css";
export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ""
    };
  }
  onUsernameChange = event => {
    this.props.handleUsernameChange(event.target.value);
  };
  onPasswordChange = event => {
    this.setState({
      password: event.target.value
    });
  };

  loginHandler = () => {
    const url =
      "https://financial-retirement-planner.herokuapp.com/users/login";
    axios
      .post(
        url,
        {
          username: this.props.username,
          password: this.state.password
        },
        { withCredentials: true }
      )
      .then(res => {
        this.props.handleUserLogin(true);
        this.setState({ password: "" });
      })
      .catch(err => {
        console.error(err);
        this.props.handleUserLogin(false);
      });
  };

  render() {
    return (
      <div className="login-form">
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={this.props.username}
            onChange={this.onUsernameChange}
          ></input>
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.onPasswordChange}
          ></input>
        </label>
        <button onClick={this.loginHandler}>Login</button>
      </div>
    );
  }
}
