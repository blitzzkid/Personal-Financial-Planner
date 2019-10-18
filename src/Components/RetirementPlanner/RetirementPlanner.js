import React from "react";
import { RetirementPlannerForm } from "./RetirementPlannerForm";
import { Chart } from "../Chart";
import { FundsTable } from "../../Common/FundsTable";
import "./RetirementPlanner.css";
import {
  lengthOfWorkingLife,
  calculateRetirementFund,
  calculateSavingsPerYearNotInvested,
  calculateSavingsPerMonthNotInvested,
  calculateSavingsPerYearInvested,
  calculateSavingsPerMonthInvested,
  generateSavingsNotInvestedData,
  generateSavingsInvestedData
} from "./SavingsCalculations";
import { Login } from "../../Common/Users/Login";
import { Signup } from "../../Common/Users/Signup";
import { Profile } from "../../Common/Users/Profile";

export class RetirementPlanner extends React.Component {
  constructor() {
    super();
    this.state = {
      currentAge: 0,
      retirementAge: 0,
      passingAge: 0,
      retirementIncome: 0,
      interestRate: 0.05,
      retirementFund: 0,
      inflationRate: 0.02,
      savingsNotInvestedData: [],
      savingsInvestedData: [],
      savingsPerMonthNotInvested: 0,
      savingsPerMonthInvested: 0
    };
  }
  inputCurrentAge = event => {
    this.setState({ currentAge: event.target.value });
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
    this.setState({ interestRate: event.target.value / 100 });
  };
  calculateRetirementFund = () => {
    const {
      currentAge,
      retirementAge,
      passingAge,
      retirementIncome,
      inflationRate,
      interestRate
    } = this.state;

    const workingLife = lengthOfWorkingLife(currentAge, retirementAge);
    const retirementFund = calculateRetirementFund(
      currentAge,
      retirementAge,
      passingAge,
      retirementIncome,
      inflationRate
    );
    const savingsPerYearNotInvested = calculateSavingsPerYearNotInvested(
      workingLife,
      retirementFund
    );
    const savingsPerMonthNotInvested = calculateSavingsPerMonthNotInvested(
      savingsPerYearNotInvested
    );
    const savingsPerYearInvested = calculateSavingsPerYearInvested(
      workingLife,
      retirementFund,
      interestRate
    );
    const savingsPerMonthInvested = calculateSavingsPerMonthInvested(
      savingsPerYearInvested
    );
    const savingsData = generateSavingsNotInvestedData(
      currentAge,
      retirementAge,
      savingsPerYearNotInvested
    );
    const investmentsData = generateSavingsInvestedData(
      currentAge,
      retirementAge,
      interestRate,
      savingsPerYearInvested
    );

    this.setState({
      retirementFund: retirementFund.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }),
      savingsPerMonthNotInvested: savingsPerMonthNotInvested.toLocaleString(
        undefined,
        { minimumFractionDigits: 2, maximumFractionDigits: 2 }
      ),
      savingsPerMonthInvested: savingsPerMonthInvested.toLocaleString(
        undefined,
        { minimumFractionDigits: 2, maximumFractionDigits: 2 }
      ),
      savingsNotInvestedData: savingsData,
      savingsInvestedData: investmentsData
    });
  };

  render() {
    return (
      <div>
        <div className="header">
          <h1>Retirement Planner</h1>
        </div>
        <div className="retirement-planner">
          <div className="questionnaire-and-numbers">
            <RetirementPlannerForm
              retirementFund={this.state.retirementFund}
              inputCurrentAge={this.inputCurrentAge}
              inputPassingAge={this.inputPassingAge}
              inputRetirementAge={this.inputRetirementAge}
              inputRetirementIncome={this.inputRetirementIncome}
              inputInterestRate={this.inputInterestRate}
              calculateRetirementFund={this.calculateRetirementFund}
              savingsPerMonthNotInvested={this.state.savingsPerMonthNotInvested}
              savingsPerMonthInvested={this.state.savingsPerMonthInvested}
            />
          </div>
          <div className="chart">
            <Chart
              savingsData={this.state.savingsNotInvestedData}
              savingsInvestedData={this.state.savingsInvestedData}
            />
          </div>
          <div className="funds-table">
            <FundsTable interestRate={this.state.interestRate} />
          </div>
        </div>
        <Login />
        <Signup />
        <Profile />
      </div>
    );
  }
}
