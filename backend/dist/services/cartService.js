"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearCart = exports.removeItemFromCart = exports.addItemToCart = exports.getCart = void 0;
let cart = [
    { id: 1, name: "Product 1", price: 100, quantity: 2 },
    { id: 2, name: "Product 2", price: 200, quantity: 1 },
];
const getCart = () => {
    return cart;
};
exports.getCart = getCart;
const addItemToCart = (item) => {
    cart.push(item);
    return item;
};
exports.addItemToCart = addItemToCart;
const removeItemFromCart = (id) => {
    cart = cart.filter((item) => item.id !== id);
    return id;
};
exports.removeItemFromCart = removeItemFromCart;
const clearCart = () => {
    cart = [];
};
exports.clearCart = clearCart;
