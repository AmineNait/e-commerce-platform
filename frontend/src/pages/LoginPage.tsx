import React from "react";
import useAuth from "../hooks/useAuth";

const LoginPage: React.FC = () => {
  const { login, logout, isAuthenticated } = useAuth();

  return (
    <div>
      <h1>Login Page</h1>
      {isAuthenticated ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
};

export default LoginPage;
