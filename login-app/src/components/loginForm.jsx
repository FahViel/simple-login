import React from "react";
import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

/**
 * 
 * @returns {JSX.Element}
 */
export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoggedIn } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <>
      <h2>Login</h2>
      {isLoggedIn ? (
        <p>Login successful! Welcome, {username}.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
}
