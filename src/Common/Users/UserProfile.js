import React from "react";
import axios from "axios";

export class UserProfile extends React.Component {
  constructor() {
    super();
    this.state = {
      birthYear: 0,
      retirementAge: 0,
      passingAge: 0,
      retirementIncome: 0,
      interestRate: 0,
      isUpdated: false
    };
  }
  inputBirthYear = event => {
    this.setState({ birthYear: event.target.value });
  };
  inputRetirementAge = event => {
    this.setState({ retirementAge: event.target.value });
  };
  inputPassingAge = event => {
    this.setState({ passingAge: event.target.value });
  };
  inputRetirementIncome = event => {
    this.setState({ retirementIncome: event.target.value });
  };
  inputInterestRate = event => {
    this.setState({ interestRate: event.target.value });
  };
  updateProfile = () => {
    const username = "user125";
    const url = `http://localhost:3000/profiles/${username}`;
    axios
      .put(
        url,
        {
          username: username,
          birthYear: this.state.birthYear,
          retirementAge: this.state.retirementAge,
          passingAge: this.state.passingAge,
          retirementIncome: this.state.retirementIncome,
          interestRate: this.state.interestRate
        },
        { withCredentials: true }
      )
      .then(res => {
        this.setState({ isUpdated: true });
      })
      .catch(err => console.error(err));
  };

  render() {
    return (
      <div>
        <div className="questionnaire">
          <h2>Knowing more about you</h2>
          <p>
            <label htmlFor="current-age">What year were you born in?</label>
            <br />
            <input
              required
              type="number"
              min="1"
              max="130"
              id="current-age"
              aria-label="current-age"
              onChange={this.inputBirthYear}
            />
            <span> years old</span>
          </p>
          <p>
            <label htmlFor="retirement-age">
              At what age do you plan to retire?
            </label>
            <br />
            <input
              required
              type="number"
              min="1"
              max="130"
              id="retirement-age"
              aria-label="retirement-age"
              onChange={this.inputRetirementAge}
            />
            <span> years old</span>
          </p>
          <label htmlFor="passing-age">
            How old do you expect to live until?
          </label>
          <br />
          <input
            required
            type="number"
            min="1"
            max="130"
            id="passing-age"
            aria-label="passing-age"
            onChange={this.inputPassingAge}
          />
          <span> years old</span>
          <p>
            <label htmlFor="retirement-income">
              How much money would you like to have per month during retirement?
            </label>
            <br />
            <input
              required
              type="number"
              min="1"
              max="100000"
              id="retirement-income"
              aria-label="retirement-income"
              onChange={this.inputRetirementIncome}
            />
            <span> ($ in today's value)</span>
          </p>
          <p>
            <label htmlFor="target-returns">
              What is your targeted annual returns on investment?
            </label>
            <br />
            <input
              required
              type="number"
              min="0"
              max="30"
              id="target-returns"
              aria-label="target-returns"
              onChange={this.inputInterestRate}
            />
            <span> % </span>
          </p>
          <button onClick={this.updateProfile}>Save</button>
          <p>
            Your update is{" "}
            {this.state.isUpdated ? "successful" : "unsuccessful"}
          </p>
        </div>
      </div>
    );
  }
}
