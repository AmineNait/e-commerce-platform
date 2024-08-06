import { Router } from "express";
import {
  getCartController,
  addItemToCartController,
  removeItemFromCartController,
  clearCartController,
} from "../controllers/cartController";

const router = Router();

router.get("/", getCartController);
router.post("/", addItemToCartController);
router.delete("/:id", removeItemFromCartController);
router.delete("/", clearCartController);

export default router;
