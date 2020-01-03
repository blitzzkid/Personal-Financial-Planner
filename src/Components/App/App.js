import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { Login } from "../Login/Login";
import { Signup } from "../Signup/Signup";
import { ProfilePage } from "../ProfilePage/ProfilePage";
import { RetirementPlanner } from "../RetirementDashboard/RetirementPlanner/RetirementPlanner";
import { Header } from "../Header/Header";
import { LoginHeader } from "../Header/Header";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      isLoggedIn: false
    };
  }
  handleUsernameChange = username => {
    this.setState({
      username
    });
  };
  handleUserLogin = isLoggedIn => {
    this.setState({
      isLoggedIn
    });
  };

  render() {
    if (!this.state.isLoggedIn) {
      return (
        <Router>
          <div>
            <nav>
              <LoginHeader />
            </nav>
            <div>
              <Switch>
                <Route exact path="/">
                  <Login
                    username={this.state.username}
                    handleUsernameChange={this.handleUsernameChange}
                    handleUserLogin={this.handleUserLogin}
                  />
                </Route>
                <Route exact path="/signup">
                  <Signup
                    username={this.state.username}
                    handleUsernameChange={this.handleUsernameChange}
                    handleUserLogin={this.handleUserLogin}
                  />
                </Route>
                <Redirect to="/" />
              </Switch>
            </div>
          </div>
        </Router>
      );
    } else {
      return (
        <Router>
          <div>
            <nav>
              <Header
                handleUsernameChange={this.handleUsernameChange}
                handleUserLogin={this.handleUserLogin}
              />
            </nav>
            <div>
              <Switch>
                <Route exact path="/retirement">
                  <RetirementPlanner username={this.state.username} />
                </Route>
                <Route exact path="/profile">
                  <ProfilePage
                    username={this.state.username}
                    handleUserLogin={this.handleUserLogin}
                  />
                </Route>
                <Redirect to="/retirement" />
              </Switch>
            </div>
          </div>
        </Router>
      );
    }
  }
}
