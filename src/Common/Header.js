import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <div className="header">
      <span>
        <Link to="/retirement">Retirement</Link>
      </span>
      <span>
        <Link to="/profile">Profile</Link>
      </span>
      <span>
        <Link to="/logout">Logout</Link>
      </span>
    </div>
  );
};

export const LoginHeader = () => {
  return (
    <div className="header">
      <span>
        <Link to="/">Login</Link>
      </span>
      <span>
        <Link to="/signup">Signup</Link>
      </span>
    </div>
  );
}
