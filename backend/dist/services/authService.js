"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.login = void 0;
const login = (username, password) => {
    if (username === "admin" && password === "admin") {
        return { message: "Login successful", token: "fake-jwt-token" };
    }
    else {
        throw new Error("Invalid credentials");
    }
};
exports.login = login;
const logout = () => {
    return { message: "Logout successful" };
};
exports.logout = logout;
