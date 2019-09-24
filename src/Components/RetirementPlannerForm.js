import React from "react";

export const RetirementPlannerForm = props => {
  return (
    <div>
      <div>
        <h2>Your working and retirement years</h2>
      </div>
      <p>
        <label htmlFor="current-age">What is your current age? </label>
        <input
          type="number"
          id="current-age"
          onChange={event => props.inputCurrentAge(event)}
        />
      </p>
      <p>
        <label htmlFor="retirement-age">
          At what age do you plan to retire?
        </label>
        <input
          type="number"
          id="retirement-age"
          onChange={event => props.inputRetirementAge(event)}
        />
      </p>
      <div className="retirement-lifestyle">
        <h2>Your retirement lifestyle</h2>
      </div>
      <label htmlFor="passing-age">How old do you expect to live until?</label>
      <input
        type="number"
        id="passing-age"
        onChange={event => props.inputPassingAge(event)}
      />
      <p>
        <label htmlFor="retirement-income">
          Desired monthly income (in today's value)
        </label>
        <input
          type="number"
          id="retirement-income"
          onChange={event => props.inputRetirementIncome(event)}
        />
      </p>
      <div className="risk-appetite">
        <h2>Your risk appetite</h2>
      </div>
      <p>
        <label htmlFor="target-returns">
          What is your targeted annual returns on investment? (in %)
        </label>
        <input
          type="number"
          id="target-returns"
          onChange={event => props.inputInterestRate(event)}
        />
      </p>
      <button onClick={props.calculateRetirementFund}>Calculate</button>
      <div className="retirement-needs">
        <h2>Your Retirement Needs</h2>
      </div>
      <div>Retirement Fund (accounting for inflation of 2%)</div>
      <div> $ {props.retirementFund}</div>
      <div>Monthly contribution required (not invested)</div>
      <div>$ {props.savingsPerMonthNotInvested}</div>
      <div>Monthly contribution required (At your target ROI) </div>
      <div>$ {props.monthlyContributionInvested}</div>
    </div>
  );
};
