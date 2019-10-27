import React from "react";
import ReactDOM from "react-dom";
import { FundsData } from "./FundsData";
import { render, wait } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { localSampleData } from "../../Assets/localsampledata";
import mockFetch from "./fetch-utils";

describe("Mutual Funds from World Trading Data API", () => {
  beforeEach(() => {});
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<FundsData />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should render a list of mutual funds", async () => {
    window.fetch = jest.fn().mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(localSampleData)
    });

    mockFetch.mockOnce(localSampleData);
    const { getByText } = render(<FundsData />);
    await wait(() => getByText("AAAGX"));
    expect(getByText("AAAGX")).toBeInTheDocument();
  });
});
