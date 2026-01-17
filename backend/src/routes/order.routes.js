import express from "express";
import { createOrder } from "../controllers/order/order.controller.js";
import  authGuard  from "../middleware/auth.guard.js";

const router = express.Router();

router.post("/", authGuard, createOrder);

export default router;
