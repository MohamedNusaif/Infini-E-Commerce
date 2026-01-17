import express from "express";
 import authGuard from "../middleware/auth.guard.js";
import roleGuard from "../middleware/role.guard.js";

import {
  addProduct,
  getProducts,
  updateProduct,
  deleteProduct
} from "../controllers/product/product.controller.js";

const router = express.Router();

// Public
router.get("/", getProducts);

// Seller
router.post("/", authGuard, roleGuard("seller"), addProduct);
router.put("/:id", authGuard, roleGuard("seller"), updateProduct);

// Admin
router.delete("/:id", authGuard, roleGuard("admin"), deleteProduct);

export default router;
