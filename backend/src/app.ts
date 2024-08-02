import express from "express";
import bodyParser from "body-parser";
import authRouter from "./controllers/authController";
import productRouter from "./controllers/productController";
import cartRouter from "./controllers/cartController";

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/auth", authRouter);
app.use("/api/products", productRouter);
app.use("/api/cart", cartRouter);

export default app;
