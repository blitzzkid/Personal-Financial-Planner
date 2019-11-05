import React from "react";
import axios from "axios";
import "./ProfilePage.css";

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
      const url = `https://financial-retirement-planner.herokuapp.com/profiles/${this.props.username}`;
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
    const url = `https://financial-retirement-planner.herokuapp.com/profiles/${this.props.username}`;
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
    const url = "https://financial-retirement-planner.herokuapp.com/users/";
    axios
      .delete(url, { withCredentials: true })
      .then(res => {
        this.deleteUserProfile();
        this.setState({ isDeleted: true });
      })
      .catch(err => console.error(err));
  };
  deleteUserProfile = () => {
    const url = "https://financial-retirement-planner.herokuapp.com/profiles/";
    axios
      .delete(url, { withCredentials: true })
      .then(res => {
        this.setState({ isDeleted: true });
        this.props.handleUserLogin(false);
      })
      .catch(err => console.error(err));
  };

  render() {
    return (
      <div>
        <div className="profilePage">
          <div className="profilePage__div">
            <h2 className="profilePage__heading">Knowing more about you</h2>
            <label htmlFor="current-age" className="input__label">
              What year were you born in?
            </label>
            <input
              required
              type="number"
              min="1"
              max="130"
              id="current-age"
              aria-label="current-age"
              name="birthYear"
              className="input__text"
              value={this.state.birthYear}
              onChange={this.handleInputChange}
            />
            <label htmlFor="retirement-age" className="input__label">
              At what age do you plan to retire? (in years)
            </label>
            <input
              required
              type="number"
              min="1"
              max="130"
              id="retirement-age"
              aria-label="retirement-age"
              name="retirementAge"
              className="input__text"
              value={this.state.retirementAge}
              onChange={this.handleInputChange}
            />
            <label htmlFor="passing-age" className="input__label">
              How old do you expect to live until? (in years)
            </label>
            <input
              required
              type="number"
              min="1"
              max="130"
              id="passing-age"
              aria-label="passing-age"
              name="passingAge"
              className="input__text"
              value={this.state.passingAge}
              onChange={this.handleInputChange}
            />
            <label htmlFor="retirement-income" className="input__label">
              How much money would you like to have per month during retirement?
              ($ in today's value)
            </label>
            <input
              required
              type="number"
              min="1"
              max="100000"
              id="retirement-income"
              aria-label="retirement-income"
              name="retirementIncome"
              className="input__text"
              value={this.state.retirementIncome}
              onChange={this.handleInputChange}
            />
            <label htmlFor="target-returns" className="input__label">
              What is your targeted annual returns on investment? (in %)
            </label>
            <input
              required
              type="number"
              min="0"
              max="30"
              id="target-returns"
              aria-label="target-returns"
              name="interestRate"
              className="input__text"
              value={this.state.interestRate}
              onChange={this.handleInputChange}
            />
            <section className="profilePage__buttons">
              <button
                onClick={this.updateProfile}
                className="profilePage__saveButton"
              >
                Update Profile
              </button>
              <button
                onClick={this.deleteUserAccount}
                className="profilePage__deleteButton"
              >
                Delete Account
              </button>
            </section>
            <section className="profilePage__remarks">
              {this.state.isUpdated ? "Your update has been successful" : ""}
              {this.state.isDeleted ? "Your account has been deleted" : ""}
            </section>
          </div>
        </div>
      </div>
    );
  }
}
