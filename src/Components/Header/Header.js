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
          <BrowserRouter>
            <Link to="/retirement" className="header__link">
              Retirement
            </Link>
          </BrowserRouter>
        </span>
        <span>
          <BrowserRouter>
            <Link to="/profile" className="header__link">
              Profile
            </Link>
          </BrowserRouter>
        </span>
        <span>
          <BrowserRouter>
            <Route exact path="/logout">
              <Logout
                handleUsernameChange={props.handleUsernameChange}
                handleUserLogin={props.handleUserLogin}
              />
            </Route>
          </BrowserRouter>
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
