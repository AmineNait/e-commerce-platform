import React, { useState } from "react";
import useAuth from "../hooks/useAuth";

const LoginPage: React.FC = () => {
  const { login, logout, isAuthenticated } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await login(username, password);
      alert("Login successful");
    } catch (error) {
      alert("Login failed");
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      {isAuthenticated ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <div>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
