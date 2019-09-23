import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="housing">Housing</Link>
      <Link to="/retirement">Retirement</Link>
    </div>
  );
};
