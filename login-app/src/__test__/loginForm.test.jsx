import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import LoginForm from "../components/loginForm";
import '@testing-library/jest-dom';

describe("LoginForm", () => {
  it("should show error on incorrect credentials", () => {
    render(<LoginForm />);
    
    fireEvent.change(screen.getByLabelText(/Username/i), {
      target: { value: "wronguser" },
    });
    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: "wrongpassword" },
    });
    fireEvent.click(screen.getByRole("button", { name: /Login/i }));
    
    expect(screen.getByText(/Login failed/i)).toBeInTheDocument();
  });

  it("should show success message on correct credentials", () => {
    render(<LoginForm />);

    fireEvent.change(screen.getByLabelText(/Username/i), {
      target: { value: "user123" },
    });
    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: "password123" },
    });
    fireEvent.click(screen.getByRole("button", { name: /Login/i }));

    expect(screen.getByText(/Login successful/i)).toBeInTheDocument();
  });
});
