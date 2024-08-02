"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post("/login", (req, res) => {
    const { username, password } = req.body;
    if (username === "admin" && password === "admin") {
        res.json({ message: "Login successful", token: "fake-jwt-token" });
    }
    else {
        res.status(401).json({ message: "Invalid credentials" });
    }
});
router.post("/logout", (req, res) => {
    res.json({ message: "Logout successful" });
});
exports.default = router;
