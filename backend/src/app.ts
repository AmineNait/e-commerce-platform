import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import productRoutes from "./routes/productRoutes";
import authRoutes from "./routes/authRoutes";
import cartRoutes from "./routes/cartRoutes";

const app = express();
const port = 5000;

console.log("Attempting to connect to MongoDB...");

mongoose
  .connect("mongodb://127.0.0.1:27017/ecommerce") // Change localhost to 127.0.0.1
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1); // Stop the server if unable to connect to MongoDB
  });

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/cart", cartRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
