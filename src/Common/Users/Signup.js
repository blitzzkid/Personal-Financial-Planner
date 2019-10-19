import React from "react";
import axios from "axios";

export class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      hasSignedUp: false,
      profileCreated: false
    };
  }
  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  };

  signupHandler = () => {
    const url = "http://localhost:3000/users/new";
    axios
      .post(
        url,
        {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          username: this.state.username,
          password: this.state.password
        },
        { withCredentials: true }
      )
      .then(res => {
        this.createUserProfile();
        this.setState({ hasSignedUp: true });
      })
      .catch(err => console.error(err));
  };
  createUserProfile = () => {
    const url = "http://localhost:3000/profiles/new";
    axios
      .post(
        url,
        {
          username: this.state.username,
          birthYear: 0,
          retirementAge: 0,
          passingAge: 0,
          retirementIncome: 0,
          interestRate: 0
        },
        { withCredentials: true }
      )
      .then(res => {
        this.setState({ profileCreated: true });
      })
      .catch(err => console.error(err));
  };

  render() {
    return (
      <div>
        <h1>New User Signup</h1>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            onChange={this.handleInputChange}
          ></input>
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            onChange={this.handleInputChange}
          ></input>
        </label>
        <label>
          Username:
          <input
            type="text"
            name="username"
            onChange={this.handleInputChange}
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
        <button onClick={this.signupHandler}>Signup</button>
        <p>
          Your signup is{" "}
          {this.state.hasSignedUp ? "successful" : "unsuccessful"}
        </p>
        <p>
          Your profile is{" "}
          {this.state.profileCreated ? "created" : "not created"}
        </p>
      </div>
    );
  }
}
