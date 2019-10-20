import React from "react";
import axios from "axios";

export class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isUpdated: false,
      isDeleted: false
    };
  }
  componentDidMount() {
    if (this.props.username !== "") {
      const url = `http://localhost:3000/profiles/${this.props.username}`;
      axios
        .get(url, { withCredentials: true })
        .then(res => {
          this.setState({
            birthYear: res.data[0].birthYear,
            retirementAge: res.data[0].retirementAge,
            passingAge: res.data[0].passingAge,
            retirementIncome: res.data[0].retirementIncome,
            interestRate: res.data[0].interestRate
          });
        })
        .catch(err => console.error(err));
    }
  }

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  updateProfile = () => {
    const url = `http://localhost:3000/profiles/${this.props.username}`;
    axios
      .put(
        url,
        {
          username: this.props.username,
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
  deleteUserAccount = () => {
    const url = `http://localhost:3000/users/delete/${this.props.username}`;
    axios
      .delete(url, { withCredentials: true })
      .then(res => {
        this.deleteUserProfile();
        this.setState({ isDeleted: true });
      })
      .catch(err => console.error(err));
  };
  deleteUserProfile = () => {
    const url = `http://localhost:3000/profiles/delete/${this.props.username}`;
    axios
      .delete(url, { withCredentials: true })
      .then(res => {
        this.setState({ isDeleted: true });
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
              name="birthYear"
              value={this.state.birthYear}
              onChange={this.handleInputChange}
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
              name="retirementAge"
              value={this.state.retirementAge}
              onChange={this.handleInputChange}
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
            name="passingAge"
            value={this.state.passingAge}
            onChange={this.handleInputChange}
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
              name="retirementIncome"
              value={this.state.retirementIncome}
              onChange={this.handleInputChange}
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
              name="interestRate"
              value={this.state.interestRate}
              onChange={this.handleInputChange}
            />
            <span> % </span>
          </p>
          <button onClick={this.updateProfile}>Save</button>
          <button onClick={this.deleteUserAccount}>Delete Account</button>
          <p>
            Your update is
            {this.state.isUpdated ? " successful" : " unsuccessful"}
          </p>
          <p>
            Your account is{" "}
            {this.state.isDeleted ? " deleted" : " still in use"}
          </p>
        </div>
      </div>
    );
  }
}
