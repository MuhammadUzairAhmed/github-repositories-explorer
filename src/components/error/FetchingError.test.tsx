import { describe, expect, it } from "vitest";
import { FetchingError } from "./FetchingError";
import { render } from "@testing-library/react";

describe("FetchingError Component", () => {
  it("renders error message", () => {
    const errorMessage = "Oops! Something went wrong.";

    const { getByText } = render(<FetchingError error={errorMessage} />);
    
    // Test if the error message is rendered
    const errorHeading = getByText("Error!! 🌍");
    expect(errorHeading).toBeTruthy();

    const displayedError = getByText(errorMessage);
    expect(displayedError).toBeTruthy();
    
  });
});
