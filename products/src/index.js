import express from "express";
import config from "./config/index.js";

const app = express();

app.use(express.json());

app.use("/", (_req, res, _next) => {
  return res.status(200).json({
    message: "Welcome to product service",
  });
});

app.listen(config.PORT, () => {
  console.log(`Products service running on http://localhost:${config.PORT}`);
});
