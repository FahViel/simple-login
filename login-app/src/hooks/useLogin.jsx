import { useState } from "react";

/**
 * 
 * @returns {{login: (username: string, password: string) => void, error: string, isLoggedIn: boolean}}
 */

export function useLogin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const dummyUser = {
    username: "user123",
    password: "password123",
  };

  /**
   * 
   * @param {string} username 
   * @param {string} password
   */
  const login = (username, password) => {
    if (username === dummyUser.username && password === dummyUser.password) {
      setIsLoggedIn(true);
      setError("");
    } else {
      setIsLoggedIn(false);
      setError("Login failed: Invalid username or password");
    }
  };

  return { login, error, isLoggedIn };
}
