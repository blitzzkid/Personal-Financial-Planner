import React from "react";
import "../../../node_modules/react-vis/dist/style.css";
import {
  XAxis,
  XYPlot,
  YAxis,
  LineSeries,
  DiscreteColorLegend,
  Hint
} from "react-vis";

export class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { savingsDataPoint: false, investedDataPoint: false };
  }

  render() {
    const { savingsDataPoint, investedDataPoint } = this.state;
    return (
      <div>
        <XYPlot height={600} width={600}>
          <XAxis title="Age (Years)" position="middle" />
          <YAxis title="Savings ($)" position="middle" tickLabelAngle={-59} />
          <LineSeries
            data={this.props.savingsData}
            style={{ stroke: "#ACC12F", strokeWidth: 3 }}
            onNearestX={(value, { index }) =>
              this.setState({
                savingsDataPoint: value,
                index
              })
            }
          />
          {savingsDataPoint && (
            <Hint value={savingsDataPoint}>
              <div style={savingsTipStyle}>
                <div style={boxStyle}>Age: {savingsDataPoint.x}</div>
                <div style={boxStyle}>
                  Savings: $
                  {savingsDataPoint.y.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                  })}
                </div>
              </div>
            </Hint>
          )}
          <LineSeries
            data={this.props.savingsInvestedData}
            style={{ stroke: "#086375", strokeWidth: 3 }}
            onNearestX={(value, { index }) =>
              this.setState({
                investedDataPoint: value,
                index
              })
            }
          />
          {investedDataPoint && (
            <Hint value={investedDataPoint}>
              <div style={investedTipStyle}>
                <div style={boxStyle}>Age: {investedDataPoint.x}</div>
                <div style={boxStyle}>
                  Savings: $
                  {investedDataPoint.y.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                  })}
                </div>
              </div>
            </Hint>
          )}
          <DiscreteColorLegend
            colors={["#ACC12F", "#086375"]}
            items={["Savings Not Invested", "Savings Invested"]}
            orientation="vertical"
            style={{ position: "absolute", left: "50px", top: "10px" }}
          />
        </XYPlot>
      </div>
    );
  }
}

const savingsTipStyle = {
  display: "flex",
  color: "black",
  background: "#ACC12F"
};

const investedTipStyle = {
  display: "flex",
  color: "white",
  background: "#086375"
};

const boxStyle = { height: "40px", width: "100px" };
