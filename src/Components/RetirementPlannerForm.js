import React from "react";

export const RetirementPlannerForm = props => {
  return (
    <div>
      <div className="questionnaire">
        <h2>Knowing more about you</h2>
        <p>
          <label htmlFor="current-age">How old are you now?</label>
          <br/>
          <input
            type="number"
            id="current-age"
            aria-label="current-age"
            onChange={event => props.inputCurrentAge(event)}
          />
          <span> years old</span>
        </p>
        <p>
          <label htmlFor="retirement-age">
            At what age do you plan to retire?
          </label>
          <br />
          <input
            type="number"
            id="retirement-age"
            aria-label="retirement-age"
            onChange={event => props.inputRetirementAge(event)}
          />
          <span> years old</span>
        </p>
        <label htmlFor="passing-age">
          How old do you expect to live until?
        </label>
        <br />
        <input
          type="number"
          id="passing-age"
          aria-label="passing-age"
          onChange={event => props.inputPassingAge(event)}
        />
        <span> years old</span>
        <p>
          <label htmlFor="retirement-income">
            How much money would you like to have per month during retirement?
          </label>
          <br />
          <input
            type="number"
            id="retirement-income"
            aria-label="retirement-income"
            onChange={event => props.inputRetirementIncome(event)}
          />
          <span> ($ in today's value)</span>
        </p>
        <p>
          <label htmlFor="target-returns">
            What is your targeted annual returns on investment?
          </label>
          <br />
          <input
            type="number"
            id="target-returns"
            aria-label="target-returns"
            onChange={event => props.inputInterestRate(event)}
          />
          <span> % </span>
        </p>
        <button onClick={props.calculateRetirementFund}>
          Plan for retirement
        </button>
      </div>
      <div className="retirement-numbers">
        <h2>Your retirement needs</h2>
        <div>
          <p>Retirement fund required (accounting for 2% inflation)</p>
          <div data-testid={"retirement-fund"}>${props.retirementFund.toLocaleString(undefined,
 {'minimumFractionDigits':2,'maximumFractionDigits':2})}</div>
          <p>Savings per month required if you don't invest</p>
          <div data-testid={"contribution-saved"}>
            ${props.savingsPerMonthNotInvested.toLocaleString(undefined,
 {'minimumFractionDigits':2,'maximumFractionDigits':2})}
          </div>
          <p>
            Savings per month required if you meet your target investment
            returns
          </p>
          <div data-testid={"contribution-invested"}>
            ${props.monthlyContributionInvested.toLocaleString(undefined,
 {'minimumFractionDigits':2,'maximumFractionDigits':2})}
          </div>
        </div>
      </div>
    </div>
  );
};
