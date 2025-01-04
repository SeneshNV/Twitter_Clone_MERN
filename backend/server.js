import express from "express";
import dotenv from "dotenv";
import authRouters from "./routes/auth.routes.js";
import connectMongoDB from "./db/connectMongoDB.js";
import cookieParser from "cookie-parser";

const app = express();

dotenv.config();
const port = process.env.PORT || 5000;
console.log(process.env.MONGO_URI);

app.use(express.json()); // to parse req.body
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use("/api/auth", authRouters);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
  connectMongoDB();
});
