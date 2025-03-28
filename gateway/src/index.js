import express from "express";
import config from "./config/index.js";
import cors from "cors";
import proxy from "express-http-proxy";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/customer", proxy(config.CUSTOMER_URL));
app.use("/shopping", proxy(config.SHOPPING_URL));
app.use("/", proxy(config.PRODUCTS_URL));

app.listen(config.PORT, () => {
  console.log(`Gateway running on http://localhost:${config.PORT}`);
});
