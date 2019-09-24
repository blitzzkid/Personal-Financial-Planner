import React from "react";
import { FundsTable } from "./FundsTable";
import { localSampleData } from "../Assets/localsampledata";

// export class FundsData extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       error: null,
//       isLoaded: false,
//       items: []
//     };
//   }

//   componentDidMount() {
//     fetch(
//       "https://api.worldtradingdata.com/api/v1/mutualfund?symbol=AAAAX,AAADX,AAAGX&api_token=AsMSbK3bEO6rvdF7kYt9MfIyHeYatsuZOkwtcxsaRWJdE4hE0PBjWsLJr0C0"
//     )
//       .then(res => res.json())
//       .then(
//         result => {
//           this.setState({
//             isLoaded: true,
//             items: result.data
//           });
//         },
//         error => {
//           this.setState({
//             isLoaded: true,
//             error
//           });
//         }
//       );
//   }

//   render() {
//     const { error, isLoaded, items } = this.state;
//     if (error) {
//       return <div>Error: {error.message}</div>;
//     } else if (!isLoaded) {
//       return <div>Loading...</div>;
//     } else {
//       return "Hello World";
//     }
//   }
// }

export const sampleData = () => {
  const sampleData = localSampleData;
  return (
    <div>
      <FundsList list={sampleData} />
    </div>
  );
};

export const FundsList = props => {
  return (
    <div>
      {localSampleData.map(fund => {
        return (
          <FundsTable
            symbol={fund.symbol}
            name={fund.name}
            price={fund.price}
            returnytd={fund.return_ytd}
            return1month={fund.return_4week}
            return1quarter={fund.return_13week}
            return1year={fund.return_52week}
            return3year={fund.return_156week}
            return5year={fund.return_260week}
            expenseratio={fund.expense_ratio}
          />
        );
      })}
    </div>
  );
};
