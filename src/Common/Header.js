import React from "react";
import { Link, Route } from "react-router-dom";
import "./Header.css";
import { Logout } from "./Users/Logout";

export const Header = props => {
  return (
    <div className="header">
      <span>Financial Planner</span>
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
    </div>
  );
};

export const LoginHeader = () => {
  return (
    <div className="header">
      <span>Financial Planner</span>
      <span>
        <Link to="/">Login</Link>
      </span>
      <span>
        <Link to="/signup">Signup</Link>
      </span>
    </div>
  );
};
