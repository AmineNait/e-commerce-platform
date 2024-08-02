import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  // Implémenter la logique pour obtenir tous les produits
  res.json([
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
  ]);
});

router.post("/", (req: Request, res: Response) => {
  // Implémenter la logique pour ajouter un produit
  const product = req.body;
  // Logique simplifiée pour l'exemple
  res.json({ message: "Product added", product });
});

router.delete("/:id", (req: Request, res: Response) => {
  // Implémenter la logique pour supprimer un produit
  const { id } = req.params;
  // Logique simplifiée pour l'exemple
  res.json({ message: `Product with id ${id} removed` });
});

export default router;
