import HomePage from "@/app/page";
import { render, screen } from "@testing-library/react";

it("renders HomePage", () => {
  render(<HomePage />);
  expect(screen.getByText("Products")).toBeInTheDocument();
});
