import React from "react";
import "./FundsTable.css";
// import { FundsList } from "./FundsData";

export const FundsTable = props => {
  return (
    <table className="funds-table">
      <thead>
        <tr>
          <TableHeader />
        </tr>
      </thead>
      <tbody>
        <tr>
          <TableBodyRow
            symbol={props.symbol}
            name={props.name}
            price={props.price}
            returnytd={props.returnytd}
            return1month={props.return1month}
            return1quarter={props.return1quarter}
            return1year={props.return1year}
            return3year={props.return3year}
            return5year={props.return5year}
            expenseratio={props.expenseratio}
          />
        </tr>
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
  return (
    <React.Fragment>
      <td>{props.symbol}</td>
      <td>{props.name}</td>
      <td>{props.price}</td>
      <td>{props.returnytd}</td>
      <td>{props.return1month}</td>
      <td>{props.return1quarter}</td>
      <td>{props.return1year}</td>
      <td>{props.return3year}</td>
      <td>{props.return5year}</td>
      <td>{props.expenseratio}</td>
    </React.Fragment>
  );
};
