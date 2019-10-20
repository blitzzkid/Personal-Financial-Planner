import React from "react";
import axios from "axios";

export class Logout extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedOut: false
    };
  }

  logoutHandler = () => {
    const url = "http://localhost:3000/users/logout";
    axios
      .post(url, {}, { withCredentials: true })
      .then(res => {
        this.setState({ isLoggedOut: true });
        this.props.handleUsernameChange()
      })
      .catch(err => console.error(err));
  };

  render() {
    return (
      <div>
        <button onClick={this.logoutHandler}>Logout</button>
        <p>You are logged {this.state.isLoggedOut ? "out" : "in"}</p>
      </div>
    );
  }
}
