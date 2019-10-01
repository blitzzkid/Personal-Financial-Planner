import React from "react";
import { TableBodyRow } from "./FundsTable";
// import { localSampleData } from "../Assets/localsampledata";

export class FundsData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      items: []
    };
  }

  componentDidMount() {
    const checkResponse = res => {
      if (!res.ok) {
        throw Error(res.statusText);
      }
      return res;
    };

    const api = `https://api.worldtradingdata.com/api/v1/mutualfund?symbol=AAAAX,AAADX,AAAGX&api_token=${process.env.REACT_APP_TOKEN}`;

    fetch(api)
      .then(checkResponse)
      .then(res => res.json())
      .then(resInJson => {
        this.setState({
          items: resInJson.data
        });
      })
      .catch(error => {
        this.setState({
          error
        });
      });
  }

  render() {
    const { error, items } = this.state;
    if (error) {
      return <React.Fragment>Error:{error.message}</React.Fragment>;
    } else {
      return (
        <React.Fragment>
          <FundsList list={items} interestRate={this.props.interestRate}/>
        </React.Fragment>
      );
    }
  }
}

// export const FundsData = props => {
//   return (
//     <React.Fragment>
//       <FundsList list={localSampleData.data} interestRate={props.interestRate}/>
//     </React.Fragment>
//   );
// };

export const FundsList = props => {
  return (
    <React.Fragment>
      <TableBodyRow items={props.list} interestRate={props.interestRate}/>
    </React.Fragment>
  );
};
