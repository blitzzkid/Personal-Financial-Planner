import React from "react";
import { RetirementPlanner } from "../../Components/RetirementPlanner/RetirementPlanner";
import { ProfilePage } from "./ProfilePage";

export class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      birthYear: 0,
      retirementAge: 0,
      passingAge: 0,
      retirementIncome: 0,
      interestRate: 0
    };
  }
  render() {
    return (
      <div>
        <RetirementPlanner />
        <ProfilePage
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
