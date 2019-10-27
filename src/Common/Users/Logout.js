import React from "react";
import axios from "axios";
import "./Login.css"

export class Logout extends React.Component {
  logoutHandler = () => {
    const url =
      "https://financial-retirement-planner.herokuapp.com/users/logout";
    axios
      .post(url, {}, { withCredentials: true })
      .then(res => {
        this.props.handleUsernameChange();
        this.props.handleUserLogin(false);
      })
      .catch(err => console.error(err));
  };

  render() {
    return (
      <div>
        <button onClick={this.logoutHandler} className="logout-button">Logout</button>
      </div>
    );
  }
}
