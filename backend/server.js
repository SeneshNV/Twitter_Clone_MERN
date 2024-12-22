import express from "express";
import dotenv from "dotenv";
import authRouters from "./routes/auth.routes.js";
import connectMongoDB from "./db/connectMongoDB.js";
const app = express();

dotenv.config();
const port = process.env.PORT || 5000;
console.log(process.env.MONGO_URI);

app.use("/api/auth", authRouters);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
  connectMongoDB();
});
