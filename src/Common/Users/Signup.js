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
      hasSignedUp: false
    };
  }

  inputFirstName = event => {
    this.setState({ firstName: event.target.value });
  };
  inputLastName = event => {
    this.setState({ lastName: event.target.value });
  };
  inputUsername = event => {
    this.setState({ username: event.target.value });
  };
  inputPassword = event => {
    this.setState({ password: event.target.value });
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
        this.setState({ hasSignedUp: true });
      })
      .catch(err => console.error(err));
  };

  render() {
    return (
      <div>
        <h1>New User Signup</h1>
        <label>
          First Name:
          <input type="text" onChange={this.inputFirstName}></input>
        </label>
        <label>
          Last Name:
          <input type="text" onChange={this.inputLastName}></input>
        </label>
        <label>
          Username:
          <input type="text" onChange={this.inputUsername}></input>
        </label>
        <label>
          Password:
          <input type="password" onChange={this.inputPassword}></input>
        </label>
        <button onClick={this.signupHandler}>Signup</button>
        <p>Your signup is  {this.state.hasSignedUp ? "successful" : "unsuccessful"}</p>
      </div>
    );
  }
}
