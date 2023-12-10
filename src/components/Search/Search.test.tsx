import { render, fireEvent } from "@testing-library/react";
import { test, vi } from "vitest";
import { Provider } from "react-redux";
import Search from "./Search";
import { store } from "../../store/store";

vi.mock("react-error-boundary", () => ({
  // Mock the useErrorBoundary hook behavior for testing
  useErrorBoundary: () => ({ showBoundary: vi.fn() }),
  useAppDispatch: () => ({ useAppDispatch: vi.fn() }),
}));

test("renders list item with button", () => {
  const { getByPlaceholderText, getByText } = render(
    <Provider store={store}>
      <Search />
    </Provider>
  );
  const inputElement = getByPlaceholderText("Input here...");

  fireEvent.change(inputElement, { target: { value: "search term" } });

  // Triggering the search button click
  fireEvent.click(getByText("Submit"));
});
