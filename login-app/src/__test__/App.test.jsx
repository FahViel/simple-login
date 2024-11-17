import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
import "@testing-library/jest-dom";

describe("App Component", () => {
  it("renders LoginForm component", () => {
    render(<App />);

    expect(screen.getByRole("heading", { name: /Login/i })).toBeInTheDocument();

    expect(screen.getByRole("button", { name: /Login/i })).toBeInTheDocument();
  });

  it("does not show a welcome message initially", () => {
    render(<App />);
    
    expect(screen.queryByText(/Login successful/i)).not.toBeInTheDocument();
  });
});
