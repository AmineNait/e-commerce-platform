"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeProduct = exports.addProduct = exports.getAllProducts = void 0;
const uuid_1 = require("uuid");
let products = [
    { id: (0, uuid_1.v4)(), name: "Product 1", price: 100 },
    { id: (0, uuid_1.v4)(), name: "Product 2", price: 200 },
];
const getAllProducts = () => {
    return products;
};
exports.getAllProducts = getAllProducts;
const addProduct = (product) => {
    const newProduct = Object.assign(Object.assign({}, product), { id: (0, uuid_1.v4)() });
    products.push(newProduct);
    return newProduct;
};
exports.addProduct = addProduct;
const removeProduct = (id) => {
    products = products.filter((product) => product.id !== id);
};
exports.removeProduct = removeProduct;
