import React from "react";

export const RetirementNumbers = props => {
  return (
    <div>
      <div className="retirement-numbers">
        <h2>Your retirement needs</h2>
        <div>
          <p>Retirement fund required (accounting for 2% inflation)</p>
          <div data-testid={"retirement-fund"}>${props.retirementFund}</div>
          <p>Savings per month required if you don't invest</p>
          <div data-testid={"contribution-saved"}>
            ${props.savingsPerMonthNotInvested}
          </div>
          <p>
            Savings per month required if you meet your target investment
            returns
          </p>
          <div data-testid={"contribution-invested"}>
            ${props.savingsPerMonthInvested}
          </div>
        </div>
      </div>
    </div>
  );
};
