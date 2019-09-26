import React from "react";
import { RetirementPlannerForm } from "./RetirementPlannerForm";
import { Chart } from "./Chart";
import { FundsTable } from "../Common/FundsTable";
import "./RetirementPlanner.css";

export class RetirementPlanner extends React.Component {
  constructor() {
    super();
    this.state = {
      currentAge: 0,
      retirementAge: 0,
      passingAge: 0,
      retirementIncome: 0,
      retirementFund: 0,
      inflationRate: 0.02,
      interestRate: 0.05,
      savingsData: [],
      savingsInvestedData: [],
      savingsPerMonthNotInvested: 0,
      monthlyContributionInvested: 0
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
      interestRate,
      savingsData,
      savingsInvestedData
    } = this.state;
    const lengthOfWorkingLife = retirementAge - currentAge;
    const retirementIncomeFactoringInflation =
      retirementIncome * (1 + inflationRate) ** lengthOfWorkingLife;
    const lengthOfRetirementInMonths = (passingAge - retirementAge) * 12;
    const retirementFund = Math.round(
      lengthOfRetirementInMonths * retirementIncomeFactoringInflation
    );
    const savingsPerYearNotInvested = retirementFund / lengthOfWorkingLife;
    const savingsPerMonthNotInvested = Math.round(
      savingsPerYearNotInvested / 12
    );

    let j = 1;
    for (let i = currentAge; i <= retirementAge; i++) {
      let dataPoint = {};
      dataPoint.x = i;
      dataPoint.y = savingsPerYearNotInvested * j;
      savingsData.push(dataPoint);
      j += 1;
    }
    const yearlyContributionInvested =
      (retirementFund * interestRate) /
      ((1 + interestRate) ** lengthOfWorkingLife - 1);
    const monthlyContributionInvested = Math.round(
      yearlyContributionInvested / 12
    );
    let k = 1;
    for (let i = currentAge; i <= retirementAge; i++) {
      let dataPoint = {};
      dataPoint.x = i;
      dataPoint.y =
        (yearlyContributionInvested / interestRate) *
        ((1 + interestRate) ** k - 1);
      savingsInvestedData.push(dataPoint);
      k += 1;
    }

    this.setState({
      retirementFund: retirementFund.toLocaleString(),
      savingsPerMonthNotInvested: savingsPerMonthNotInvested.toLocaleString(),
      monthlyContributionInvested: monthlyContributionInvested.toLocaleString(),
      savingsData: savingsData,
      savingsInvestedData: savingsInvestedData
    });
  };

  render() {
    return (
      <div className="retirement-planner">
        <div className="savings-calculator">
          <RetirementPlannerForm
            retirementFund={this.state.retirementFund}
            inputCurrentAge={this.inputCurrentAge}
            inputPassingAge={this.inputPassingAge}
            inputRetirementAge={this.inputRetirementAge}
            inputRetirementIncome={this.inputRetirementIncome}
            inputInterestRate={this.inputInterestRate}
            calculateRetirementFund={this.calculateRetirementFund}
            savingsPerMonthNotInvested={this.state.savingsPerMonthNotInvested}
            monthlyContributionInvested={this.state.monthlyContributionInvested}
          />
        </div>
        <div className="chart">
          <Chart
            savingsData={this.state.savingsData}
            savingsInvestedData={this.state.savingsInvestedData}
          />
        </div>
        <div className="funds-table">
          <FundsTable interestRate={this.state.interestRate} />
        </div>
      </div>
    );
  }
}
