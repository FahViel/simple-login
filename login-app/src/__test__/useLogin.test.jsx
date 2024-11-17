import { renderHook } from "@testing-library/react";
import { act } from "react";
import { useLogin } from "../hooks/useLogin";

describe("useLogin custom hook", () => {
  it("should login successfully with valid credentials", () => {
    const { result } = renderHook(() => useLogin());

    act(() => {
      result.current.login("user123", "password123");
    });

    expect(result.current.isLoggedIn).toBe(true);
    expect(result.current.error).toBe("");
  });

  it("should fail login with invalid credentials", () => {
    const { result } = renderHook(() => useLogin());

    act(() => {
      result.current.login("wronguser", "wrongpassword");
    });

    expect(result.current.isLoggedIn).toBe(false);
    expect(result.current.error).toBe("Login failed: Invalid username or password");
  });

  it("should reset error on successful login after a failed attempt", () => {
    const { result } = renderHook(() => useLogin());

    act(() => {
      result.current.login("wronguser", "wrongpassword");
    });

    expect(result.current.isLoggedIn).toBe(false);
    expect(result.current.error).toBe("Login failed: Invalid username or password");

    act(() => {
      result.current.login("user123", "password123");
    });

    expect(result.current.isLoggedIn).toBe(true);
    expect(result.current.error).toBe("");
  });
});
