import React from "react";
import axios from "axios";
import "./Login.css";
import { Link, BrowserRouter } from "react-router-dom";
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
      <div className="loginForm">
        <div className="loginForm__container">
          <div className="loginForm__heading">Log in to FarmHome</div>
          <div className="loginForm__content">
            <label className="loginForm__label">
              Username:
              <div>
                <input
                  className="loginForm__input"
                  type="text"
                  name="username"
                  aria-label="username"
                  value={this.props.username}
                  onChange={this.onUsernameChange}
                ></input>
              </div>
            </label>
            <label className="loginForm__label">
              Password:
              <div>
                <input
                  className="loginForm__input"
                  type="password"
                  name="password"
                  aria-label="password"
                  value={this.state.password}
                  onChange={this.onPasswordChange}
                ></input>
              </div>
            </label>
            <button
              onClick={this.loginHandler}
              className="loginForm__loginButton"
            >
              Log In
            </button>
            <div>
              Don't have an account? Sign up{" "}
              <BrowserRouter>
                <Link to="/signup" className="loginForm__link">
                  here
                </Link>
              </BrowserRouter>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
