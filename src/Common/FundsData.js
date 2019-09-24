import React from "react";
import { TableBodyRow } from "./FundsTable";
import { localSampleData } from "../Assets/localsampledata";

export class FundsData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch(
      "https://api.worldtradingdata.com/api/v1/mutualfund?symbol=AAAAX,AAADX,AAAGX&api_token=5YKyMMqefD3AYohhMVnqZe7sJpzyAdcovhoDR0Ar9Jc691ZSZ3bRNNl7Tbgs"
    )
      .then(res => res.json())
      .then(
        resInJson => {
          this.setState({
            isLoaded: true,
            items: resInJson.data
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <React.Fragment>Error: {error.message}</React.Fragment>;
    } else if (!isLoaded) {
      return <React.Fragment>Loading...</React.Fragment>;
    } else {
      return (
        <React.Fragment>
          <FundsList list={items} />
        </React.Fragment>
      );
    }
  }
}

// export const FundsData = () => {
//   return (
//     <React.Fragment>
//       <FundsList list={localSampleData} />
//     </React.Fragment>
//   );
// };

export const FundsList = props => {
  console.log(props.list);
  console.log(typeof props.list);
  return (
    <React.Fragment>
      <TableBodyRow items={props.list} />
    </React.Fragment>
  );
};
