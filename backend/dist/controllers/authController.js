"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logoutController = exports.loginController = void 0;
const authService_1 = require("../services/authService");
const loginController = (req, res) => {
    const { username, password } = req.body;
    try {
        const result = (0, authService_1.login)(username, password);
        res.json(result);
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        res.status(401).json({ message: errorMessage });
    }
};
exports.loginController = loginController;
const logoutController = (_req, res) => {
    const result = (0, authService_1.logout)();
    res.json(result);
};
exports.logoutController = logoutController;
