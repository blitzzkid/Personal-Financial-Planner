import React from "react";
import { RetirementNumbers } from "./RetirementNumbers";
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

export class RetirementPlanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      retirementFund: 0,
      inflationRate: 0.02,
      savingsNotInvestedData: [],
      savingsInvestedData: [],
      savingsPerMonthNotInvested: 0,
      savingsPerMonthInvested: 0
    };
  }

  calculateNumbers = () => {
    const currentAge = this.props.birthYear;
    const retirementAge = this.props.retirementAge;
    const passingAge = this.props.passingAge;
    const retirementIncome = this.props.retirementIncome;
    const interestRate = this.props.interestRate / 100;
    const inflationRate = this.state.inflationRate;

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
            <RetirementNumbers
              retirementFund={this.state.retirementFund}
              calculateRetirementFund={this.calculateRetirementFund}
              savingsPerMonthNotInvested={this.state.savingsPerMonthNotInvested}
              savingsPerMonthInvested={this.state.savingsPerMonthInvested}
            />
            <button onClick={this.calculateNumbers}>Calculate</button>
            <p>{this.props.birthYear}</p>
            <p>{this.props.retirementAge}</p>
            <p>{this.props.passingAge}</p>
            <p>{this.props.retirementIncome}</p>
            <p>{this.props.interestRate}</p>
          </div>
          <div className="chart">
            <Chart
              savingsData={this.state.savingsNotInvestedData}
              savingsInvestedData={this.state.savingsInvestedData}
            />
          </div>
          <div className="funds-table">
            <FundsTable interestRate={this.props.interestRate} />
          </div>
        </div>
      </div>
    );
  }
}
