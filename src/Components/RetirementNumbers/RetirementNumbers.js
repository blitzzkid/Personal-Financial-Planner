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
      <div className="recommended-funds">
        <h2>Recommended Funds</h2>
        <p>
          With a targeted returns of investment of {props.interestRate}%, the
          table on the right is a list of recommended funds which 5 year
          annualized returns exceed your target returns.
        </p>
      </div>
    </div>
  );
};
