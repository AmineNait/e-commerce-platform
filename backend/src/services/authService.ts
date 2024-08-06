export const login = (username: string, password: string) => {
  if (username === "admin" && password === "admin") {
    return { message: "Login successful", token: "fake-jwt-token" };
  } else {
    throw new Error("Invalid credentials");
  }
};

export const logout = () => {
  return { message: "Logout successful" };
};
