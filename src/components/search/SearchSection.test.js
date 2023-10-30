import React from "react";
import { act } from "react-dom/test-utils";
import SampleData from "../../mocks/SampleData";
import { render, fireEvent, waitFor } from "@testing-library/react";
import SearchSection from "./SearchSection";
import { fetchData } from "../../api";

jest.mock("../../api", () => ({
  fetchData: jest.fn(),
}));
describe("SearchSection", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("displays search results when search is successful", async () => {
    const mockData = {
      data: {
        items: SampleData,
      },
    };
    fetchData.mockResolvedValue(mockData);

    const { getByTestId } = render(<SearchSection />);

    fireEvent.change(getByTestId("search-input"), {
      target: { value: "test" },
    });
    fireEvent.click(getByTestId("search-button"));

    await act(async () => {
      await waitFor(() => expect(fetchData).toHaveBeenCalledTimes(1));
    });

    const searchResults = getByTestId("search-results");
    const items = searchResults.querySelectorAll(
      '[data-testid="search-result"]'
    );
    expect(items).toHaveLength(2);
  });

  test("displays error message when search fails", async () => {
    fetchData.mockRejectedValueOnce(new Error("Server Error!"));

    const { getByTestId, getByText } = render(<SearchSection />);

    fireEvent.change(getByTestId("search-input"), {
      target: { value: "test" },
    });
    fireEvent.click(getByTestId("search-button"));

    await act(async () => {
      await waitFor(() => expect(fetchData).toHaveBeenCalledTimes(1));
    });

    expect(getByText("Fetch data failed: Server Error!")).toBeInTheDocument();
  });
});
