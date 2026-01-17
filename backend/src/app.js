import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import productRoutes from "./routes/product.routes.js"; 
import orderRoutes from "./routes/order.routes.js";

const app = express();

/* ---------- MIDDLEWARE ---------- */
app.use(express.json()); // parse JSON body
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:3000", // Next.js frontend
    credentials: true,
  })
);

/* ---------- ROUTES ---------- */
app.use("/auth", authRoutes);
app.use ("/products", productRoutes);
app.use("/orders", orderRoutes);

/* ---------- HEALTH CHECK ---------- */
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

export default app;
