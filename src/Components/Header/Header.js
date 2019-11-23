import React from "react";
import { Link, Route, BrowserRouter } from "react-router-dom";
import "./Header.css";
import { Logout } from "../Logout/Logout";

export const Header = props => {
  return (
    <header className="header">
      <span className="farmhome">FarmHome</span>
      <span className="user">
        <span>
          <Link to="/retirement" className="header__link">
            Retirement
          </Link>
        </span>
        <span>
          <Link to="/profile" className="header__link">
            Profile
          </Link>
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
    <header className="loginHeader">
      <h1>FarmHome</h1>
      <span className="loginHeader__signup">
        <BrowserRouter>
          <Link to="/signup" className="header__link">
            Signup
          </Link>
        </BrowserRouter>
      </span>
    </header>
  );
};
