"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearCartController = exports.removeItemFromCartController = exports.addItemToCartController = exports.getCartController = void 0;
const cartModel_1 = __importDefault(require("../models/cartModel"));
const getCartController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cartItems = yield cartModel_1.default.find();
        res.json(cartItems);
    }
    catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Unknown error";
        res.status(500).json({ message: errorMessage });
    }
});
exports.getCartController = getCartController;
const addItemToCartController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId, name, price, quantity } = req.body;
    const newItem = new cartModel_1.default({ productId, name, price, quantity });
    try {
        const savedItem = yield newItem.save();
        res.json({ message: "Item added to cart", item: savedItem });
    }
    catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Unknown error";
        res.status(500).json({ message: errorMessage });
    }
});
exports.addItemToCartController = addItemToCartController;
const removeItemFromCartController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield cartModel_1.default.findByIdAndDelete(id);
        res.json({ message: `Item with id ${id} removed from cart` });
    }
    catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Unknown error";
        res.status(500).json({ message: errorMessage });
    }
});
exports.removeItemFromCartController = removeItemFromCartController;
const clearCartController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield cartModel_1.default.deleteMany();
        res.json({ message: "Cart cleared" });
    }
    catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Unknown error";
        res.status(500).json({ message: errorMessage });
    }
});
exports.clearCartController = clearCartController;
