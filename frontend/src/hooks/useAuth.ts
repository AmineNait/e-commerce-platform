import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import {
  login as loginService,
  logout as logoutService,
} from "../services/authService";

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  const login = async (username: string, password: string) => {
    const user = await loginService(username, password);
    context.login();
    return user;
  };

  const logout = async () => {
    await logoutService();
    context.logout();
  };

  return { ...context, login, logout };
};

export default useAuth;
