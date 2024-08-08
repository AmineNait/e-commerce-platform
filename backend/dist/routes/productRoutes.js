"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = require("../controllers/productController");
const router = (0, express_1.Router)();
router.get("/", productController_1.getAllProductsController);
router.post("/", productController_1.addProductController);
router.delete("/:id", productController_1.removeProductController);
exports.default = router;
