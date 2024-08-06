import express from "express";
import cors from "cors";
import productRoutes from "./routes/productRoutes";
import authRoutes from "./routes/authRoutes";
import cartRoutes from "./routes/cartRoutes";

const app = express();
const port = 5000;

app.use(cors({ origin: "http://localhost:3000" }));

app.use(express.json());
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/cart", cartRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
