import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { Home } from "./Common/Home";
import { Header } from "./Common/Header";
import { RetirementPlanner } from "./Components/RetirementPlanner";
import { SavingsPlanner } from "./Components/SavingsPlanner";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <Header />
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/retirement" component={RetirementPlanner} />
          <Route exact path="/savings" component={SavingsPlanner} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}
