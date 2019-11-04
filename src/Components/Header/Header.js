import React from "react";
import { Link, Route } from "react-router-dom";
import "./Header.css";
import { Logout } from "../Logout/Logout";

export const Header = props => {
  return (
    <header className="header">
      <span className="farmhome">FarmHome</span>
      <span className="user">
        <span>
          <Link to="/retirement">Retirement</Link>
        </span>
        <span>
          <Link to="/profile">Profile</Link>
        </span>
        <span>
          <Route exact path="/logout">
            <Logout
              handleUsernameChange={props.handleUsernameChange}
              handleUserLogin={props.handleUserLogin}
            />
          </Route>
        </span>
      </span>
    </header>
  );
};

export const LoginHeader = () => {
  return (
    <header className="login-header">
      <h1>FarmHome</h1>
      <span>
        <Link to="/signup">Signup</Link>
      </span>
    </header>
  );
};
