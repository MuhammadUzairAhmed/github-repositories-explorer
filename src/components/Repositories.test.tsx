import { describe, expect, it } from "vitest";
import Repositories from "./Repositories";
import { render } from "@testing-library/react";

describe("Repositories Component", () => {
  it("renders repository details correctly", () => {
    const repository = {
      id: 1,
      updated_at: "2023-11-29T10:15:30Z", // A sample UTC date string
      owner: {
        id: 1,
        login: "testUser",
        avatar_url: "https://example.com/avatar.png",
      },
      description: null,
      forks_count: 5,
    };

    const { getByText } = render(<Repositories repository={repository} />);

    // Test if user login is rendered
    const userLoginElement = getByText("testUser");
    expect(userLoginElement).toBeTruthy();

    // Test if description is truncated or "No Description" is shown
    const descriptionElement = getByText("No Description");
    expect(descriptionElement).toBeTruthy();

    // Test if forks count is rendered
    const forksCountElement = getByText("Forks: 5");
    expect(forksCountElement).toBeTruthy();

    // Test if the formatted date is rendered
    const formattedDateElement = getByText("11/29/2023, 11:15:30 AM");
    expect(formattedDateElement).toBeTruthy();
  });
});
