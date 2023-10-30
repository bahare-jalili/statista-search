import React from "react";
import { render } from "@testing-library/react";
import ResultsHeader from "./ResultsHeader";

describe("ResultsHeader Component", () => {
  test("renders the total results correctly", () => {
    const results = [1, 2, 3];
    const { getByTestId } = render(<ResultsHeader results={results} />);
    const totalResultsText = getByTestId("results number");
    expect(totalResultsText).toBeInTheDocument();
  });
});
