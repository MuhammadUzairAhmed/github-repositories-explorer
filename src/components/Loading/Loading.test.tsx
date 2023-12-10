import { describe, expect, it } from "vitest";
import Loading from "./Loading";
import { render } from "@testing-library/react";

describe("Loading Component", () => {
  it("renders loading message", () => {
    const { getByText } = render(<Loading />);
    
    // Test if the loading message is rendered
    const loadingMessage = getByText("Loading...");
    expect(loadingMessage).toBeTruthy();
    
  });
});
