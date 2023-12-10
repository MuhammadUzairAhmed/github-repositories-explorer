import { beforeEach, describe, expect, it, vi } from "vitest";
import Users from "./Users";
import { store } from "../store/store";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import * as reactRedux from "react-redux";

vi.mock("react-redux", async () => {
  const actual = await vi.importActual("react-redux");
  return {
    ...actual,
    // your mocked methods
    useSelector: () => ({ useAppSelector: vi.fn() }),
    useDispatch: () => ({ useAppDispatch: vi.fn() }),
  };
});

describe("Users Component", async () => {
  const mockState = {
    users: [
      { id: 1, login: "testt-1" },
      { id: 2, login: "testt-2" },
    ],
    userId: 1, // Mock user ID
    repositories: [
      // Insert mock repository data here as needed for testing
      {
        id: 2,
        updated_at: "",
        description: "",
        forks_count: 2,
        owner: {
          id: 1,
          login: "test-1",
          avatar_url: "",
        },
      },
    ],
    isLoading: false,

  };

  const useSelectorMock = vi.spyOn(reactRedux, "useSelector");
  beforeEach(() => {
    useSelectorMock.mockClear();
  });
  it("renders user and repository data", async () => {
    useSelectorMock.mockReturnValue(mockState.users);
    const { getByText } = render(
      <Provider store={store}>
        <Users />
      </Provider>
    );

    expect(getByText("Loading...")).toBeTruthy();
    await vi.useFakeTimers();
  });
});
