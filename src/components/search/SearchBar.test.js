import { fireEvent, render } from "@testing-library/react";
import SearchBar from "./SearchBar";

test("renders the search bar", () => {
  const onSearchMock = jest.fn();
  const { getByTestId } = render(<SearchBar onSearch={onSearchMock} />);
  const input = getByTestId("search-input");
  const button = getByTestId("search-button");
  expect(input).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

test("handles search term changes and submits", () => {
  const onSearchMock = jest.fn();
  const { getByTestId } = render(<SearchBar onSearch={onSearchMock} />);
  const input = getByTestId("search-input");
  fireEvent.change(input, { target: { value: "economy" } });
  expect(input.value).toBe("economy");
  const button = getByTestId("search-button");
  fireEvent.click(button);
  expect(onSearchMock).toHaveBeenCalledWith("economy");
});
