import { Router } from "express";
import {
  getAllProductsController,
  addProductController,
  removeProductController,
} from "../controllers/productController";

const router = Router();

router.get("/", getAllProductsController);
router.post("/", addProductController);
router.delete("/:id", removeProductController);

export default router;
