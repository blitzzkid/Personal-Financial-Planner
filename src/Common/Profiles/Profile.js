import React from "react";
import { RetirementPlanner } from "../../Components/RetirementPlanner/RetirementPlanner";
import { ProfilePage } from "./ProfilePage";
import axios from "axios";

export class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.username
    };
  }
  componentDidMount() {
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

  render() {
    return (
      <div>
        <RetirementPlanner />
        <ProfilePage
          username={this.state.username}
          birthYear={this.state.birthYear}
          retirementAge={this.state.retirementAge}
          passingAge={this.state.passingAge}
          retirementIncome={this.state.retirementIncome}
          interestRate={this.state.interestRate}
        />
      </div>
    );
  }
}
