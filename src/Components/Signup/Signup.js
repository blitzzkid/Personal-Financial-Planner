import React from "react";
import axios from "axios";
import "./Signup.css";
import { Link } from "react-router-dom";

export class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      password: ""
    };
  }
  onUsernameChange = event => {
    this.props.handleUsernameChange(event.target.value);
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  };

  signupHandler = () => {
    const url = "https://financial-retirement-planner.herokuapp.com/users/new";
    axios
      .post(
        url,
        {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          username: this.props.username,
          password: this.state.password
        },
        { withCredentials: true }
      )
      .then(res => {
        this.createUserProfile();
        this.loginHandler();
      })
      .catch(err => console.error(err));
  };
  createUserProfile = () => {
    const url =
      "https://financial-retirement-planner.herokuapp.com/profiles/new";
    axios
      .post(
        url,
        {
          username: this.props.username,
          birthYear: 0,
          retirementAge: 0,
          passingAge: 0,
          retirementIncome: 0,
          interestRate: 0
        },
        { withCredentials: true }
      )
      .catch(err => console.error(err));
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
      })
      .catch(err => {
        console.error(err);
      });
  };

  render() {
    return (
      <div className="signup">
        <h1>New User Signup</h1>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            onChange={this.handleInputChange}
          ></input>
        </label>
        <div>
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              onChange={this.handleInputChange}
            ></input>
          </label>
        </div>
        <label>
          Username:
          <input
            type="text"
            name="username"
            onChange={this.onUsernameChange}
          ></input>
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            onChange={this.handleInputChange}
          ></input>
        </label>
        <button onClick={this.signupHandler} className="signup-button">
          Signup
        </button>
        <div>
          Already have an account? Log in <Link to="/">here</Link>
        </div>
      </div>
    );
  }
}
