import { render, screen, fireEvent } from "@testing-library/react";
import { test, expect, vi } from "vitest";
import { Provider } from "react-redux";
import List from "./List";
import { store } from "../../store/store";

vi.mock("react-error-boundary", () => ({
  // Mock the useErrorBoundary hook behavior for testing
  useErrorBoundary: () => ({ showBoundary: vi.fn() }),
  useAppDispatch: () => ({ useAppDispatch: vi.fn() }),
}));

test("renders list item with button", () => {
  const mockItem = {
    id: 1,
    login: "Test User",
  };
  const mockUserId = 1;

  render(
    <Provider store={store}>
      <List item={mockItem} userId={mockUserId} />
    </Provider>
  );

  const listItem = screen.getByText("Test User");
  expect(listItem).toBeTruthy();

  const expandButton = screen.getByRole("button");
  expect(expandButton).toBeTruthy();

  // Simulate button click
  fireEvent.click(expandButton);
});
