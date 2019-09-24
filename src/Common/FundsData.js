import React from "react";
import { TableBodyRow } from "./FundsTable";
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
//       return <FundsList list={items}/>;
//     }
//   }
// }

// export const Placeholder = () => {
//   return (
//     <div>
//       <FundsList list={localSampleData} />
//     </div>
//   );
// };

export const Placeholder = props => {
  // console.log(props.list)
  // console.log(typeof props.list)
  return (
    <React.Fragment>
      <TableBodyRow items={localSampleData} />
    </React.Fragment>
  );
};
