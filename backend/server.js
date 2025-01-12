import express from "express";
import dotenv from "dotenv";
import authRouters from "./routes/auth.routes.js";
import userRouters from "./routes/user.routes.js";
import connectMongoDB from "./db/connectMongoDB.js";
import cookieParser from "cookie-parser";
import { v2 as cloudinary } from "cloudinary";

const app = express();

dotenv.config();

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const port = process.env.PORT || 5000;
console.log(process.env.MONGO_URI);

app.use(express.json()); // to parse req.body
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use("/api/auth", authRouters);
app.use("/api/users", userRouters);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
  connectMongoDB();
});
