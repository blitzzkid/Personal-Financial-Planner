import React from "react";
import "../../node_modules/react-vis/dist/style.css";
import {
  XAxis,
  XYPlot,
  YAxis,
  LineSeries,
  DiscreteColorLegend
} from "react-vis";

export const Chart = props => {
  const savingsData = props.savingsData;
  const savingsInvestedData = props.savingsInvestedData;
  return (
    <div>
      <XYPlot height={600} width={600}>
        <XAxis title="Age (Years)" position="middle" />
        <YAxis title="Savings ($)" position="middle" tickLabelAngle={-59} />
        <LineSeries
          data={savingsData}
          style={{ stroke: "#19CDD7", strokeWidth: 3 }}
        />
        <LineSeries
          data={savingsInvestedData}
          style={{ stroke: "#DA70BF", strokeWidth: 3 }}
        />
        <DiscreteColorLegend
          colors={["#19CDD7", "#DA70BF"]}
          items={["Savings Not Invested", "Savings Invested"]}
          orientation="vertical"
          style={{position: 'absolute', left: '50px', top: '10px'}}
        />
      </XYPlot>
    </div>
  );
};
