import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

//routes
import userRoutes from "../api/routes/user.routes.js";
import kycroutes from "./routes/verifykyc.routes.js";

dotenv.config();
const app = express();
const PORT = 8000;

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected to mongodb server");
  } catch (err) {
    console.log(err);
  }
};

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use("/api/user", userRoutes);
app.use("/api/kyc", kycroutes);

app.listen(PORT, () => {
  connect();
  console.log(`server started on port ${PORT}`);
});
