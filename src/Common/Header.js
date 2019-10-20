import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="Header">
      <Link to="/">Login</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/retirement">retirement</Link>
      <Link to="/profile">profile page</Link>
      <Link to="/logout">logout</Link>
    </div>
  );
};