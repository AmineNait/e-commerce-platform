import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  // Implémenter la logique pour obtenir le panier
  res.json([
    { id: 1, name: "Product 1", price: 100, quantity: 2 },
    { id: 2, name: "Product 2", price: 200, quantity: 1 },
  ]);
});

router.post("/", (req: Request, res: Response) => {
  // Implémenter la logique pour ajouter un article au panier
  const item = req.body;
  // Logique simplifiée pour l'exemple
  res.json({ message: "Item added to cart", item });
});

router.delete("/:id", (req: Request, res: Response) => {
  // Implémenter la logique pour supprimer un article du panier
  const { id } = req.params;
  // Logique simplifiée pour l'exemple
  res.json({ message: `Item with id ${id} removed from cart` });
});

router.delete("/", (req: Request, res: Response) => {
  // Implémenter la logique pour vider le panier
  res.json({ message: "Cart cleared" });
});

export default router;
