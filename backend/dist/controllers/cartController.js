"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    // Implémenter la logique pour obtenir le panier
    res.json([
        { id: 1, name: "Product 1", price: 100, quantity: 2 },
        { id: 2, name: "Product 2", price: 200, quantity: 1 },
    ]);
});
router.post("/", (req, res) => {
    // Implémenter la logique pour ajouter un article au panier
    const item = req.body;
    // Logique simplifiée pour l'exemple
    res.json({ message: "Item added to cart", item });
});
router.delete("/:id", (req, res) => {
    // Implémenter la logique pour supprimer un article du panier
    const { id } = req.params;
    // Logique simplifiée pour l'exemple
    res.json({ message: `Item with id ${id} removed from cart` });
});
router.delete("/", (req, res) => {
    // Implémenter la logique pour vider le panier
    res.json({ message: "Cart cleared" });
});
exports.default = router;
