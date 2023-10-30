import React from "react";
import { render } from "@testing-library/react";
import SearchResultItem from "./SearchResultItem";
import SampleData from "../../mocks/SampleData";
describe("SearchResultItem Component", () => {
  const mockResult = SampleData[0];

  test("renders the title and description correctly", () => {
    const { getByTestId } = render(<SearchResultItem result={mockResult} />);
    const title = getByTestId(
      `search-result-item-title-${mockResult.identifier}`
    );
    const description = getByTestId(
      `search-result-item-description-${mockResult.identifier}`
    );
    expect(title).toHaveTextContent(mockResult.title);
    expect(description).toHaveTextContent(mockResult.description);
  });

  test("renders the content type icon based on 'premium' property", () => {
    const { container } = render(<SearchResultItem result={mockResult} />);
    const premiumIcon = container.querySelector(".iconSprite--studyPremium");
    const basisIcon = container.querySelector(".iconSprite--studyBasis");
    expect(premiumIcon).toBeInTheDocument();
    expect(basisIcon).not.toBeInTheDocument();
  });

  test("renders the correct link and date", () => {
    const { getByTestId } = render(<SearchResultItem result={mockResult} />);
    const link = getByTestId(
      `search-result-item-link-${mockResult.identifier}`
    );

    expect(link).toHaveAttribute("href", mockResult.link);
    expect(link).toHaveAttribute("aria-label", `Link to ${mockResult.title}`);
    const date = getByTestId(
      `search-result-item-date-${mockResult.identifier}`
    );
    expect(date).toHaveTextContent(`Report | ${mockResult.date}`);
  });
});
