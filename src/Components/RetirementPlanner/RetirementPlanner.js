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
import axios from "axios";

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
  componentDidMount() {
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
      .then(res => {
        this.calculateNumbers();
      })
      .catch(err => console.error(err));
  }

  calculateNumbers = () => {
    const currentAge = 2019 - this.state.birthYear;
    const retirementAge = this.state.retirementAge;
    const passingAge = this.state.passingAge;
    const retirementIncome = this.state.retirementIncome;
    const interestRate = this.state.interestRate / 100;
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
              interestRate={this.state.interestRate}
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
      </div>
    );
  }
}
