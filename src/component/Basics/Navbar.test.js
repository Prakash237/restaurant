import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Test the Navbar Component", () => {
  test("render the Navbar with 1 buttons", () => {
    render(<Navbar />);
    const button = screen.getByRole("button", { name: "userInfo" });
    // expect(button).toHaveLength(2);
    console.log(button);
  });
});
