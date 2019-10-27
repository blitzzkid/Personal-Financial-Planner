import React from "react";
import { FundsData } from "./FundsData";
import "../RetirementPlanner/RetirementPlanner.css"

export const FundsTable = props => {
  return (
    <table>
      <thead>
        <tr>
          <TableHeader />
        </tr>
      </thead>
      <tbody>
        <FundsData interestRate={props.interestRate} />
      </tbody>
    </table>
  );
};

export const TableHeader = () => {
  return (
    <React.Fragment>
      <th>Symbol</th>
      <th>Name</th>
      <th>Price</th>
      <th>Return YTD</th>
      <th>Return 1 month</th>
      <th>Return 1 quarter</th>
      <th>Return 1 year</th>
      <th>Return 3 years</th>
      <th>Return 5 years</th>
      <th>Expense ratio</th>
    </React.Fragment>
  );
};

export const TableBodyRow = props => {
  const interestRate = props.interestRate;
  return (
    <React.Fragment>
      {props.items
        .filter(fund => {
          return fund.return_260week > interestRate;
        })
        .map(item => (
          <tr key={item.symbol}>
            <td>{item.symbol}</td>
            <td id="name">{item.name}</td>
            <td>{item.price}</td>
            <td>{item.return_ytd}</td>
            <td>{item.return_4week}</td>
            <td>{item.return_13week}</td>
            <td>{item.return_52week}</td>
            <td>{item.return_156week}</td>
            <td>{item.return_260week}</td>
            <td>{item.expense_ratio}</td>
          </tr>
        ))}
    </React.Fragment>
  );
};
