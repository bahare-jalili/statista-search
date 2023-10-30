import React from "react";
import { render } from "@testing-library/react";
import SearchResults from "./SearchResults";
import SampleData from "../../mocks/SampleData";
describe("SearchResults Component", () => {
  test("renders loading spinner when loading", () => {
    const { getByTestId } = render(
      <SearchResults loading={true} results={[]} />
    );

    const spinnerElement = getByTestId("loading-spinner");
    expect(spinnerElement).toBeInTheDocument();
  });

  test("renders no results message when there are no results", () => {
    const { getByTestId } = render(
      <SearchResults loading={false} results={[]} />
    );

    const alertElement = getByTestId("no-results-alert");
    expect(alertElement).toHaveTextContent("No Results");
  });

  test("renders results header and items when there are results", () => {
    const results = SampleData;

    const { getByText } = render(
      <SearchResults loading={false} results={results} />
    );

    results.forEach((result) => {
      const itemElement = getByText(result.title);
      expect(itemElement).toBeInTheDocument();
    });
  });
});
