import dotenv from "dotenv";

const envFound = dotenv.config();

if (!envFound) throw new Error("Could not find the .env file");

export default {
  PORT: process.env.PORT || 9000,
  CUSTOMER_URL: process.env.CUSTOMER_URL,
  PRODUCTS_URL: process.env.PRODUCTS_URL,
  SHOPPING_URL: process.env.SHOPPING_URL,
};
