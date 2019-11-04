import React from "react";
import { mount, configure } from "enzyme";
import { LineSeries } from "react-vis";
import Adapter from "enzyme-adapter-react-16";
import { Chart } from "./SavingsChart";
configure({ adapter: new Adapter() });

describe("Renders out chart accordingly", () => {
  describe("LineSeries: basic rendering", () => {
    it("should find the right number of series", () => {
      const chart = mount(<Chart />);
      expect(chart.find(".rv-xy-plot").length).toBe(1);
    });
  });
  describe("Renders defined functionalities", () => {
    it("should display the Hint on mouse hover on nearest X coordinate", () => {
      const savingsHint = mount(<LineSeries />);
      expect(savingsHint.hasClass("rv-hint"));
    });
  });
});
