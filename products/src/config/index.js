import dotenv from "dotenv";

const envFound = dotenv.config();

if (!envFound) throw new Error("Could not find the .env file");

export default {
  PORT: process.env.PORT || 9002,
  MONGODB_URI: process.env.MONGODB_URI,
  SECRET: process.env.SECRET || "secret",
};
