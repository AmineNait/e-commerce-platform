"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const authController_1 = __importDefault(require("./controllers/authController"));
const productController_1 = __importDefault(require("./controllers/productController"));
const cartController_1 = __importDefault(require("./controllers/cartController"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.use("/api/auth", authController_1.default);
app.use("/api/products", productController_1.default);
app.use("/api/cart", cartController_1.default);
exports.default = app;
